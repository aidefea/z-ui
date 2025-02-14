export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Code/util/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"项目名称"} }],
  ["/componentmd/button.html", { loader: () => import(/* webpackChunkName: "componentmd_button.html" */"D:/Code/util/docs/.vuepress/.temp/pages/componentmd/button.html.js"), meta: {"title":"Button 按钮"} }],
  ["/componentmd/popup.html", { loader: () => import(/* webpackChunkName: "componentmd_popup.html" */"D:/Code/util/docs/.vuepress/.temp/pages/componentmd/popup.html.js"), meta: {"title":"Popup 弹窗组件"} }],
  ["/componentmd/", { loader: () => import(/* webpackChunkName: "componentmd_index.html" */"D:/Code/util/docs/.vuepress/.temp/pages/componentmd/index.html.js"), meta: {"title":""} }],
  ["/componentmd/toast.html", { loader: () => import(/* webpackChunkName: "componentmd_toast.html" */"D:/Code/util/docs/.vuepress/.temp/pages/componentmd/toast.html.js"), meta: {"title":"toast 信息提示框"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Code/util/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
