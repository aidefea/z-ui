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
        <div>水印会以半透明方式覆盖在内容上方</div>
        <div>水印可以防止被篡改，删除水印dom和修改样式都不行</div>
        <img src="../../static/image/a.png" alt="示例图片" />
      </div>
    </Watermark>
  </div>
</template>

<script setup>
import Watermark from "../../packages/Watermark/index.vue";
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
