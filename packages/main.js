import ToastFactory from "./toast/index.js";
import ZButton from "./button/index.js";
import zpopup from "./popup/index.js";

//组件
const components = {
  ZButton: ZButton,
  zpopup: zpopup,
};

export { ZButton };

//函数
const functions = [{ toast: ToastFactory }];

const ZUI = {
  install(App) {
    Object.entries(components).forEach(([name, component]) => {
      App.component(name, component);
    });
    functions.forEach((fnObj) => {
      for (const [name, fn] of Object.entries(fnObj)) {
        App.config.globalProperties[`$${name}`] = fn;
      }
    });
  },
};

export default ZUI;
