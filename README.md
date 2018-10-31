## webpack Vue配置

 * @author: gaoyanan
 * @version 0.0 .1
 * @created: Wed Oct 31 2018 16: 59: 49 GMT + 0800
 * @see https: //github.com/Lady-Gao
 
### 创建package.json文件

> cnpm init -y
###  创建webapck.config.json文件 
>https://doc.webpack-china.org/configuration/

```JS
const path = require('path');
module.exports = {
  mode: 'development', //development开发状态 , production正式版本
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/public/"
    //这个就是webpack-dev-server 提供的虚拟的文件夹 在内存中，为了编译的速度更快，里面有一个bundle.js
  },
}
```
### 安装webpack依赖
> cnpm install --save-dev webpack webpack-cli webpack-dev-server

### 安装babel依赖
> cnpm install --save-dev babel-loader@7.15 babel-core babel-preset-es2015
### 修改 package.json 文件
```jsON
  "scripts": {
      //设置启动端口号
    "dev": "webpack-dev-server --content-base ./ --port 8080"
  }
}
```
###  新建index.html
``` HTML  
//引入文件
	<script type="text/javascript" src="./public/bundle.js"></script>
```
###  安装Vue
>cnpm install --save vue

### 安装vue相关依赖
> cnpm install --save-dev vue-loader css-loader vue-template-compiler
- 注意:vue-loader@15.*之后 必须配置带有VueLoaderPlugin 之外，还需另外单独配置css-loader
- https://vue-loader.vuejs.org/zh/guide/#%E6%89%8B%E5%8A%A8%E9%85%8D%E7%BD%AE

### 修改app.js
```js
import Vue from "vue";
import APP from "./APP.vue";

new Vue({
    el: "#app",
    data: {
        a: 1
    },
    render:h=>h(APP)
})
```
### 修改webpack.config.js 配置别名
```JS
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  mode: 'development', //development开发状态 , production正式版本
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/public/"
    //这个就是webpack-dev-server 提供的虚拟的文件夹 在内存中，为了编译的速度更快，里面有一个bundle.js
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
}
```
