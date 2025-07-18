// 加载path模块
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV === "development";

const entryPath = path.resolve(
  __dirname,
  `../${isDev ? "sample" : "packages"}/main.js`
);

// const styleLoader = isDev ? "style-loader" : MiniCssExtractPlugin.loader;

// 配置选项
const option = {
  // 项目入口
  entry: {
    main: entryPath,
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "main.js",
    library: {
      // 配置库的输出方式
      name: "zYGUtils", // 库的全局变量名
      type: "umd", // 输出格式，UMD 适合在多种环境中使用
    },
    clean: true, // 清理输出目录
  },
  devtool: false,
  // 插件
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
    }),
  ],
  // 加载器 （loader）
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: false, // 禁用 CSS 模块化
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        // 打包时排除 node_modules 目录下的文件 （这个目录下的文件不需要打包）
        exclude: /node_modules/,
        type: "javascript/auto",
        use: [
          {
            loader: "url-loader",
            options: {
              // 超出8kb,就不转换成base64格式
              // 限制  小于等于8kb的图片，做成base64格式
              // 8192/1024 = 8kb
              limit: 8192,
              // 禁用严格模式
              esModule: false,
              // 设置输出的文件路径
              // outputPath: 'images',
              name: "./images/[name]_[hash].[ext]",
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          // 禁用严格模式
          esModule: false,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    //项目中设置路劲别名
    alias: {
      "z-zygui-css": path.resolve(
        __dirname,
        "../node_modules/z-zygui/dist/main.css"
      ),
      "z-zygui": path.resolve(
        __dirname,
        "../node_modules/z-zygui/dist/main.js"
      ),
    },
  },
  //警告 webpack 的性能提示
  performance: {
    hints: "warning",
    //入口起点的最大体积
    maxEntrypointSize: 50000000,
    //生成文件的最大体积
    maxAssetSize: 30000000,
    //只给出 js 文件的性能提示
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith(".js");
    },
  },
};
//把配置项挂在模块系统上
module.exports = option;
