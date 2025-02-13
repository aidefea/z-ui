// docs/.vuepress/config.js
import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { path } from "@vuepress/utils";
import pkg from "@vuepress/plugin-search";
var __vite_injected_original_dirname = "D:/Code/util/docs/.vuepress";
var { searchPlugin } = pkg;
var config_default = defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: "./assets/img/ng.png",
    navbar: [
      { text: "Z-ZYGUI", link: "/" },
      { text: "\u7EC4\u4EF6", link: "/componentmd/" }
    ],
    sidebar: {
      "/": [
        {
          text: "\u5165\u95E8\u6307\u5357",
          children: ["/"]
        }
      ],
      "/componentmd/": [
        {
          text: "\u7EC4\u4EF6\u5E93",
          children: [
            "/componentmd/button",
            "/componentmd/toast",
            "/componentmd/input",
            "/componentmd/table"
          ]
        }
      ]
    },
    plugins: [
      registerComponentsPlugin({
        componentsDir: path.resolve(__vite_injected_original_dirname, "../components")
      }),
      searchPlugin({
        locales: {
          "/": {
            placeholder: "Search"
          }
        }
      })
    ],
    footer: "Made with VuePress",
    // 页脚自定义
    repo: "https://gitee.com/CQSDJXCXZ/util",
    search: true,
    home: "/",
    // 首页链接
    heroText: "My Awesome Blog",
    // 首页标题
    heroImage: "./assets/img/red.png"
  }),
  dest: "./docs/dist"
  // 指定构建输出目录
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovQ29kZS91dGlsL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxDb2RlXFxcXHV0aWxcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Db2RlL3V0aWwvZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzXCI7aW1wb3J0IHsgdml0ZUJ1bmRsZXIgfSBmcm9tIFwiQHZ1ZXByZXNzL2J1bmRsZXItdml0ZVwiO1xyXG5pbXBvcnQgeyBkZWZhdWx0VGhlbWUgfSBmcm9tIFwiQHZ1ZXByZXNzL3RoZW1lLWRlZmF1bHRcIjtcclxuaW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gXCJ2dWVwcmVzc1wiO1xyXG5pbXBvcnQgeyByZWdpc3RlckNvbXBvbmVudHNQbHVnaW4gfSBmcm9tIFwiQHZ1ZXByZXNzL3BsdWdpbi1yZWdpc3Rlci1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHBhdGggfSBmcm9tIFwiQHZ1ZXByZXNzL3V0aWxzXCI7XHJcbmltcG9ydCBwa2cgZnJvbSBcIkB2dWVwcmVzcy9wbHVnaW4tc2VhcmNoXCI7XHJcbmNvbnN0IHsgc2VhcmNoUGx1Z2luIH0gPSBwa2c7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcclxuICBidW5kbGVyOiB2aXRlQnVuZGxlcigpLFxyXG4gIHRoZW1lOiBkZWZhdWx0VGhlbWUoe1xyXG4gICAgbG9nbzogXCIuL2Fzc2V0cy9pbWcvbmcucG5nXCIsXHJcbiAgICBuYXZiYXI6IFtcclxuICAgICAgeyB0ZXh0OiBcIlotWllHVUlcIiwgbGluazogXCIvXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIlx1N0VDNFx1NEVGNlwiLCBsaW5rOiBcIi9jb21wb25lbnRtZC9cIiB9LFxyXG4gICAgXSxcclxuICAgIHNpZGViYXI6IHtcclxuICAgICAgXCIvXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlx1NTE2NVx1OTVFOFx1NjMwN1x1NTM1N1wiLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcIi9cIl0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgXCIvY29tcG9uZW50bWQvXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlx1N0VDNFx1NEVGNlx1NUU5M1wiLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgXCIvY29tcG9uZW50bWQvYnV0dG9uXCIsXHJcbiAgICAgICAgICAgIFwiL2NvbXBvbmVudG1kL3RvYXN0XCIsXHJcbiAgICAgICAgICAgIFwiL2NvbXBvbmVudG1kL2lucHV0XCIsXHJcbiAgICAgICAgICAgIFwiL2NvbXBvbmVudG1kL3RhYmxlXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICByZWdpc3RlckNvbXBvbmVudHNQbHVnaW4oe1xyXG4gICAgICAgIGNvbXBvbmVudHNEaXI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vY29tcG9uZW50c1wiKSxcclxuICAgICAgfSksXHJcbiAgICAgIHNlYXJjaFBsdWdpbih7XHJcbiAgICAgICAgbG9jYWxlczoge1xyXG4gICAgICAgICAgXCIvXCI6IHtcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VhcmNoXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgXSxcclxuICAgIGZvb3RlcjogXCJNYWRlIHdpdGggVnVlUHJlc3NcIiwgLy8gXHU5ODc1XHU4MTFBXHU4MUVBXHU1QjlBXHU0RTQ5XHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0ZWUuY29tL0NRU0RKWENYWi91dGlsXCIsXHJcbiAgICBzZWFyY2g6IHRydWUsXHJcbiAgICBob21lOiBcIi9cIiwgLy8gXHU5OTk2XHU5ODc1XHU5NEZFXHU2M0E1XHJcbiAgICBoZXJvVGV4dDogXCJNeSBBd2Vzb21lIEJsb2dcIiwgLy8gXHU5OTk2XHU5ODc1XHU2ODA3XHU5ODk4XHJcbiAgICBoZXJvSW1hZ2U6IFwiLi9hc3NldHMvaW1nL3JlZC5wbmdcIixcclxuICB9KSxcclxuICBkZXN0OiBcIi4vZG9jcy9kaXN0XCIsIC8vIFx1NjMwN1x1NUI5QVx1Njc4NFx1NUVGQVx1OEY5M1x1NTFGQVx1NzZFRVx1NUY1NVxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErUCxTQUFTLG1CQUFtQjtBQUMzUixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLGdDQUFnQztBQUN6QyxTQUFTLFlBQVk7QUFDckIsT0FBTyxTQUFTO0FBTGhCLElBQU0sbUNBQW1DO0FBTXpDLElBQU0sRUFBRSxhQUFhLElBQUk7QUFFekIsSUFBTyxpQkFBUSxpQkFBaUI7QUFBQSxFQUM5QixTQUFTLFlBQVk7QUFBQSxFQUNyQixPQUFPLGFBQWE7QUFBQSxJQUNsQixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixFQUFFLE1BQU0sV0FBVyxNQUFNLElBQUk7QUFBQSxNQUM3QixFQUFFLE1BQU0sZ0JBQU0sTUFBTSxnQkFBZ0I7QUFBQSxJQUN0QztBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsS0FBSztBQUFBLFFBQ0g7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVUsQ0FBQyxHQUFHO0FBQUEsUUFDaEI7QUFBQSxNQUNGO0FBQUEsTUFDQSxpQkFBaUI7QUFBQSxRQUNmO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLHlCQUF5QjtBQUFBLFFBQ3ZCLGVBQWUsS0FBSyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxNQUN4RCxDQUFDO0FBQUEsTUFDRCxhQUFhO0FBQUEsUUFDWCxTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsWUFDSCxhQUFhO0FBQUEsVUFDZjtBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxRQUFRO0FBQUE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQTtBQUFBLElBQ04sVUFBVTtBQUFBO0FBQUEsSUFDVixXQUFXO0FBQUEsRUFDYixDQUFDO0FBQUEsRUFDRCxNQUFNO0FBQUE7QUFDUixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
