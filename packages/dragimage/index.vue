<template>
  <div class="image-comparison" ref="containerRef">
    <!-- 第一张图片 - 只显示分隔线左侧部分 -->
    <div
      class="image image-1"
      :style="{
        clipPath: `inset(0 ${100 - position}% 0 0)`,
        backgroundImage: `url(${props.image1})`,
      }"
    ></div>

    <!-- 第二张图片 - 只显示分隔线右侧部分 -->
    <div
      class="image image-2"
      :style="{
        clipPath: `inset(0 0 0 ${position}%)`,
        backgroundImage: `url(${props.image2})`,
      }"
    ></div>

    <!-- 分隔线 -->
    <div
      class="divider"
      :style="{ left: `${position}%` }"
      @mousedown="startDrag"
      @touchstart="startDrag"
    >
      <div class="handle">↔</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  image1: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
    required: true,
  },
});

// 分隔线位置（百分比）
const position = ref(50);
// 容器引用
const containerRef = ref(null);

// 拖动分隔线
const startDrag = (e) => {
  e.preventDefault();

  const container = containerRef.value;
  if (!container) return;

  const containerRect = container.getBoundingClientRect();
  const startX = e.clientX || e.touches[0].clientX;
  const startPos = position.value;

  // 拖动中
  const handleDrag = (e) => {
    e.preventDefault();
    const currentX = e.clientX || e.touches[0].clientX;
    const diffX = currentX - startX;
    const newPos = startPos + (diffX / containerRect.width) * 100;

    // 限制在0-100之间
    position.value = Math.max(0, Math.min(100, newPos));
  };

  // 结束拖动
  const stopDrag = () => {
    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("mouseup", stopDrag);
    document.removeEventListener("touchmove", handleDrag);
    document.removeEventListener("touchend", stopDrag);
  };

  // 添加事件监听
  document.addEventListener("mousemove", handleDrag);
  document.addEventListener("mouseup", stopDrag);
  document.addEventListener("touchmove", handleDrag);
  document.addEventListener("touchend", stopDrag);
};

// 组件挂载
onMounted(() => {
  const container = containerRef.value;
  if (container) {
    // 确保容器有基本尺寸
    if (!container.style.width) container.style.minWidth = "600px";
    if (!container.style.height) container.style.minHeight = "400px";
  }
});
</script>

<style scoped>
.image-comparison {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* 两张图片完全重叠在同一位置 */
.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* 第一张图片在底层 */
.image-1 {
  z-index: 1;
}

/* 第二张图片在上层，通过裁剪只显示右侧部分 */
.image-2 {
  z-index: 2;
}

/* 分隔线 */
.divider {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3px;
  background: white;
  z-index: 3;
  cursor: ew-resize;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

/* 拖动手柄 */
.handle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-weight: bold;
}
</style>
