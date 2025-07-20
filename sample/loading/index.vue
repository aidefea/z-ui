<template>
  <div class="content">
    <ZButton type="primary" @click="showToast">loading</ZButton>
  </div>
</template>
<script setup>
import {} from "vue";
import { ZButton } from "../../packages/main.js";
import Loading from "../../packages/loading/index.js";

const showToast = () => {
  const loading = Loading.show({
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
  setTimeout(() => {
    loading.hide();
  }, 2000);
};
</script>
<style>
.content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
