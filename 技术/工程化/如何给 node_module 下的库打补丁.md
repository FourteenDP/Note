---
title: 如何给 node_module 下的库打补丁
tags: []
date created: 2023-03-11 22:33:07
date updated: 2023-11-25 03:01:25
---

# 如何给 node_module 下的库打补丁

## 解决办法如下

- 直接修改 node_module 中的代码
  - 及其**不优雅**，协作时别人不会安装你修改的代码
- 从原仓库中 fork 一份，然后修改
  - 维护成本高
- 像库的仓库提 PR 等待作者合并
  - 得看作者的活跃度，还得保证新版本向下兼容

## 使用 Patch-package 优雅的给 node_module 库打补丁

### 安装

```shell
# npm
npm i patch-package -D
# yarn v1
yarn add patch-package postinstall-postinstall -D
```

在 `yarn v2+` 请使用原生支持的 `yarn patch`,请参考 [yarn patch](https://yarnpkg.com/cli/patch)

在 `pnpm v7.11.0<=` 请使用原生支持的 `pnpm patch`,请参考 [pnpm patch](https://pnpm.io/cli/patch)

```json
// package.json
{
  "scripts": {
    "postinstall": "patch-package" // 会自动在 node_modules 中寻找需要打补丁的库
  }
}
```

### 下面以给 `Lodash` 修改 `_.get` 方法为例

```shell
# 安装 lodash
npm i lodash
```

**直接修改 `node_modules` 中的文件!!!**

直接在 `node_modules/lodash/get.js` 中修改 `get` 方法

```js
// node_modules/lodash/get.js
function get(object, path, defaultValue) {
+ if (path === 'a.b.c') {
+   return 'hello world'
+ }
  const result = object == null ? undefined : baseGet(object, path)
  return result === undefined ? defaultValue : result
}

// index
const _ = require('lodash')
console.log(_.get({ a: { b: { c: 1 } } }, 'a.b.c')) // hello world
```

### 生成补丁

> [!warning]
> 应为要进行整个 `lodash` 库的文件 `diff` 这个过程极慢，我这大概用了十几分钟

```shell
# npm
npx patch-package lodash
```

在代码库中会生成一个 `patches` 文件夹，里面有一个 `lodash+4.17.21.patch` 文件，这个就是补丁文件

如下：

```shell
diff --git a/node_modules/lodash/get.js b/node_modules/lodash/get.js
index 8805ff9..79b973b 100644
--- a/node_modules/lodash/get.js
+++ b/node_modules/lodash/get.js
@@ -26,6 +26,10 @@ var baseGet = require('./_baseGet');
  * // => 'default'
  */
 function get(object, path, defaultValue) {
+  console.log('path: ' + path);
+  if (path === 'a.b.c') {
+    return 'hello world'
+  }
   var result = object == null ? undefined : baseGet(object, path);
   return result === undefined ? defaultValue : result;
 }
```

同事只需要运行一下 `npx patch-package` 或者运行 `npm run postinstall` 就会自动把补丁打到 `node_modules` 中啦

![[Pasted image 20230311222955.png]]

## 参考

- [ds300/patch-package: Fix broken node modules instantly 🏃🏽‍♀️💨](https://github.com/ds300/patch-package)
