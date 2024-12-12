// 导入公共配置选项
// require 这是nodejs环境下的加载函数（导入） 可以省略.js后缀
const option = require("./webpack.config.common");
const { merge } = require("webpack-merge");
const path = require("path");
// 开发环境
const devConfig = {
  // 打包的环境模式(production | development)
  mode: "development",
  // devServer (HTTP服务)
  devServer: {
    // 设置运行的目录
    static: {
      directory: path.join(__dirname, "dist"),
    },
    // 压缩
    compress: true,
    // 端口
    port: 8080,
    // 自动打开页面
    open: true,
    // 设置hot
    // hot: true,
    // 过去测试过可用的写法
    proxy: [
      {
        target: "https://m.178hui.com", //需要代理的地址
        context: ["/", "/api"],
        secure: false,
        changeOrigin: true,
      },
    ],
  },
};

// 合并配置选项
module.exports = merge(option, devConfig);
