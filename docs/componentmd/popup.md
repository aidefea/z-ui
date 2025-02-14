---
title: Popup 弹窗组件
---

# Popup 弹窗组件

## 示例

<Mypopup></Mypopup>

### 代码示例

展示一个可自定义尺寸的弹窗组件。

```js
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
import zpopup from "z-zygui";
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
```

## 参数说明

| 参数名               | 类型    | 默认值 | 说明             |
| -------------------- | ------- | ------ | ---------------- |
| visible              | Boolean | false  | 弹窗显示标识符   |
| width                | Number  | 600    | 弹窗的宽度       |
| height               | Number  | 400    | 弹窗的高度       |
| showFullscreenButton | Boolean | true   | 是否展示全屏按钮 |
