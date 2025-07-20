export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/desktop/Browser-tab/z-ui/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"项目名称"} }],
  ["/componentmd/button.html", { loader: () => import(/* webpackChunkName: "componentmd_button.html" */"E:/desktop/Browser-tab/z-ui/docs/.vuepress/.temp/pages/componentmd/button.html.js"), meta: {"title":"Button 按钮"} }],
  ["/componentmd/drawer.html", { loader: () => import(/* webpackChunkName: "componentmd_drawer.html" */"E:/desktop/Browser-tab/z-ui/docs/.vuepress/.temp/pages/componentmd/drawer.html.js"), meta: {"title":"drawer 抽屉"} }],
  ["/componentmd/loading.html", { loader: () => import(/* webpackChunkName: "componentmd_loading.html" */"E:/desktop/Browser-tab/z-ui/docs/.vuepress/.temp/pages/componentmd/loading.html.js"), meta: {"title":"loading 全屏加载"} }],
  ["/componentmd/notify.html", { loader: () => import(/* webpackChunkName: "componentmd_notify.html" */"E:/desktop/Browser-tab/z-ui/docs/.vuepress/.temp/pages/componentmd/notify.html.js"), meta: {"title":"notify 信息通知"} }],
  ["/componentmd/popup.html", { loader: () => import(/* webpackChunkName: "componentmd_popup.html" */"E:/desktop/Browser-tab/z-ui/docs/.vuepress/.temp/pages/componentmd/popup.html.js"), meta: {"title":"Popup 弹窗组件"} }],
  ["/componentmd/", { loader: () => import(/* webpackChunkName: "componentmd_index.html" */"E:/desktop/Browser-tab/z-ui/docs/.vuepress/.temp/pages/componentmd/index.html.js"), meta: {"title":""} }],
  ["/componentmd/toast.html", { loader: () => import(/* webpackChunkName: "componentmd_toast.html" */"E:/desktop/Browser-tab/z-ui/docs/.vuepress/.temp/pages/componentmd/toast.html.js"), meta: {"title":"toast 信息提示框"} }],
  ["/componentmd/xscroll.html", { loader: () => import(/* webpackChunkName: "componentmd_xscroll.html" */"E:/desktop/Browser-tab/z-ui/docs/.vuepress/.temp/pages/componentmd/xscroll.html.js"), meta: {"title":"xscroll 横屏滚动"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/desktop/Browser-tab/z-ui/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
