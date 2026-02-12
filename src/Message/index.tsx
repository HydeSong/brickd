import React from 'react';
import { createRoot, Root } from 'react-dom/client'; // React 18+ 推荐用法
import styles from './Message.module.css';

// 消息配置接口
interface MessageConfig {
  content: React.ReactNode;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  showClose?: boolean;
  onClose?: () => void;
}

// 消息实例接口
interface MessageInstance {
  id: string;
  close: () => void;
}

// 消息容器组件
const MessageContainer: React.FC<{
  messages: Array<{
    id: string;
    config: MessageConfig;
  }>;
  onClose: (id: string) => void;
}> = ({ messages, onClose }) => {
  return (
    <div className={styles.messageContainer}>
      {messages.map(({ id, config }) => {
        // 优化类型处理，避免 undefined 风险
        const type = config.type || 'info';
        const typeClassName = `message${
          type.charAt(0).toUpperCase() + type.slice(1)
        }`;

        return (
          <div
            key={id}
            className={`${styles.message} ${styles.visible} ${styles[typeClassName]}`}
          >
            <div className={styles.messageContent}>{config.content}</div>
            {config.showClose !== false && (
              <button
                type="button"
                className={styles.messageClose}
                onClick={() => onClose(id)}
                aria-label="Close"
              >
                ×
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

// 类型守卫：判断是否为 MessageConfig 类型（核心修复点）
function isMessageConfig(
  content: React.ReactNode | MessageConfig,
): content is MessageConfig {
  return (
    typeof content === 'object' &&
    content !== null &&
    !React.isValidElement(content) && // 排除 React 元素（如 <div>内容</div>）
    'content' in content
  );
}

class Message {
  // 消息列表
  private messages: Array<{
    id: string;
    config: MessageConfig;
  }> = [];
  // 容器 DOM 引用
  private containerRef: HTMLElement | null = null;
  // React 18+ Root 实例
  private root: Root | null = null;
  // 定时器映射
  private messageInstances: Map<string, NodeJS.Timeout> = new Map();

  /** 创建消息容器 DOM 节点 */
  private createContainer() {
    if (!this.containerRef) {
      const container = document.createElement('div');
      document.body.appendChild(container);
      this.containerRef = container;
      // 创建 React 18+ 的根实例
      this.root = createRoot(container);
    }
    return this.containerRef;
  }

  /** 渲染消息容器 */
  private render() {
    this.createContainer();
    if (this.root) {
      this.root.render(
        <MessageContainer
          messages={this.messages}
          onClose={(id) => this.removeMessage(id)}
        />,
      );
    }
  }

  /** 生成唯一 ID */
  private generateId(): string {
    return `message_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /** 添加消息 */
  private addMessage(config: MessageConfig): MessageInstance {
    const id = this.generateId();
    this.messages.push({ id, config });
    this.render();

    // 设置自动关闭定时器（duration 为 0 时不自动关闭）
    if (config.duration !== 0) {
      const timer = setTimeout(() => {
        this.removeMessage(id);
      }, config.duration || 3000);
      this.messageInstances.set(id, timer);
    }

    return {
      id,
      close: () => this.removeMessage(id),
    };
  }

  /** 移除指定消息 */
  private removeMessage(id: string) {
    // 清除定时器
    const timer = this.messageInstances.get(id);
    if (timer) {
      clearTimeout(timer);
      this.messageInstances.delete(id);
    }

    // 移除消息并重新渲染
    const index = this.messages.findIndex((message) => message.id === id);
    if (index !== -1) {
      const message = this.messages[index];
      this.messages.splice(index, 1);
      this.render();
      // 执行关闭回调
      if (message.config.onClose) {
        message.config.onClose();
      }
    }
  }

  /** 成功消息 */
  success(content: React.ReactNode | MessageConfig): MessageInstance {
    const config = isMessageConfig(content) ? content : { content };
    return this.addMessage({ ...config, type: 'success' });
  }

  /** 错误消息 */
  error(content: React.ReactNode | MessageConfig): MessageInstance {
    const config = isMessageConfig(content) ? content : { content };
    return this.addMessage({ ...config, type: 'error' });
  }

  /** 信息消息 */
  info(content: React.ReactNode | MessageConfig): MessageInstance {
    const config = isMessageConfig(content) ? content : { content };
    return this.addMessage({ ...config, type: 'info' });
  }

  /** 警告消息 */
  warning(content: React.ReactNode | MessageConfig): MessageInstance {
    const config = isMessageConfig(content) ? content : { content };
    return this.addMessage({ ...config, type: 'warning' });
  }

  /** 关闭所有消息 */
  closeAll() {
    // 清除所有定时器
    this.messageInstances.forEach((timer) => clearTimeout(timer));
    this.messageInstances.clear();
    // 清空消息列表并重新渲染
    this.messages = [];
    this.render();
  }
}

// 创建单例实例
const message = new Message();

export default message;
export type { MessageConfig, MessageInstance };
