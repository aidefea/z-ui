// 导入公共配置选项
const path = require("path");
const option = require("./webpack.config.common");
const { merge } = require("webpack-merge");
// const path = require("path");
// 开发环境
const devConfig = {
  // 打包的环境模式(production | development)
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    compress: true,
    port: 8080,
    // 自动打开页面
    open: true,
    // 设置hot
    hot: true, // 启用热模块替换
    client: {
      logging: "none", // 设置为 'none' 或 'error' 以减少日志输出
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};

// 合并配置选项
module.exports = merge(option, devConfig);
