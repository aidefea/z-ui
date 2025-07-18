<template>
  <div class="a">
    <z-button type="primary">主要按钮</z-button>
    <z-button type="success" icon="✓">成功按钮</z-button>
    <z-button type="danger" :loading="true">加载中</z-button>
    <z-button round>圆角按钮</z-button>
    <z-button circle icon="x"></z-button>
    <z-button disabled>禁用按钮</z-button>
  </div>
</template>

<script setup>
import { ZButton } from "../../packages/main.js";
</script>
<style>
.a {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
}
</style>
