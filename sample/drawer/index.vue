<template>
  <div class="content">
    <ZButton type="primary" @click="showToast('right')">right drawer</ZButton>
    <ZButton type="primary" @click="showToast('left')">left drawer</ZButton>
    <ZButton type="primary" @click="showToast('top')">top drawer</ZButton>
    <ZButton type="primary" @click="showToast('bottom')">bottom drawer</ZButton>
    <drawer v-model:showstate="showstate" :direction="directions" :size="450">
      <div class="custom-content">
        <p>这是通过插槽传递到侧边栏的内容。</p>
      </div>
    </drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ZButton } from "../../packages/main.js";
import drawer from "../../packages/drawer/index.vue";
const showstate = ref(false);
const directions = ref("right");
const showToast = (direction) => {
  showstate.value = true;
  directions.value = direction;
};
</script>

<style>
.content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
