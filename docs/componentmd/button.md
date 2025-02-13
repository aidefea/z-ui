---
title: Button 按钮
---

# Button 按钮组件

## 示例

### 基础用法

展示一个简单的按钮组件。

<MyGlobalComponent></MyGlobalComponent>

## 参数说明

| 参数名   | 类型     | 默认值  | 说明                            |
| -------- | -------- | ------- | ------------------------------- |
| type     | String   | default | 按钮类型（primary、success 等） |
| disabled | Boolean  | false   | 是否禁用按钮                    |
| loading  | Boolean  | false   | 是否显示加载状态                |
| size     | String   | medium  | 按钮大小（large、small 等）     |
| click    | Function | -       | 点击事件的回调函数              |

## 代码示例

### 基础用法

```js
import { myButton } from "z-zygui";
<template>
  <my-button type="primary">主要按钮</my-button>
</template>;
```
