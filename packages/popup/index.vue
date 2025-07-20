<template>
  <div v-if="visible" class="z-overlay" @click.self="handleOverlayClick">
    <div
      :class="['z-popup', { 'z-fullscreen': isFullscreen }]"
      :style="popupStyle"
    >
      <!-- 弹窗头部 -->
      <div class="z-popup-header">
        <div class="z-fullscreen-btn" @click="toggleFullscreen">
          <span
            class="iconfont"
            :class="[isFullscreen ? 'icon-banping' : 'icon-quanping']"
          ></span>
        </div>
        <div class="z-close-btn" @click="handleClose">
          <span class="iconfont icon-guanbi"></span>
        </div>
      </div>

      <!-- 弹窗主体内容 -->
      <div class="z-popup-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  width: {
    type: Number,
    default: 600, // 默认宽度
  },
  height: {
    type: Number,
    default: 400, // 默认高度
  },
});

const isFullscreen = ref(false);

const popupStyle = computed(() => {
  const width = isFullscreen.value ? "100vw" : `${props.width}px`;
  const height = isFullscreen.value ? "100vh" : `${props.height}px`;
  return { width, height };
});

const emit = defineEmits(["update:visible"]);

const handleOverlayClick = () => {
  closePopup();
};

const handleClose = () => {
  closePopup();
};

const closePopup = () => {
  emit("update:visible", false);
  isFullscreen.value = false;
};

const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value;
};
</script>

<style>
.z-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.z-popup {
  position: relative;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  overflow: hidden;
}

.z-popup.z-fullscreen {
  border-radius: 0;
  width: 100vw !important;
  height: 100vh !important;
}

.z-popup-header {
  display: flex;
  justify-content: flex-end;
  padding: 10px 15px;
  flex-shrink: 0;
}

.z-close-btn,
.z-fullscreen-btn {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.1);
  color: #333;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  margin-left: 10px;
}

.z-close-btn:hover,
.z-fullscreen-btn:hover {
  background: rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
}

.z-iconfont {
  font-size: 13px;
}

.z-popup-body {
  flex: 1;
  padding: 20px;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

/* 隐藏滚动条 */
.z-popup-body::-webkit-scrollbar {
  width: 4px;
}

/* 隐藏滚动条轨道外层 */
.z-popup-body::-webkit-scrollbar-track {
  display: none;
}

/* 自定义滚动条滑块 */
.z-popup-body::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 2px;
  border: none;
}

/* 去掉滚动条轨道（外部包裹） */
.z-popup-body::-webkit-scrollbar-track-piece {
  background-color: transparent;
}
</style>
