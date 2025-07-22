<template>
  <div class="watermark-wrapper" ref="wrapperRef">
    <!-- 插槽内容 -->
    <slot></slot>

    <!-- 水印层 -->
    <div
      class="watermark-overlay"
      ref="watermarkRef"
      v-if="text"
      :style="watermarkStyles"
    ></div>
  </div>
</template>

<script setup>
import { defineProps, computed, onMounted, ref, onUnmounted, watch } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: "水印",
  },
  rotate: {
    type: Number,
    default: 15,
  },
  fontSize: {
    type: Number,
    default: 14,
  },
  textColor: {
    type: String,
    default: "rgba(0, 0, 0, 0.1)",
  },
  opacity: {
    type: Number,
    default: 0.7,
  },
  density: {
    type: Number,
    default: 150,
  },
});

// 水印核心状态
const watermarkImage = ref("");
const canvasSize = computed(() => {
  const textLengthFactor = Math.max(1, props.text.length / 5);
  return Math.ceil(props.density * textLengthFactor);
});

// 水印样式计算
const watermarkStyles = computed(() => ({
  backgroundImage: `url(${watermarkImage.value})`,
  backgroundSize: `${canvasSize.value}px ${canvasSize.value}px`,
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  pointerEvents: "none",
  zIndex: "100",
  backgroundRepeat: "repeat",
  display: "block",
  opacity: props.opacity,
}));

// DOM引用
const wrapperRef = ref(null);
const watermarkRef = ref(null);
let initialStyles = {}; // 存储初始样式基准值
let styleCheckInterval = null; // 定时检查器

// 生成水印图片
const generateWatermark = () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = canvasSize.value;
  canvas.height = canvasSize.value;

  ctx.save();
  ctx.translate(canvasSize.value / 2, canvasSize.value / 2);
  ctx.rotate((-props.rotate * Math.PI) / 180);
  ctx.font = `${props.fontSize}px sans-serif`;
  ctx.fillStyle = props.textColor;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.globalAlpha = props.opacity;

  const textMetrics = ctx.measureText(props.text);
  const maxTextWidth = canvasSize.value * 0.8;
  if (textMetrics.width > maxTextWidth) {
    const scaleFactor = maxTextWidth / textMetrics.width;
    ctx.font = `${props.fontSize * scaleFactor}px sans-serif`;
  }

  ctx.fillText(props.text, 0, 0);
  ctx.restore();

  return canvas.toDataURL("image/png");
};

// 重新生成并恢复水印 - 关键修复
const restoreWatermark = () => {
  if (!wrapperRef.value) return;

  // 1. 生成新的水印图片
  const newImage = generateWatermark();
  watermarkImage.value = newImage;

  // 2. 检查水印元素是否存在，不存在则创建全新的
  let watermarkEl = wrapperRef.value.querySelector(".watermark-overlay");
  const isWatermarkMissing = !watermarkEl || !watermarkRef.value;

  if (isWatermarkMissing) {
    // 如果水印不存在，创建新元素
    watermarkEl = document.createElement("div");
    watermarkEl.className = "watermark-overlay";
    watermarkEl.setAttribute("ref", "watermarkRef");
    wrapperRef.value.appendChild(watermarkEl);
    watermarkRef.value = watermarkEl; // 更新引用
  }

  // 3. 强制重置所有样式
  Object.assign(watermarkEl.style, watermarkStyles.value);

  // 4. 更新初始样式基准
  updateInitialStyles();
};

// 保存初始样式（用于比对是否被篡改）
const updateInitialStyles = () => {
  if (!watermarkRef.value) return;
  const computed = getComputedStyle(watermarkRef.value);

  // 保存所有关键样式
  initialStyles = {
    display: computed.display,
    opacity: computed.opacity,
    pointerEvents: computed.pointerEvents,
    backgroundImage: computed.backgroundImage,
    backgroundSize: computed.backgroundSize,
    zIndex: computed.zIndex,
    top: computed.top,
    left: computed.left,
    right: computed.right,
    bottom: computed.bottom,
    position: computed.position,
  };
};

// 检查样式是否被篡改
const isStyleTampered = () => {
  if (!watermarkRef.value) return true;
  const current = getComputedStyle(watermarkRef.value);

  // 全面比对所有关键样式
  return Object.keys(initialStyles).some((key) => {
    return current[key] !== initialStyles[key];
  });
};

// 检查水印是否存在
const isWatermarkExists = () => {
  if (!wrapperRef.value || !watermarkRef.value) return false;
  // 检查水印元素是否还在DOM树中
  return (
    document.body.contains(watermarkRef.value) &&
    wrapperRef.value.contains(watermarkRef.value)
  );
};

// DOM变化监听器（检测水印是否被删除）
let mutationObserver = null;

// 初始化监听器
const initObservers = () => {
  if (!wrapperRef.value || !watermarkRef.value) return;

  // 1. 监听DOM变化（检测水印是否被删除或修改）
  mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      // 检查是否有子节点被删除
      if (mutation.removedNodes.length) {
        const isWatermarkRemoved = Array.from(mutation.removedNodes).some(
          (node) =>
            node === watermarkRef.value ||
            (node instanceof Element && node.contains(watermarkRef.value))
        );
        if (isWatermarkRemoved) {
          console.warn("检测到水印被删除，正在恢复...");
          restoreWatermark();
          return; // 处理后退出，避免重复触发
        }
      }

      // 检查水印元素自身属性变化
      if (
        mutation.target === watermarkRef.value &&
        (mutation.attributeName === "style" ||
          mutation.attributeName === "class")
      ) {
        if (isStyleTampered()) {
          console.warn("检测到水印样式被修改，正在恢复...");
          restoreWatermark();
        }
      }
    });
  });

  // 监听容器的所有子节点变化
  mutationObserver.observe(wrapperRef.value, {
    childList: true,
    subtree: true,
    attributes: true,
  });

  // 2. 添加定时全面检查（确保万无一失）
  styleCheckInterval = setInterval(() => {
    // 先检查水印是否存在
    if (!isWatermarkExists()) {
      console.warn("定时检查发现水印已被删除，正在恢复...");
      restoreWatermark();
    }
    // 再检查样式是否被篡改
    else if (isStyleTampered()) {
      console.warn("定时检查发现水印样式异常，正在恢复...");
      restoreWatermark();
    }
  }, 300); // 更频繁的检查，300ms一次
};

// 清理监听器
const cleanupObservers = () => {
  if (mutationObserver) {
    mutationObserver.disconnect();
    mutationObserver = null;
  }
  if (styleCheckInterval) {
    clearInterval(styleCheckInterval);
    styleCheckInterval = null;
  }
};

// 监听水印样式变化
watch(watermarkStyles, () => {
  if (watermarkRef.value) {
    Object.assign(watermarkRef.value.style, watermarkStyles.value);
    updateInitialStyles();
  }
});

// 组件挂载时初始化
onMounted(() => {
  // 生成初始水印
  watermarkImage.value = generateWatermark();

  // 等待DOM渲染完成
  setTimeout(() => {
    if (watermarkRef.value) {
      updateInitialStyles();
      initObservers();
    }
  }, 0);
});

// 组件卸载时清理
onUnmounted(() => {
  cleanupObservers();
});
</script>

<style scoped>
.watermark-wrapper {
  position: relative;
  width: 100%;
  min-height: 100%;
}

/* 基础样式定义，防止被完全覆盖 */
.watermark-overlay {
  position: absolute !important;
  pointer-events: none !important;
  z-index: 100 !important;
  background-repeat: repeat !important;
}
</style>
