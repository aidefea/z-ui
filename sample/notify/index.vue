<template>
  <div class="content">
    <ZButton type="primary" @click="showNotification1">显示</ZButton>
    <ZButton type="primary" @click="showNotification2">显示</ZButton>
    <ZButton type="primary" @click="showNotification3">显示</ZButton>
    <Notify ref="notify1"></Notify>
    <Notify ref="notify2"></Notify>
    <Notify ref="notify3"></Notify>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { ZButton } from "../../packages/main.js";
import Notify from "../../packages/notify/index.vue";
import ab from "./a.vue";

const notify1 = ref(null);
const notify2 = ref(null);
const notify3 = ref(null);

const showNotification1 = () => {
  notify1.value.addNotification({
    type: "warning",
    duration: 3000,
    title: "自定义标题",
    content: "这是一个普通的文本消息",
    position: "top-right",
    width: "300px", // 可选的宽度
    height: "auto", // 可选的高度
  });
};

const showNotification2 = () => {
  notify2.value.addNotification({
    type: "info",
    duration: 5000,
    title: "HTML 片段",
    content: "<strong>这是一个 HTML 片段</strong>",
    position: "top-left",
    width: "300px", // 可选的宽度
    height: "auto", // 可选的高度
  });
};

const showNotification3 = () => {
  notify3.value.addNotification({
    type: "success",
    duration: 0, // 永不自动关闭
    title: "组件消息",
    content: ab, // 动态导入组件
    position: "bottom-left",
    width: "300px", // 可选的宽度
    height: "auto", // 可选的高度
  });
};
</script>
<style scoped>
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
