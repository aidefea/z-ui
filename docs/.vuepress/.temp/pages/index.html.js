import comp from "D:/Code/util/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"项目名称\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"项目简介\",\"slug\":\"项目简介\",\"link\":\"#项目简介\",\"children\":[]},{\"level\":2,\"title\":\"技术栈\",\"slug\":\"技术栈\",\"link\":\"#技术栈\",\"children\":[]},{\"level\":2,\"title\":\"安装与使用\",\"slug\":\"安装与使用\",\"link\":\"#安装与使用\",\"children\":[{\"level\":3,\"title\":\"安装\",\"slug\":\"安装\",\"link\":\"#安装\",\"children\":[]}]}],\"git\":{\"updatedTime\":1736786548000,\"contributors\":[{\"name\":\"zyg\",\"username\":\"zyg\",\"email\":\"3496912013@qq.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
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
