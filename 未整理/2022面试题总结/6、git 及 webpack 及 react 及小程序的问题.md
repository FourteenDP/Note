---
标题: 6、git 及 webpack 及 react 及小程序的问题
描述: null
封面: null
uid: 20240203221855944
aliases: []
tags:
  - 面试题
cssclasses: null
创建时间: 2023-05-07T17:52:33.000Z
更新时间: 2024-01-22T16:57:27.000Z
---

# 6、git 及 webpack 及 react 及小程序的问题

## 四、git

### 1、git 常用命令

​ git clone 地址 克隆项目

​ git status 查看状态

​ git add. 提交到暂存区

​ git commit -m ' 描述 ' 提交到分支

​ git push origin xxx 提交远程

​ git pull origin xxx 从远程拉取代码并合并到本地分支

​ git check -b xxx 创建分支

​ git checkout xxx 切换分支

​ git branch 查看分支

​ git reset --hard ' 版本号 ' 回退版本

​ git log 查看日志

​ git reflog 查看所有提交的日志

### 2、git 的工作流程（git 是怎么工作的）

```
通过git add将工作区的代码提交到暂存区，通过git commit将暂存区的代码提交到自己的分支，git push提交到远程仓库

```

### 3、git Fetch 和 git Pull 的区别

```
git pull：相当于是从远程获取最新版本并merge到本地。
git fetch：相当于是从远程获取最新版本到本地，不会自动merge。

```

### 4、git Pull 和 Git Rebase

```
git pull：获取远程分支，并更新本地分支。
git rebase：合并分支到当前分支，只存在一个。

```

### 5、遇到冲突是怎么解决的

```

```

### 6、工作中的 git

```

```

## 五、小程序和 react 中的问题

**1、微信小程序生命周期**

```
应用的生命周期

页面的生命周期

```

**2、小程序用的怎么样**

**3、有过微信小程序及公众号的开发吗**

**4、react 做过项目没有**

## 六、webpack

### 1、webpack 是什么

```
模块化打包机 或者 模块打包工具, 对应到前端开发来说，就是将很多的的 css文件，js文件，图片等“物品”，全都写进一个js文件，而不是在一个html页面通过script,link标签去引入多个静态资源.

```

### 2、webpack 的作用

```
1)进行重新加载编译。实际就是将浏览器不认识的语法编译成浏览器认识的语法。比如less
编译成css，ES6 语法 转成 ES5等等。
2)减少io请求。通常我们在请求后，会返回一个html到浏览器。这时，我们如果打开控制台，就会发现在html页面通过script,link等标签引用的静态资源， 浏览器会再次发出请求去获取这些资源。但是webpack的打包，将所有的静态资源都合并好了，减少了io请求。

```

### 3、webpack 的五个核心

```
1、entry
  入口（entry）指示webpack以哪个文件作为入口起点开始打包，分析构建内部依赖图。

2、output
  出口（output）指示webpack打包后的资源 bundles 输出到哪里，以及如何命名。

3、loader
  loader让webpack能够去处理那些非JavaScript资源css、img等，将它们处理成webpack能够识别的资源，可以理解成一个翻译过程（webpack自身只能理解js和json）。

4、plugins
  插件（plugins）可用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。

5、mode
  模式（mode）指示webpack使用相应模式的配置。
  开发模式（development）：配置比较简单，能让代码本地调试运行的环境。
  生产模式（production）：代码需要不断优化达到性能最好。能让代码优化上线运行的环境。
  都会自动启用一些插件，生产模式使用插件更多


```

### 4、webpack 的打包优化

```
一、优化图片
  使用 url-loader 优化， 将小图片转化成base64压缩,防止小图片太多请求次数太多。
二、分离第三方包
  打包后的bundle.js文件夹较大，所以每次加载的时候，请求比较慢，所以有必要在打包时将第三方包分离出来。使用CommonsChunkPlugin 插件进行配置。
三、分离 css 文件并压缩 css 文件
  使用 extract-text-webpack-plugin 插件将css文件分离出来。为了使项目加载时候尽早优先加载css样式，也为了解决js文件体积过大的问题
四、压缩 js 文件
  使用 uglifyjs-webpack-plugin 将js压缩，减少打包后的 vendor.js , bundle.js 等js的文件大小
五、压缩Html
  为了减少打包后的文件体积，使性能更好，效率更高，提高加载速度，打包时有必要进行压缩。
  使用html-webpack-plugin 进行压缩

```

### 5、项目中没有用到过 webpack 配置相关没有怎么去配置过

```
1、跨域的配置
2、2.0项目使用LESS时的配置，4.0的项目无需配置

```

6、webpack 的相关优化

```
图片优化
  https://www.jb51.net/article/161272.htm
  控制图片质量，压缩图片大小；
  配置 <img /> 标签的 srcset 来适应不同的屏幕；
  合成雪碧图，减少图片资源请求数；
  使用占位图。
https://www.cnblogs.com/wangjiachen666/p/11561186.html
2. 提高 Webpack 打包速度
2.1 优化Loader搜索范围
2.2 cache-loader缓存loader处理结果
2.3 使用多线程处理打包
2.4 DllPlugin&DllReferencePlugin
2.5 noParse
2.6 IgnorePlugin
2.7 打包文件分析工具
2.8 费时分析
2.9 一些小的优化点
3. 减少 Webpack 打包后的文件体积
3.1 对图片进行压缩和优化
3.2 删除无用的CSS样式
3.3 以CDN方式加载资源
3.4 开启Tree Shaking
3.5 开启Scope Hoisting
3.6 按需加载&动态加载

```
