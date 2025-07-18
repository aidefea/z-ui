// src/utils/toastManager.js
const toastStack = [];
const verticalSpacing = 16; // Toast 之间的垂直间距
const baseTop = 20; // 初始顶部间距

export default {
  toastStack,

  addToast(toastInstance) {
    toastStack.push(toastInstance);
    this.updatePositions();
  },

  removeToast(toastInstance) {
    const index = toastStack.findIndex((t) => t.id === toastInstance.id);
    if (index !== -1) {
      toastStack.splice(index, 1);

      // 添加延迟确保关闭动画完成
      setTimeout(() => {
        this.updatePositions();
      }, 300);
    }
  },

  updatePositions() {
    let currentTop = baseTop;

    // 重新计算所有 Toast 位置
    toastStack.forEach((toast) => {
      // 如果 Toast 已挂载，更新其位置
      if (toast.setPosition) {
        toast.setPosition(currentTop);
        currentTop += toast.height + verticalSpacing;
      }
    });
  },

  // 当 Toast 高度变化时更新
  updateToastHeight(toastInstance, newHeight) {
    const toast = toastStack.find((t) => t.id === toastInstance.id);
    if (toast) {
      toast.height = newHeight;
      this.updatePositions();
    }
  },
};
