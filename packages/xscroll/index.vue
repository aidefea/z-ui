<template>
  <div class="scroll-container" ref="container" @wheel="handleWheel">
    <div ref="scrollContent" class="scroll-content">
      <slot></slot>
    </div>
    <div class="scroll-indicator" :style="indicatorStyle">
      <div class="scroll-track"></div>
      <div class="scroll-thumb" :style="thumbStyle"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

const container = ref(null);
const scrollContent = ref(null);
const scrollPosition = ref(0);
const maxScroll = ref(0);
const containerWidth = ref(0);
const contentWidth = ref(0);

const indicatorStyle = computed(() => ({
  width: `${containerWidth.value}px`,
  left: "0",
  bottom: "10px",
}));

const thumbStyle = computed(() => {
  const thumbWidth = Math.max(
    30,
    (containerWidth.value * containerWidth.value) / contentWidth.value
  );
  const thumbPosition =
    (scrollPosition.value * (containerWidth.value - thumbWidth)) /
    maxScroll.value;

  return {
    width: `${thumbWidth}px`,
    transform: `translateX(${thumbPosition}px)`,
  };
});

const handleWheel = (e) => {
  e.preventDefault();
  const delta = e.deltaY;
  scrollPosition.value = Math.max(
    0,
    Math.min(scrollPosition.value + delta, maxScroll.value)
  );
  scrollContent.value.style.transform = `translateX(-${scrollPosition.value}px)`;
};

const scrollTo = (position) => {
  scrollPosition.value = Math.max(0, Math.min(position, maxScroll.value));
  scrollContent.value.style.transform = `translateX(-${scrollPosition.value}px)`;
};

const updateSize = () => {
  if (!scrollContent.value) return;

  containerWidth.value = container.value.clientWidth;

  const children = scrollContent.value.children;
  let totalWidth = 0;

  for (let child of children) {
    const style = getComputedStyle(child);
    const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    totalWidth += child.offsetWidth + margin;
  }

  contentWidth.value = totalWidth;
  maxScroll.value = Math.max(0, totalWidth - containerWidth.value);
  scrollContent.value.style.width = `${totalWidth}px`;
};

const addItem = (element) => {
  if (!scrollContent.value) return;
  scrollContent.value.appendChild(element);
  updateSize();
};

onMounted(() => {
  updateSize();
  const observer = new ResizeObserver(() => updateSize());
  observer.observe(container.value);

  onBeforeUnmount(() => {
    observer.disconnect();
  });
});
</script>

<style>
.scroll-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  touch-action: pan-y;
}

.scroll-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
}

/* 自定义滚动指示器 */
.scroll-indicator {
  position: absolute;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.scroll-track {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.scroll-thumb {
  position: absolute;
  height: 100%;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  border-radius: 3px;
}
</style>
