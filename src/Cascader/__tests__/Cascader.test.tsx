import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Cascader from '../index';

describe('Cascader Component', () => {
  const options = [
    {
      value: '1',
      label: 'Option 1',
      children: [
        {
          value: '1-1',
          label: 'Option 1-1',
          children: [
            {
              value: '1-1-1',
              label: 'Option 1-1-1',
            },
          ],
        },
      ],
    },
    {
      value: '2',
      label: 'Option 2',
    },
  ];

  it('should render correctly', () => {
    render(<Cascader options={options} placeholder="Select an option" />);
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('should display options when clicked', async () => {
    render(<Cascader options={options} placeholder="Select an option" />);
    const input = screen.getByText('Select an option');
    fireEvent.click(input);

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });
  });

  it('should handle selection change', async () => {
    const onChange = jest.fn();
    render(
      <Cascader
        options={options}
        placeholder="Select an option"
        onChange={onChange}
      />,
    );

    const input = screen.getByText('Select an option');
    fireEvent.click(input);

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    const option1 = screen.getByText('Option 1');
    fireEvent.click(option1);

    // Wait for menu items to update (just wait a bit for any potential changes)
    await new Promise<void>((resolve) => {
      setTimeout(resolve, 500);
    });

    // Check that menu is still open
    expect(screen.getByText('Option 1')).toBeInTheDocument();

    // Try to find and click Option 1-1
    const option11 = screen.getByText('Option 1-1');
    fireEvent.click(option11);

    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    });
  });

  it('should support disabled state', () => {
    render(
      <Cascader options={options} placeholder="Select an option" disabled />,
    );
    const input = screen.getByText('Select an option');
    expect(input).toBeInTheDocument();
  });
});
