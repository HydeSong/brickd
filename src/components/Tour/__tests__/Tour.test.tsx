import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Tour from '../index';

describe('Tour Component', () => {
  test('renders tour with steps', () => {
    const steps = [
      {
        title: 'Step 1',
        content: 'Content 1',
        target: 'body',
      },
      {
        title: 'Step 2',
        content: 'Content 2',
        target: 'body',
      },
    ];

    render(<Tour steps={steps} visible />);

    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  test('handles navigation between steps', async () => {
    const steps = [
      {
        title: 'Step 1',
        content: 'Content 1',
        target: 'body',
      },
      {
        title: 'Step 2',
        content: 'Content 2',
        target: 'body',
      },
    ];

    render(<Tour steps={steps} visible />);

    // Check initial step
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.queryByText('Step 2')).not.toBeInTheDocument();

    // Click next button
    fireEvent.click(screen.getByText('下一步'));

    // Wait for step to change
    await waitFor(() => {
      expect(screen.getByText('Step 2')).toBeInTheDocument();
    });

    // Check that Step 1 is no longer visible
    expect(screen.queryByText('Step 1')).not.toBeInTheDocument();

    // Click previous button
    fireEvent.click(screen.getByText('上一步'));

    // Wait for step to change back
    await waitFor(() => {
      expect(screen.getByText('Step 1')).toBeInTheDocument();
    });

    // Check that Step 2 is no longer visible
    expect(screen.queryByText('Step 2')).not.toBeInTheDocument();
  });

  test('calls onFinish callback when tour is completed', () => {
    const onFinishMock = jest.fn();
    const steps = [
      {
        title: 'Step 1',
        content: 'Content 1',
        target: 'body',
      },
    ];

    render(<Tour steps={steps} visible onFinish={onFinishMock} />);

    fireEvent.click(screen.getByText('完成'));
    expect(onFinishMock).toHaveBeenCalledTimes(1);
  });

  test('calls onCancel callback when tour is canceled', () => {
    const onCancelMock = jest.fn();
    const steps = [
      {
        title: 'Step 1',
        content: 'Content 1',
        target: 'body',
      },
    ];

    render(<Tour steps={steps} visible onCancel={onCancelMock} />);

    fireEvent.click(screen.getByText('取消'));
    expect(onCancelMock).toHaveBeenCalledTimes(1);
  });

  test('calls onCurrentChange callback when current step changes', async () => {
    const onCurrentChangeMock = jest.fn();
    const steps = [
      {
        title: 'Step 1',
        content: 'Content 1',
        target: 'body',
      },
      {
        title: 'Step 2',
        content: 'Content 2',
        target: 'body',
      },
    ];

    render(
      <Tour steps={steps} visible onCurrentChange={onCurrentChangeMock} />,
    );

    // Click next button
    fireEvent.click(screen.getByText('下一步'));

    // Wait for callback and step change
    await waitFor(() => {
      expect(onCurrentChangeMock).toHaveBeenCalledWith(1);
    });

    // Wait for previous button to appear
    await waitFor(() => {
      expect(screen.getByText('上一步')).toBeInTheDocument();
    });

    // Click previous button
    fireEvent.click(screen.getByText('上一步'));

    // Wait for callback and step change back
    await waitFor(() => {
      expect(onCurrentChangeMock).toHaveBeenCalledWith(0);
    });
  });

  test('renders tour with different placements', () => {
    const placements = ['top', 'bottom', 'left', 'right'] as const;
    placements.forEach((placement) => {
      const steps = [
        {
          title: `Step with ${placement} placement`,
          content: 'Content',
          target: 'body',
          placement,
        },
      ];

      render(<Tour steps={steps} visible />);

      expect(
        screen.getByText(`Step with ${placement} placement`),
      ).toBeInTheDocument();
    });
  });

  test('renders tour without mask', () => {
    const steps = [
      {
        title: 'Step 1',
        content: 'Content 1',
        target: 'body',
      },
    ];

    const { container } = render(<Tour steps={steps} visible mask={false} />);

    expect(container.querySelector('.tourMask')).not.toBeInTheDocument();
  });
});
