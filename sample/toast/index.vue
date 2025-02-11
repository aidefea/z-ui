<template>
  <button @click="showToast">Show Toast</button>
</template>

<script>
export default {
  methods: {
    showToast() {
      this.$toast("This is a toast message!", {
        duration: 5000,
        type: "error",
        closable: true,
      });
    },
  },
};
</script>
<style></style>
