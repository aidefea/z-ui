---
title: toast 信息提示框
---

# toast 信息提示组件

## 示例

### 基础用法

展示一个简单的按钮组件。

<Mytoast></Mytoast>

## 代码示例

```js
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
```

## 参数说明

| 参数名   | 类型     | 默认值 | 说明                                          |
| -------- | -------- | ------ | --------------------------------------------- |
| message  | String   | -      | 提示信息                                      |
| duration | Number   | 3000   | 默认消失时间                                  |
| type     | String   | info   | 默认类型 ("info","success","warning","error") |
| closable | Boolean  | true   | 默认关闭按钮                                  |
| onClose  | Function | -      | 手动关闭信息时的回调函数                      |
