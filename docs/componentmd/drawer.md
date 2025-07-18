---
title: drawer 抽屉
---

# drawer 组件

## 示例

### 基础用法

展示一个简单的按钮组件。

<Mydrawer></Mydrawer>

## 参数说明

| 参数名    | 类型    | 默认值 | 说明     |
| --------- | ------- | ------ | -------- |
| showstate | Boolean | false  | 展示标记 |
| direction | String  | right  | 弹出方向 |
| size      | number  | 450    | 容器大小 |

## 代码示例

### 基础用法

```js
<template>
  <div>
    <button @click="toggleSidebar">切换侧边栏</button>
    <drawer :show="showstate">
      <div class="custom-content">
        <h2>自定义内容</h2>
        <p>这是通过插槽传递到侧边栏的内容。</p>
      </div>
    </drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
const showstate = ref(false);

const toggleSidebar = () => {
  showstate.value = !showstate.value;
};
</script>
```
