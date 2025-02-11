<template>
  <div v-if="visible" class="toast" :class="toastClass" @click="handleClick">
    <span class="toast-message">{{ message }}</span>
    <button v-if="closable" class="toast-close" @click="closeToast"></button>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from "vue";

export default {
  name: "Toast",
  props: {
    message: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 3000, // 默认3秒后消失
    },
    type: {
      type: String,
      default: "info", // 默认类型为信息
    },
    closable: {
      type: Boolean,
      default: true, // 默认有关闭按钮
    },
    onClose: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    const visible = ref(false); // 控制 Toast 显示与否

    // 计算 Toast 的样式和类型
    const toastClass = computed(() => {
      return {
        "toast-info": props.type === "info",
        "toast-success": props.type === "success",
        "toast-warning": props.type === "warning",
        "toast-error": props.type === "error",
      };
    });

    // 显示 Toast
    const showToast = () => {
      visible.value = true;
    };

    // 关闭 Toast
    const closeToast = () => {
      visible.value = false;
      props.onClose();
    };

    // 处理点击事件
    const handleClick = () => {
      if (props.closable) {
        closeToast();
      }
    };

    // 在组件挂载后显示 Toast
    onMounted(() => {
      showToast();
      if (props.duration > 0) {
        setTimeout(closeToast, props.duration);
      }
    });

    // 在组件卸载时调用 onClose
    onUnmounted(() => {
      props.onClose();
    });

    return {
      visible,
      toastClass,
      handleClick,
      closeToast,
    };
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toast-message {
  margin-right: 10px;
}

.toast-close {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  width: 15px;
  height: 15px;
  position: relative;
}

.toast-close::before,
.toast-close::after {
  content: "";
  position: absolute;
  width: 15px;
  height: 2px;
  background-color: white;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.toast-close::before {
  transform: translateY(-50%) rotate(45deg);
}

.toast-close::after {
  transform: translateY(-50%) rotate(-45deg);
}

.toast-info {
  background-color: rgba(76, 175, 80, 0.7);
}

.toast-success {
  background-color: rgba(38, 166, 91, 0.7);
}

.toast-warning {
  background-color: rgba(255, 193, 7, 0.7);
}

.toast-error {
  background-color: rgba(244, 67, 54, 0.7);
}
</style>
