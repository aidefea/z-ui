import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { path } from "@vuepress/utils";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: "../assets/img/ng.png",
    navbar: [
      { text: "Z-ZYGUI", link: "/" },
      { text: "组件", link: "/componentmd/" },
    ],
    sidebar: {
      "/": [
        {
          text: "入门指南",
          children: ["/"],
        },
      ],
      "/componentmd/": [
        {
          text: "组件库",
          children: [
            "/componentmd/button.md",
            "/componentmd/toast.md",
            "/componentmd/popup.md",
            "/componentmd/drawer.md",
            "/componentmd/loading.md",
            "/componentmd/notify.md",
            "/componentmd/xscroll.md",
          ],
        },
      ],
    },
    plugins: [
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, "../../sample"),
      }),
    ],
    footer: "Made with VuePress", // 页脚自定义
    repo: "https://gitee.com/CQSDJXCXZ/util",
    search: true,
    home: "/", // 首页链接
    heroText: "My Awesome Blog", // 首页标题
  }),
  dest: "./docs/dist", // 指定构建输出目录
  base: "/z-ui/",
});
