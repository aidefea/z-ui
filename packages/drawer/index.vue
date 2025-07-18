<template>
  <div>
    <transition :name="transitionName">
      <div
        v-if="showSidebar"
        class="sidebar-overlay"
        @click="closeSidebar"
        @contextmenu.prevent.stop=""
      >
        <transition
          name="slide"
          mode="out-in"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
        >
          <div
            :class="[
              'sidebar-content',
              {
                'sidebar-left': direction === 'left',
                'sidebar-right': direction === 'right',
                'sidebar-top': direction === 'top',
                'sidebar-bottom': direction === 'bottom',
              },
            ]"
            :style="sidebarStyle"
            v-if="showSidebar"
            @click.stop
          >
            <slot></slot>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  showstate: {
    type: Boolean,
    default: false,
  },
  direction: {
    type: String,
    default: "right", // 默认方向为右侧
    validator: (value) => ["left", "right", "top", "bottom"].includes(value),
  },
  size: {
    type: Number,
    default: 450, // 默认宽度或高度
  },
});

const emit = defineEmits(["update:showstate"]);

const showSidebar = ref(false);

watch(
  () => props.showstate,
  (newValue) => {
    showSidebar.value = newValue;
  }
);

const closeSidebar = () => {
  showSidebar.value = false;
  emit("update:showstate", false);
};

const beforeEnter = (el) => {
  if (props.direction === "top") {
    el.style.transform = "translateY(-100%)";
  } else if (props.direction === "bottom") {
    el.style.transform = "translateY(100%)";
  } else {
    el.style.transform = `translateX(${
      props.direction === "left" ? "-100%" : "100%"
    })`;
  }
  el.style.opacity = "0";
};

const enter = (el, done) => {
  setTimeout(() => {
    el.style.transform = "translateY(0)";
    el.style.opacity = "1";
    done();
  }, 100);
};

const leave = (el, done) => {
  if (props.direction === "top") {
    el.style.transform = "translateY(-100%)";
  } else if (props.direction === "bottom") {
    el.style.transform = "translateY(100%)";
  } else {
    el.style.transform = `translateX(${
      props.direction === "left" ? "-100%" : "100%"
    })`;
  }
  el.style.opacity = "0";
  done();
};

const transitionName = computed(() => {
  return props.direction === "left" || props.direction === "right"
    ? "fade"
    : "fade-vertical";
});

const sidebarStyle = computed(() => {
  if (props.direction === "top" || props.direction === "bottom") {
    return {
      height: `${props.size}px`,
      width: "100%",
    };
  } else {
    return {
      width: `${props.size}px`,
    };
  }
});
</script>

<style>
.sidebar-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
}

.sidebar-content {
  position: fixed;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  backface-visibility: hidden;
}

.sidebar-left {
  left: 0;
  right: auto;
}

.sidebar-right {
  right: 0;
  left: auto;
}

.sidebar-top {
  top: 0;
  right: 0;
  left: 0;
  height: 450px;
}

.sidebar-bottom {
  bottom: 0;
  right: 0;
  left: 0;
  height: 450px;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
  will-change: transform, opacity;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-vertical-enter-active,
.fade-vertical-leave-active {
  transition: opacity 0.5s;
}

.fade-vertical-enter-from,
.fade-vertical-leave-to {
  opacity: 0;
}
</style>
