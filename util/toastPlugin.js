import { createVNode, render } from "vue";
import Toast from "../packages/toast/index.vue";

let currentToast = null;

const ToastPlugin = {
  install(app) {
    app.config.globalProperties.$toast = function (options) {
      if (currentToast) {
        render(null, currentToast); // 删除上一个 Toast
      }

      const vnode = createVNode(Toast, options);
      const container = document.createElement("div");
      document.body.appendChild(container);
      render(vnode, container);

      currentToast = container;
    };
  },
};

export default ToastPlugin;
