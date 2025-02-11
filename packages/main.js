import toast from "./toast/index.vue";
import ToastFactory from "./toast/index.js";

// 按需引入
export { toast };

//组件
const component = [toast];

//函数
const functions = [{ toast: ToastFactory }];

const ZUI = {
  install(App) {
    component.forEach((item) => {
      App.component(item.name, item);
    });

    functions.forEach((fnObj) => {
      for (const [name, fn] of Object.entries(fnObj)) {
        App.config.globalProperties[`$${name}`] = fn;
      }
    });
  },
};

export default ZUI;
