<template>
  <transition name="toast" @after-leave="onAfterLeave">
    <div
      v-if="visible"
      ref="toastElement"
      :class="[
        'z-toast',
        `z-toast--${type}`,
        {
          'z-toast-closable': closable,
        },
      ]"
      :style="{ top: position + 'px' }"
      @click="handleClick"
    >
      <span class="z-toast-message">{{ message }}</span>
      <button
        v-if="closable"
        class="z-toast-close"
        @click="closeToast"
      ></button>
    </div>
  </transition>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import toastManager from "./toastManager";

export default {
  name: "Toast",
  props: {
    message: String,
    duration: {
      type: Number,
      default: 3000,
    },
    type: {
      type: String,
      default: "info",
    },
    closable: {
      type: Boolean,
      default: true,
    },
    onClose: Function,
  },
  setup(props) {
    const visible = ref(true);
    const position = ref(0);
    const toastElement = ref(null);
    const height = ref(0);
    const id = Symbol("toast");
    let timer = null;
    let resizeObserver = null; // 存储 ResizeObserver 实例

    const setPosition = (newPosition) => {
      position.value = newPosition;
    };

    const updateHeight = () => {
      if (toastElement.value) {
        const newHeight = toastElement.value.offsetHeight;
        if (newHeight !== height.value) {
          height.value = newHeight;
          toastManager.updateToastHeight({ id, setPosition }, newHeight);
        }
      }
    };

    const showToast = () => {
      visible.value = true;
      nextTick(() => {
        if (toastElement.value) {
          height.value = toastElement.value.offsetHeight;
          toastManager.addToast({ id, setPosition, height: height.value });

          // 创建并添加 resize 监听器
          resizeObserver = new ResizeObserver(updateHeight);
          resizeObserver.observe(toastElement.value);
        }
      });
    };

    const closeToast = () => {
      visible.value = false;
    };

    const onAfterLeave = () => {
      // 动画结束后移除 Toast
      toastManager.removeToast({ id, setPosition });
      props.onClose?.();
    };

    // 在同步上下文中注册生命周期钩子
    onMounted(() => {
      showToast();

      if (props.duration > 0) {
        timer = setTimeout(closeToast, props.duration);
      }
    });

    // 使用 onBeforeUnmount 替代 onUnmounted
    onBeforeUnmount(() => {
      if (timer) clearTimeout(timer);

      // 断开 ResizeObserver
      if (resizeObserver) {
        resizeObserver.disconnect();
      }

      // 确保从管理器中移除
      toastManager.removeToast({ id, setPosition });
    });

    const handleClick = () => {
      if (props.closable) closeToast();
    };

    return {
      visible,
      position,
      toastElement,
      closeToast,
      onAfterLeave,
      handleClick,
    };
  },
};
</script>

<style>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.1s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(-20px) translateX(-50%);
}

.toast-enter-to,
.toast-leave-from {
  opacity: 1;
  transform: translateY(0) translateX(-50%);
}

.z-toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: top 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
  max-width: 90%;
  box-sizing: border-box;
  pointer-events: auto;
}

.z-toast-message {
  margin-right: 10px;
}

.z-toast-close {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  width: 15px;
  height: 15px;
  position: relative;
}

.z-toast-close::before,
.z-toast-close::after {
  content: "";
  position: absolute;
  width: 15px;
  height: 2px;
  background-color: white;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.z-toast-close::before {
  transform: translateY(-50%) rotate(45deg);
}

.z-toast-close::after {
  transform: translateY(-50%) rotate(-45deg);
}

.z-toast--info {
  background-color: rgba(76, 175, 80, 0.7);
}

.z-toast--success {
  background-color: rgba(38, 166, 91, 0.7);
}

.z-toast--warning {
  background-color: rgba(255, 193, 7, 0.7);
}

.z-toast--error {
  background-color: rgba(244, 67, 54, 0.7);
}

.z-toast-closable {
  padding-right: 25px;
}
</style>
