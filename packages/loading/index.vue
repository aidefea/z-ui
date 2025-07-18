<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="loading-overlay"
      @click="preventDefault"
      :style="overlayStyle"
    >
      <div class="loading-content">
        <div class="spinner"></div>
        <p v-if="text" class="loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed } from "vue";

const visible = ref(false);
const text = ref("Loading");
const background = ref("rgba(0, 0, 0, 0.7)");

const show = (options = {}) => {
  visible.value = true;
  text.value = options.text || "Loading";
  background.value = options.background || "rgba(0, 0, 0, 0.7)";
  disableScroll(); // 禁止页面滚动
};

const hide = () => {
  visible.value = false;
  enableScroll(); // 恢复页面滚动
};

const preventDefault = (event) => {
  event.preventDefault();
};

const overlayStyle = computed(() => ({
  background: background.value,
}));

const disableScroll = () => {
  document.body.style.overflow = "hidden";
};

const enableScroll = () => {
  document.body.style.overflow = "";
};

defineExpose({
  show,
  hide,
});
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.loading-content {
  text-align: center;
  color: white;
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-text {
  margin-top: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
