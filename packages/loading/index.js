import { createApp } from "vue";
import FullScreenLoading from "./index.vue";

let loadingInstance = null;

const Loading = {
  show(options = {}) {
    if (!loadingInstance) {
      const app = createApp(FullScreenLoading);
      const container = document.createElement("div");
      document.body.appendChild(container);
      loadingInstance = app.mount(container);
    }
    loadingInstance.show(options);

    // 返回一个对象，包含 hide 方法
    return {
      hide: () => {
        if (loadingInstance) {
          loadingInstance.hide();
        }
      },
    };
  },
};

export default Loading;
