---
标题: 事件总线 (Event Bus)
描述: null
封面: null
uid: '20230507140131654'
aliases: []
tags:
  - 计算机/设计模式
  - 计算机/设计模式/非GoF设计模式
  - 事件总线 (Event Bus)
cssclasses: null
创建时间: 2023-05-07 14:01:31
更新时间: 2023-12-31 03:07:33
---

# 事件总线 (Event Bus)

事件总线 (Event Bus) 是基于 [[观察者模式 (Observer)]] 的一种设计模式，它是一种消息机制，用于在不同的模块之间传递消息。

- 优点：解耦，使得发布者和订阅者之间不需要直接交互，只需要通过事件总线进行通信。
- 缺点：事件总线是一个全局的单例，如果事件过多，会造成内存泄漏。

## 模式结构

- 事件总线（Event Bus）：负责事件的注册、注销和通知
- 发布者（Publisher）：负责事件的发布
- 订阅者（Subscriber）：负责事件的订阅

## 和观察者模式的区别

![[567e4179118647d59f000763a3bc5046_tplv-k3u1fbpfcp-zoom-in-crop-mark_4536_0_0_0.webp]]

![[74f06fb7a35143b798b010b0481d853f_tplv-k3u1fbpfcp-zoom-in-crop-mark_4536_0_0_0.webp]]

![[19b670df6cb54c4ebdc17a114b5dc97c_tplv-k3u1fbpfcp-zoom-in-crop-mark_4536_0_0_0.webp]]
