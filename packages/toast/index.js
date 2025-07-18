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
        onClose: () => {
          app.unmount();
          if (container.parentNode) {
            document.body.removeChild(container);
          }
        },
      });
    },
  });

  app.mount(container);

  // 返回关闭方法
  return {
    close: () => {
      const toastComponent = app._instance?.proxy;
      if (toastComponent) {
        toastComponent.closeToast();
      }
    },
  };
};

export default ToastFactory;
