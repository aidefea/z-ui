import ToastFactory from "./toast/index.js";
import zButton from "./button/index.vue";
import zpopup from "./popup/index.vue";

//组件
const component = [zButton, zpopup];

// 按需引入
export { zButton, zpopup };

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
