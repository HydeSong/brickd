import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import styles from './Notification.module.css';

interface NotificationConfig {
  message?: React.ReactNode;
  description?: React.ReactNode;
  duration?: number;
  type?: 'success' | 'error' | 'info' | 'warning';
  showClose?: boolean;
  onClose?: (id?: string) => void;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  placement?: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft';
}

interface NotificationInstance {
  id: string;
  config: NotificationConfig;
  close: () => void;
}

const Notification: React.FC<
  NotificationConfig & { id: string; onClose: (id: string) => void }
> = ({
  id,
  message,
  description,
  duration = 4500,
  type = 'info',
  showClose = true,
  onClose,
  onClick,
  className,
  style,
}) => {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose(id);
    }, 300);
  };

  useEffect(() => {
    setVisible(true);

    if (duration > 0) {
      timerRef.current = setTimeout(() => {
        handleClose();
      }, duration);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [duration]);

  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (duration > 0) {
      timerRef.current = setTimeout(() => {
        handleClose();
      }, duration);
    }
  };

  const handleClick = () => {
    onClick?.();
  };

  return (
    <div
      className={`${styles.notification} ${
        styles[`notification${type.charAt(0).toUpperCase() + type.slice(1)}`]
      } ${className || ''} ${visible ? styles.visible : ''}`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {showClose && (
        <button
          type="button"
          className={styles.notificationClose}
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          aria-label="Close"
        >
          ×
        </button>
      )}
      {message && <div className={styles.notificationMessage}>{message}</div>}
      {description && (
        <div className={styles.notificationDescription}>{description}</div>
      )}
    </div>
  );
};

class NotificationManager {
  private containers: Map<string, HTMLDivElement> = new Map();
  private roots: Map<string, ReactDOM.Root> = new Map();
  private instances: Map<string, NotificationInstance> = new Map();
  private idCounter = 0;

  private createContainer(placement: string) {
    if (!this.containers.has(placement)) {
      const container = document.createElement('div');
      container.className = `${styles.notificationContainer} ${styles[placement]}`;
      document.body.appendChild(container);
      this.containers.set(placement, container);
      const root = ReactDOM.createRoot(container);
      this.roots.set(placement, root);
    }
    return this.containers.get(placement)!;
  }

  private generateId() {
    return `notification_${++this.idCounter}_${Date.now()}`;
  }

  private addNotification(config: NotificationConfig) {
    const id = this.generateId();
    const placement = config.placement || 'topRight';
    this.createContainer(placement);

    const instance: NotificationInstance = {
      id,
      config,
      close: () => {
        this.removeNotification(id);
      },
    };

    this.instances.set(id, instance);

    const render = () => {
      const notifications = Array.from(this.instances.values())
        .filter(
          ({ config: { placement: instPlacement } }) =>
            instPlacement === placement,
        )
        .map(({ id, config }) => (
          <Notification
            key={id}
            id={id}
            message={config.message}
            description={config.description}
            duration={config.duration}
            type={config.type}
            showClose={config.showClose}
            onClick={config.onClick}
            className={config.className}
            style={config.style}
            onClose={(messageId) => {
              config.onClose?.(messageId);
              if (messageId) {
                this.removeNotification(messageId);
              }
            }}
          />
        ));

      const root = this.roots.get(placement);
      if (root) {
        root.render(<>{notifications}</>);
      }
    };

    render();

    return instance;
  }

  private removeNotification(id: string) {
    const instance = this.instances.get(id);
    if (instance) {
      this.instances.delete(id);
      const placement = instance.config.placement || 'topRight';
      const container = this.containers.get(placement);

      if (container) {
        const notifications = Array.from(this.instances.values())
          .filter(
            ({ config: { placement: instPlacement } }) =>
              instPlacement === placement,
          )
          .map(({ id, config }) => (
            <Notification
              key={id}
              id={id}
              message={config.message}
              description={config.description}
              duration={config.duration}
              type={config.type}
              showClose={config.showClose}
              onClick={config.onClick}
              className={config.className}
              style={config.style}
              onClose={(messageId) => {
                config.onClose?.(messageId);
                if (messageId) {
                  this.removeNotification(messageId);
                }
              }}
            />
          ));

        const root = this.roots.get(placement);
        if (root) {
          root.render(<>{notifications}</>);
        }
      }

      // 清理空容器
      this.cleanupEmptyContainers();
    }
  }

  private cleanupEmptyContainers() {
    this.containers.forEach((container, placement) => {
      const hasNotifications = Array.from(this.instances.values()).some(
        ({ config: { placement: instPlacement } }) =>
          instPlacement === placement,
      );

      if (!hasNotifications) {
        document.body.removeChild(container);
        this.containers.delete(placement);
        this.roots.delete(placement);
      }
    });
  }

  success(config: React.ReactNode | NotificationConfig) {
    const notificationConfig =
      typeof config === 'object' && !React.isValidElement(config)
        ? config
        : { message: config };
    return this.addNotification({ ...notificationConfig, type: 'success' });
  }

  error(config: React.ReactNode | NotificationConfig) {
    const notificationConfig =
      typeof config === 'object' && !React.isValidElement(config)
        ? config
        : { message: config };
    return this.addNotification({ ...notificationConfig, type: 'error' });
  }

  info(config: React.ReactNode | NotificationConfig) {
    const notificationConfig =
      typeof config === 'object' && !React.isValidElement(config)
        ? config
        : { message: config };
    return this.addNotification({ ...notificationConfig, type: 'info' });
  }

  warning(config: React.ReactNode | NotificationConfig) {
    const notificationConfig =
      typeof config === 'object' && !React.isValidElement(config)
        ? config
        : { message: config };
    return this.addNotification({ ...notificationConfig, type: 'warning' });
  }

  closeAll() {
    this.instances.forEach(({ id }) => {
      this.removeNotification(id);
    });
  }
}

const notificationManager = new NotificationManager();

const NotificationApi = {
  success: notificationManager.success.bind(notificationManager),
  error: notificationManager.error.bind(notificationManager),
  info: notificationManager.info.bind(notificationManager),
  warning: notificationManager.warning.bind(notificationManager),
  closeAll: notificationManager.closeAll.bind(notificationManager),
};

export default NotificationApi;
