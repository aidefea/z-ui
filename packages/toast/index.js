import { createApp, h } from "vue";
import ToastComponent from "./index.vue";

const ToastFactory = (message, options = {}) => {
  const { duration = 3000, type = "info", closable = true } = options;

  const container = document.createElement("div");
  document.body.appendChild(container);

  const app = createApp({
    render() {
      return h(ToastComponent, {
        message,
        duration,
        type,
        closable,
        onClose() {
          app.unmount();
          if (container.parentNode) {
            document.body.removeChild(container);
          }
        },
      });
    },
  });

  app.mount(container);

  // 自动关闭 Toast
  if (duration > 0) {
    setTimeout(() => {
      app.unmount();
      // 确保容器仍然存在
      if (container.parentNode) {
        document.body.removeChild(container);
      }
    }, duration);
  }
};

export default ToastFactory;
