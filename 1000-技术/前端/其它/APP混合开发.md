---
aliases: 
tags: 
date created: 2022-06-22 10:53:28
date updated: 2022-12-01 17:55:25
title: APP 混合开发
---

# APP 混合开发

## 编程方式

- 原生
- uniapp
- taro
- flutter
- webview
- react native
- WebAssembly
- 小程序

### 方案

### Uniapp 混编方案

- uniapp + flutter 实现混合

  [使用插件实现 flutter 的混合](https://ext.dcloud.net.cn/plugin?id=4302#detail),一套代码支持多端

  混合 flutter 开发，主要解决 uniapp 无法实现的需求，同时原生开发能力有限的情况，使用 fluteer 以更低的学习成本，和开发成本开发插件，同时获得 fluterr 的生态环境，当然如果连 fluterr 也解决不了的问题，还是需要写原生

- uniapp + 原生插件实现混合

  插件开发需要原生开发能力，多端需要同时维护两套代码

  已 uniapp 为主程序，原生插件实现需要高性能，高复杂的需求

- 原生程序 + uni 小程序 SDK

  以原生开发为主程序，unisdk 快速开发需求，减少开发成本

> 后两个混合开发方式同时支持混合 flutter，可以使用原生程序作为 uniapp 和 flutter 的通信桥
