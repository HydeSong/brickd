import { fireEvent, screen, waitFor } from '@testing-library/react';
import { Message } from '../index';

describe('Message Component', () => {
  beforeEach(() => {
    // 清除所有现有的message容器
    const containers = document.querySelectorAll('.messageContainer');
    containers.forEach((container) => container.remove());
  });

  test.skip('shows success message', async () => {
    Message.success('Success message');

    await waitFor(() => {
      expect(screen.getByText('Success message')).toBeInTheDocument();
    });
  });

  test.skip('shows error message', async () => {
    Message.error('Error message');

    await waitFor(() => {
      expect(screen.getByText('Error message')).toBeInTheDocument();
    });
  });

  test.skip('shows info message', async () => {
    Message.info('Info message');

    await waitFor(() => {
      expect(screen.getByText('Info message')).toBeInTheDocument();
    });
  });

  test.skip('shows warning message', async () => {
    Message.warning('Warning message');

    await waitFor(() => {
      expect(screen.getByText('Warning message')).toBeInTheDocument();
    });
  });

  test.skip('closes message when close button is clicked', async () => {
    Message.info('Info message');

    await waitFor(() => {
      expect(screen.getByText('Info message')).toBeInTheDocument();
    });

    const closeButton = screen.getByLabelText('Close');
    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByText('Info message')).not.toBeInTheDocument();
    });
  });

  test.skip('closes message after duration', async () => {
    Message.info({ content: 'Info message', duration: 500 });

    await waitFor(() => {
      expect(screen.getByText('Info message')).toBeInTheDocument();
    });

    await waitFor(
      () => {
        expect(screen.queryByText('Info message')).not.toBeInTheDocument();
      },
      { timeout: 1000 },
    );
  });

  test.skip('calls onClose when message is closed', async () => {
    const onClose = jest.fn();
    Message.info({ content: 'Info message', onClose, duration: 500 });

    await waitFor(() => {
      expect(screen.getByText('Info message')).toBeInTheDocument();
    });

    await waitFor(
      () => {
        expect(onClose).toHaveBeenCalledTimes(1);
      },
      { timeout: 1000 },
    );
  });

  test.skip('closes all messages', async () => {
    Message.success('Success message');
    Message.error('Error message');

    await waitFor(() => {
      expect(screen.getByText('Success message')).toBeInTheDocument();
      expect(screen.getByText('Error message')).toBeInTheDocument();
    });

    Message.closeAll();

    await waitFor(() => {
      expect(screen.queryByText('Success message')).not.toBeInTheDocument();
      expect(screen.queryByText('Error message')).not.toBeInTheDocument();
    });
  });

  test.skip('does not show close button when showClose is false', async () => {
    Message.info({ content: 'Info message', showClose: false });

    await waitFor(() => {
      expect(screen.getByText('Info message')).toBeInTheDocument();
    });

    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument();
  });
});
