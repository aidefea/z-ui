import { createVNode, render, nextTick } from "vue";
import Notify from "./index.vue";

let notifyInstance = null;

const createNotifyInstance = () => {
  const vnode = createVNode(Notify);
  const container = document.createElement("div");
  document.body.appendChild(container);
  render(vnode, container);
  return vnode.component.proxy; // 返回组件实例的 proxy
};

const notify = async (options) => {
  if (!notifyInstance) {
    notifyInstance = createNotifyInstance();
    await nextTick(); // 确保组件挂载完成
  }
  if (notifyInstance.addNotification) {
    notifyInstance.addNotification(options);
  } else {
    console.error("addNotification method is not available on notifyInstance");
  }
};

export default notify;
