<template>
  <transition-group
    tag="div"
    name="notify"
    class="notify-container"
    :class="`notify-${position}`"
  >
    <div
      v-for="(item, index) in notifications"
      :key="item.id"
      class="notify-item"
      :class="`notify-${item.type}`"
      :style="{ width: item.width || '300px', height: item.height || 'auto' }"
    >
      <div class="notify-header">
        <span class="notify-title">{{ item.title }}</span>
        <button class="notify-close" @click="removeNotification(index)">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      <div class="notify-content">
        <!-- 渲染字符串或HTML片段 -->
        <div
          v-if="typeof item.content === 'string'"
          v-html="item.content"
        ></div>
        <!-- 渲染组件 -->
        <component v-else-if="item.content" :is="item.content" />
      </div>
    </div>
  </transition-group>
</template>

<script setup>
import { ref } from "vue";

const notifications = ref([]);
const notifyId = ref(0);

const positions = ["top-left", "top-right", "bottom-left", "bottom-right"];
const position = ref("bottom-right");

const addNotification = (options) => {
  const {
    type,
    duration,
    title,
    content,
    position: pos,
    width,
    height,
  } = options;

  if (!positions.includes(pos)) {
    console.warn(`Invalid position: ${pos}. Defaulting to 'bottom-right'.`);
    position.value = "bottom-right";
  } else {
    position.value = pos;
  }

  const id = notifyId.value++;
  const notification = {
    id,
    type,
    duration,
    title,
    content,
    position: pos,
    width,
    height,
  };

  notifications.value.push(notification);

  if (duration > 0) {
    setTimeout(() => {
      removeNotification(notifications.value.indexOf(notification));
    }, duration);
  }
};

const removeNotification = (index) => {
  notifications.value.splice(index, 1);
};

defineExpose({
  addNotification,
});
</script>

<style scoped>
.notify-container {
  position: fixed;
  z-index: 10000;
  pointer-events: none;
}

.notify-item {
  pointer-events: auto;
  margin: 8px;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  background: white;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  position: relative; /* 确保关闭按钮的绝对定位 */
}

.notify-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.notify-title {
  font-weight: bold;
}

.notify-close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 12px; /* 调整关闭按钮的位置 */
  right: 12px; /* 调整关闭按钮的位置 */
}

.notify-close svg {
  width: 20px;
  height: 20px;
}

.notify-content {
  white-space: pre-wrap;
}

.notify-success {
  border-left: 4px solid green;
}

.notify-warning {
  border-left: 4px solid orange;
}

.notify-info {
  border-left: 4px solid blue;
}

.notify-error {
  border-left: 4px solid red;
}

.notify-top-left {
  top: 0;
  left: 0;
}

.notify-top-right {
  top: 0;
  right: 0;
}

.notify-bottom-left {
  bottom: 0;
  left: 0;
}

.notify-bottom-right {
  bottom: 0;
  right: 0;
}

.notify-enter-active,
.notify-leave-active {
  transition: all 0.3s ease;
}

.notify-enter-from,
.notify-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
