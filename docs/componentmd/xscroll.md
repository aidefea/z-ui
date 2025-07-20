---
title: xscroll 横屏滚动
---

# xscroll 横屏滚动

## 示例

<Myxscroll></Myxscroll>

### 基础用法

## 代码示例

```js
<template>
  <div class="contarner">
    <xscroll style="height: 300px">
      <div class="care">1</div>
      <div class="care">2</div>
      <div class="care">3</div>
      <div class="care">4</div>
      <div class="care">5</div>
      <div class="care">6</div>
      <div class="care">7</div>
      <div class="care">8</div>
      <div class="care">9</div>
      <div class="care">10</div>
      <div class="care">11</div>
      <div class="care">12</div>
    </xscroll>
  </div>
</template>
<script setup>
</script>
<style>
.care {
  flex: 0 0 auto;
  width: 200px;
  height: 100%;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 126, 95, 0.5);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.9);
  margin-right: 20px;
}
.care:last-child {
  margin-right: 0;
}
.care:nth-child(odd) {
  background: rgba(106, 17, 203, 0.3);
}
.care:nth-child(even) {
  background: rgba(21, 101, 192, 0.3);
}
</style>

```

## 参数说明
