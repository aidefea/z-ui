---
title: Watermark 水印组件
---

# Watermark 水印组件

## 示例

<MyWatermark></MyWatermark>

### 基础用法

## 代码示例

```js
<template>
  <div class="example-container">
    <!-- 使用水印组件包裹需要添加水印的内容 -->
    <Watermark
      text="内部资料 严禁外传"
      :rotate="20"
      :fontSize="16"
      :opacity="0.8"
      :density="100"
      textColor="rgba(255, 0, 0, 1)"
    >
      <!-- 这里是你的内容 -->
      <div class="content">
        <h2>这是需要添加水印的内容</h2>
        <p>水印会以半透明方式覆盖在内容上方</p>
        <img src="../../static/image/a.png" alt="示例图片" />
      </div>
    </Watermark>
  </div>
</template>

<script setup>
</script>

<style scoped>
.example-container {
  width: 100%;
  min-height: 500px;
  padding: 20px;
  border: 1px red solid;
}

.content {
  position: relative;
  z-index: 1;
}
</style>

```

## 参数说明

| 参数名    | 类型   | 默认值             | 说明         |
| --------- | ------ | ------------------ | ------------ |
| text      | string | false              | 水印文字     |
| rotate    | Number | 15                 | 字体便宜角度 |
| fontSize  | Number | 14                 | 字体大小     |
| opacity   |        | 0.7                | 透明度       |
| density   | Number | 150                | 字体密度     |
| textColor | string | rgba(0, 0, 0, 0.1) | 字体颜色     |
