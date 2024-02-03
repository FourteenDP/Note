---
标题: 迪米特法则 LOD(Law of Demeter)
描述: null
封面: null
uid: 20240123112807520
aliases: null
tags:
  - 计算机/设计模式/基本原则/其它原则
cssclasses: null
创建时间: 2023-05-07T14:01:31.000Z
更新时间: 2024-01-22T16:57:29.000Z
---

# 迪米特法则 LOD(Law of Demeter)

- 定义：Talk only to your immediate friends and not to strangers，只和你的直接朋友交谈，不和陌生人说话
- 解释：一个对象应该对其他对象有最少的了解，类之间的耦合度越低，越有利于复用，一个类应该对自己需要耦合或调用的类知道得最少，类的内部如何实现与调用者或者依赖者没有关系，调用者或者依赖者只需要知道它需要的方法即可
