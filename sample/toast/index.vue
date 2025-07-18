<template>
  <div class="content">
    <ZButton type="primary" @click="showToast1">Show Toast</ZButton>
    <ZButton type="primary" @click="showToast2">Show Toast</ZButton>
    <ZButton type="primary" @click="showToast3">Show Toast</ZButton>
    <ZButton type="primary" @click="showToast4">Show Toast</ZButton>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
import { ZButton } from "../../packages/main.js";
import ToastFactory from "../../packages/toast/index.js";

const showToast1 = () => {
  ToastFactory("This is a toast message!", {
    duration: 2000,
    type: "info",
    closable: true,
  });
};
const showToast2 = () => {
  ToastFactory("This is a toast message!", {
    duration: 5000,
    type: "success",
    closable: true,
  });
};
const showToast3 = () => {
  ToastFactory("This is a toast message!", {
    duration: 5000,
    type: "warning",
    closable: false,
  });
};
const showToast4 = () => {
  ToastFactory("This is a toast message!", {
    duration: 5000,
    type: "error",
    closable: false,
  });
};
</script>

<style>
.content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
