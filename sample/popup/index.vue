<template>
  <div>
    <ZButton type="primary" @click="showpup">显示</ZButton>
    <zpopup
      v-model:visible="showPopup"
      :width="800"
      :height="500"
      :showFullscreenButton="true"
    >
      <h1>这是弹出框</h1>
    </zpopup>
  </div>
</template>

<script setup>
import { ref } from "vue";
import zpopup from "../../packages/popup/index.vue";
import ZButton from "../../packages/button/index.vue";

const showPopup = ref(false);

const showpup = () => {
  showPopup.value = true;
};
</script>

<style></style>
