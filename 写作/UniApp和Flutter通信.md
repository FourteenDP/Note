---
title: UniApp和Flutter通信
aliases: [UniApp和Flutter通信]
tags: []
date created: 2023-01-12 13:18:11
date updated: 2023-01-12 13:31:02
---

# UniApp和Flutter通信

## 前言

没错上面得标题真的是个问号,uniapp混合开发时一些复杂得功能还是需要使用到原生开发,而原生开发成本太高,我就想能不能uniapp直接和flutter通信

## UniApp混编的几种方案

```ad-note
前两种方案都可以通过原生作为通信桥和Flutter通信
```

### UniApp原生插件实现混合

    插件开发需要原生开发能力，多端需要同时维护两套代码

  以UniApp为基座，使用原生插件实现需要高性能，高复杂的需求

### 原生应用和uni小程序SDK

 以原生应用为基座,内置uni小程序快速实现需求

### 使用UniApp Flutter插件

```ad-warning
可惜的是大佬已经不维护,也没有开源项目,只留下了一个空项目
```

社区大佬开发的一个已UniApp为基座,Flutter可直接作为UniApp插件使用,插件地址:[DCloud 插件市场-Flutter插件](https://ext.dcloud.net.cn/search?q=flutter)

目前我觉得可以研究React Native和Flutter得开源通信方案,看是否能得出UniApp通信方案

## 关联
