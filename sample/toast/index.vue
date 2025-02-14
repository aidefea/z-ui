<template>
  <button @click="showToast">Show Toast</button>
</template>

<script>
import ToastFactory from "../../packages/toast/index.js";
export default {
  methods: {
    showToast() {
      ToastFactory("This is a toast message!", {
        duration: 5000,
        type: "error",
        closable: true,
      });
    },
  },
};
</script>
<style></style>
