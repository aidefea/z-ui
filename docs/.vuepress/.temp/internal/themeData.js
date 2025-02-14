export const themeData = JSON.parse(
  '{"logo":"../assets/img/ng.png","navbar":[{"text":"Z-ZYGUI","link":"/"},{"text":"组件","link":"/componentmd/"}],"sidebar":{"/":[{"text":"入门指南","children":["/"]}],"/componentmd/":[{"text":"组件库","children":["/componentmd/button","/componentmd/toast","/componentmd/popup.md"]}]},"plugins":[{"name":"@vuepress/plugin-register-components","multiple":true}],"footer":"Made with VuePress","repo":"https://gitee.com/CQSDJXCXZ/util","search":true,"home":"/","heroText":"My Awesome Blog","locales":{"/":{"selectLanguageName":"English"}},"colorMode":"auto","colorModeSwitch":true,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebarDepth":2,"editLink":true,"editLinkText":"Edit this page","lastUpdated":true,"lastUpdatedText":"Last Updated","contributors":true,"contributorsText":"Contributors","notFound":["There\'s nothing here.","How did we get here?","That\'s a Four-Oh-Four.","Looks like we\'ve got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}'
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData);
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData);
  });
}
