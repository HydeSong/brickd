// Message component temporarily disabled due to SWC plugin compatibility issues
// Will be re-enabled once the SWC plugin issue is fixed

const MessageApi = {
  success: () => console.warn('Message.success is temporarily disabled'),
  error: () => console.warn('Message.error is temporarily disabled'),
  info: () => console.warn('Message.info is temporarily disabled'),
  warning: () => console.warn('Message.warning is temporarily disabled'),
  closeAll: () => console.warn('Message.closeAll is temporarily disabled'),
};

export default MessageApi;
