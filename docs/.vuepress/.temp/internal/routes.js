export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Code/util/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"组件库"} }],
  ["/components/", { loader: () => import(/* webpackChunkName: "components_index.html" */"D:/Code/util/docs/.vuepress/.temp/pages/components/index.html.js"), meta: {"title":"Vue.js 介绍"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"D:/Code/util/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"页面的标题"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Code/util/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
