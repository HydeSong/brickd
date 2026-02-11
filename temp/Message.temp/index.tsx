// Message component temporarily disabled due to SWC plugin compatibility issues
// Will be re-enabled once the SWC plugin issue is fixed

const MessageApi = {
  success: (config) => console.warn('Message.success is temporarily disabled'),
  error: (config) => console.warn('Message.error is temporarily disabled'),
  info: (config) => console.warn('Message.info is temporarily disabled'),
  warning: (config) => console.warn('Message.warning is temporarily disabled'),
  closeAll: () => console.warn('Message.closeAll is temporarily disabled'),
};

export default MessageApi;