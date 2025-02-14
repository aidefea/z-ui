<template>
  <div>
    <button @click="getcc">显示</button>
    <zpopup
      v-model:visible="showPopup"
      :width="800"
      :height="500"
      :showFullscreenButton="true"
    >
      <h1>123</h1>
    </zpopup>
  </div>
</template>

<script>
import zpopup from "../../packages/popup/index.vue";
export default {
  components: {
    zpopup,
  },
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    getcc() {
      this.showPopup = true;
    },
  },
};
</script>

<style></style>
