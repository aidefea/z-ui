<template>
  <div
    v-if="visible"
    class="overlay no-context-menu"
    @click.self="handleOverlayClick"
  >
    <div
      class="popup"
      :class="{ fullscreen: isFullscreen }"
      :style="{ width: width + 'px', height: height + 'px' }"
    >
      <!-- 弹窗头部 -->
      <div class="popup-header">
        <!-- 全屏按钮（根据配置显示） -->
        <button
          v-if="showFullscreenButton"
          class="fullscreen-btn"
          @click="toggleFullscreen"
        >
          ⛶
        </button>
        <!-- 关闭按钮 -->
        <button aria-label="Close" class="close-btn" @click="handleClose">
          ×
        </button>
      </div>
      <!-- 弹窗内容 -->
      <div class="popup-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: { type: Boolean, default: false },
    width: { type: Number, default: 600 },
    height: { type: Number, default: 400 },
    showFullscreenButton: { type: Boolean, default: true },
  },
  data() {
    return { isFullscreen: false };
  },
  methods: {
    // 点击遮罩层关闭
    handleOverlayClick() {
      this.closePopup();
    },
    // 关闭按钮点击
    handleClose() {
      this.closePopup();
    },
    // 关闭弹窗逻辑
    closePopup() {
      this.$emit("update:visible", false);
      this.isFullscreen = false; // 关闭时重置全屏状态
    },
    // 全屏切换
    toggleFullscreen() {
      this.isFullscreen = !this.isFullscreen;
    },
    // ESC 键关闭监听
    handleKeydown(e) {
      if (e.key === "Escape" && this.visible) this.closePopup();
    },
  },
  watch: {
    // 禁止背景滚动
    visible(val) {
      document.body.style.overflow = val ? "hidden" : "";
    },
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeydown);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.handleKeydown);
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup {
  position: relative;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  overflow: auto;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.popup-header {
  position: absolute;
  top: 5px;
  right: 5px;
}

.close-btn {
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: #00000042;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}

.close-btn:hover {
  background-color: #00000060;
}

/* 全屏模式样式 */
.popup.fullscreen {
  width: 100vw !important;
  height: 100vh !important;
  max-width: none;
  border-radius: 0;
}

.popup-body {
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px; /* 防止内容被关闭按钮遮挡 */
}

/* 悬停效果 */
.close-btn:hover,
.fullscreen-btn:hover {
  background-color: #00000060;
}
</style>
