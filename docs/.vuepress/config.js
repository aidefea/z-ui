import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "components", link: "/components/" },
      {
        text: "多功能1",
        prefix: "/functions/",
        children: ["f1.md", "f2.md"],
      },
    ],
    sidebar: {
      "/": [
        {
          text: "Introduction", // 侧边栏的标题
          children: ["/"], // 该标题下的子链接
        },
      ],
      "/guide/": [
        {
          text: "Introduction", // 侧边栏的标题
          children: ["/guide/"], // 该标题下的子链接
        },
        {
          text: "Getting Started",
          children: [],
        },
      ],
    },
    logo: "../assets/img/ng.png",
    footer: "Made with VuePress", // 页脚自定义
    repo: "https://gitee.com/CQSDJXCXZ/util",
    search: true, // 启用搜索功能
    home: "/", // 首页链接
    heroText: "My Awesome Blog", // 首页标题
    heroImage: "../assets/img/red.png",
  }),
  dest: "./docs/dist", // 指定构建输出目录
});
