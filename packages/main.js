import ToastFactory from "./toast/index.js";
import zbutton from "./button/index.js";
import zpopup from "./popup/index.js";
import zinput from "./input/index.js";

//组件
const components = {
  ZButton: zbutton,
  ZPopup: zpopup,
  ZInput: zinput,
};

// 按需引入
export { zbutton, zpopup, zinput };

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
