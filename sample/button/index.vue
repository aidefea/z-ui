<template>
  <div class="a">
    <zbutton type="primary">主要按钮</zbutton>
    <zbutton type="success" icon="✓">成功按钮</zbutton>
    <zbutton type="danger" :loading="true">加载中</zbutton>
    <zbutton round>圆角按钮</zbutton>
    <zbutton circle icon="✓"></zbutton>
    <zbutton disabled>禁用按钮</zbutton>
  </div>
</template>

<script>
import { zbutton } from "../../packages/main.js";
export default {
  components: {
    zbutton,
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
