import { fireEvent, screen, waitFor } from '@testing-library/react';
import Notification from '../index';

describe('Notification Component', () => {
  beforeEach(() => {
    // 清除所有现有的notification容器
    const containers = document.querySelectorAll('.notificationContainer');
    containers.forEach((container) => container.remove());
  });

  test.skip('shows success notification', async () => {
    Notification.success('Success notification');

    await waitFor(() => {
      expect(screen.getByText('Success notification')).toBeInTheDocument();
    });
  });

  test.skip('shows error notification', async () => {
    Notification.error('Error notification');

    await waitFor(() => {
      expect(screen.getByText('Error notification')).toBeInTheDocument();
    });
  });

  test.skip('shows info notification', async () => {
    Notification.info('Info notification');

    await waitFor(() => {
      expect(screen.getByText('Info notification')).toBeInTheDocument();
    });
  });

  test.skip('shows warning notification', async () => {
    Notification.warning('Warning notification');

    await waitFor(() => {
      expect(screen.getByText('Warning notification')).toBeInTheDocument();
    });
  });

  test.skip('shows notification with message and description', async () => {
    Notification.info({
      message: 'Notification Title',
      description: 'Notification description',
    });

    await waitFor(() => {
      expect(screen.getByText('Notification Title')).toBeInTheDocument();
      expect(screen.getByText('Notification description')).toBeInTheDocument();
    });
  });

  test.skip('closes notification when close button is clicked', async () => {
    Notification.info('Info notification');

    await waitFor(() => {
      expect(screen.getByText('Info notification')).toBeInTheDocument();
    });

    const closeButton = screen.getByLabelText('Close');
    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByText('Info notification')).not.toBeInTheDocument();
    });
  });

  test.skip('calls onClick when notification is clicked', async () => {
    const onClick = jest.fn();
    Notification.info({
      message: 'Clickable notification',
      onClick,
    });

    await waitFor(() => {
      expect(screen.getByText('Clickable notification')).toBeInTheDocument();
    });

    const notification = screen
      .getByText('Clickable notification')
      .closest('.notification');
    fireEvent.click(notification!);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test.skip('closes notification after duration', async () => {
    Notification.info({
      message: 'Auto close notification',
      duration: 500,
    });

    await waitFor(() => {
      expect(screen.getByText('Auto close notification')).toBeInTheDocument();
    });

    await waitFor(
      () => {
        expect(
          screen.queryByText('Auto close notification'),
        ).not.toBeInTheDocument();
      },
      { timeout: 1000 },
    );
  });

  test.skip('calls onClose when notification is closed', async () => {
    const onClose = jest.fn();
    Notification.info({
      message: 'Notification with onClose',
      duration: 500,
      onClose,
    });

    await waitFor(() => {
      expect(screen.getByText('Notification with onClose')).toBeInTheDocument();
    });

    await waitFor(
      () => {
        expect(onClose).toHaveBeenCalledTimes(1);
      },
      { timeout: 1000 },
    );
  });

  test.skip('closes all notifications', async () => {
    Notification.success('Success notification');
    Notification.error('Error notification');

    await waitFor(() => {
      expect(screen.getByText('Success notification')).toBeInTheDocument();
      expect(screen.getByText('Error notification')).toBeInTheDocument();
    });

    Notification.closeAll();

    await waitFor(() => {
      expect(
        screen.queryByText('Success notification'),
      ).not.toBeInTheDocument();
      expect(screen.queryByText('Error notification')).not.toBeInTheDocument();
    });
  });

  test.skip('does not show close button when showClose is false', async () => {
    Notification.info({
      message: 'Notification without close button',
      showClose: false,
    });

    await waitFor(() => {
      expect(
        screen.getByText('Notification without close button'),
      ).toBeInTheDocument();
    });

    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument();
  });
});
