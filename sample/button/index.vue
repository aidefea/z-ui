<template>
  <div class="a">
    <z-button type="primary">主要按钮</z-button>
    <z-button type="success" icon="✓">成功按钮</z-button>
    <z-button type="danger" :loading="true">加载中</z-button>
    <z-button round>圆角按钮</z-button>
    <z-button circle icon="✓"></z-button>
    <z-button disabled>禁用按钮</z-button>
  </div>
</template>

<script>
import { zButton } from "../../packages/main.js";
export default {
  components: {
    zButton,
  },
  methods: {},
};
</script>
<style>
.a {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
}
</style>
