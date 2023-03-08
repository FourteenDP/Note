---
title: 事件总线(Event Bus)
aliases: [事件总线(Event Bus), 事件总线(Event Bus) 别称发布订阅模式(PublishSubscribe), 发布订阅(PublishSubscribe)]
tags: []
date created: 2023-03-07 13:41:28
date updated: 2023-03-08 18:48:59
---

# 事件总线(Event Bus)

事件总线(Event Bus) 是基于[[观察者模式(Observer)]] 的一种设计模式，它是一种消息机制，用于在不同的模块之间传递消息。事件总线(Event Bus) 别称发布订阅模式(PublishSubscribe)。

- 优点：解耦，使得发布者和订阅者之间不需要直接交互，只需要通过事件总线进行通信。
- 缺点：事件总线是一个全局的单例，如果事件过多，会造成内存泄漏。

## 模式结构

- 事件总线（Event Bus）：负责事件的注册、注销和通知
- 发布者（Publisher）：负责事件的发布
- 订阅者（Subscriber）：负责事件的订阅
