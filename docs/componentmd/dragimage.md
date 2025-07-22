---
title: dragimage 图片对比
---

# dragimage 图片对比

## 示例

<Mydragimage></Mydragimage>

### 基础用法

## 代码示例

```js
<template>
  <div class="content">
    <dragimage :image1="imagePath1" :image2="imagePath2" />
  </div>
</template>

<script setup>
import image1 from "../../static/image/a.png";
import image2 from "../../static/image/b.png";

const imagePath1 = image1;
const imagePath2 = image2;
</script>

<style scoped>
.content {
  width: 600px;
  height: 400px;
}
</style>
```

## 参数说明
