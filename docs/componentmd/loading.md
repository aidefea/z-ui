---
title: loading 全屏加载
---

# loading 全屏加载

## 示例

### 基础用法

<Myloading></Myloading>

## 代码示例

```js
<template>
  <button @click="showToast">Show Toast</button>
</template>

<script>
import Loading from "z-zygui";
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
```

## 参数说明

| 参数名     | 类型    | 默认值 | 说明           |
| ---------- | ------- | ------ | -------------- |
| lock       | Boolean | fasle  | 显示状态       |
| text       | string  | 3000   | 加载中文本信息 |
| background | String  |        | 蒙层颜色       |
