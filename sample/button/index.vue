<template>
  <div>
    123123123
    <my-button type="primary">主要按钮</my-button>
    <my-button type="success" icon="✓">成功按钮</my-button>
    <my-button type="danger" :loading="true">加载中</my-button>
    <my-button round>圆角按钮</my-button>
    <my-button circle icon="✓"></my-button>
    <my-button disabled>禁用按钮</my-button>
  </div>
</template>

<script>
import myButton from "../../packages/button/index.vue";
export default {
  components: {
    myButton,
  },
  methods: {},
};
</script>
<style></style>
