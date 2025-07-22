import comp from "E:/desktop/Browser-tab/z-ui/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"项目名称\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1752858445000,\"contributors\":[{\"name\":\"zyg\",\"username\":\"zyg\",\"email\":\"3496912013@qq.com\",\"commits\":3,\"url\":\"https://github.com/zyg\"},{\"name\":\"WQQW\",\"username\":\"WQQW\",\"email\":\"3496912013@qq.com\",\"commits\":1,\"url\":\"https://github.com/WQQW\"}],\"changelog\":[{\"hash\":\"f6b65ec6115290f51a32e4f55bcd37b264b9f932\",\"time\":1752858445000,\"email\":\"3496912013@qq.com\",\"author\":\"WQQW\",\"message\":\"添加新组件\"},{\"hash\":\"7d250bc93056b7c16eff35f37e05390c7aaf3d9a\",\"time\":1739558690000,\"email\":\"3496912013@qq.com\",\"author\":\"zyg\",\"message\":\"增加弹窗组件和vuepress说明文档\"},{\"hash\":\"037db56786bfe16fdb4fb730eda7af6ce923d069\",\"time\":1739467957000,\"email\":\"3496912013@qq.com\",\"author\":\"zyg\",\"message\":\"整合vuepress,做组件库说明文档\"},{\"hash\":\"5f415e536b126df9fec2b22b2c42653c35dea5cf\",\"time\":1736786548000,\"email\":\"3496912013@qq.com\",\"author\":\"zyg\",\"message\":\"添加vuepress说明文档\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
