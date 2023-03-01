---
title: 补充原则(不属于SOLID原则)
aliases: [补充原则(不属于SOLID原则)]
tags: []
date created: 2023-03-02 01:01:25
date updated: 2023-03-02 01:06:39
---

# 补充原则(不属于SOLID原则)

## 迪米特法则 LOD(Law of Demeter)

- 定义：Talk only to your immediate friends and not to strangers，只和你的直接朋友交谈，不和陌生人说话
- 解释：一个对象应该对其他对象有最少的了解，类之间的耦合度越低，越有利于复用，一个类应该对自己需要耦合或调用的类知道得最少，类的内部如何实现与调用者或者依赖者没有关系，调用者或者依赖者只需要知道它需要的方法即可

## KISS原则(Keep It Simple and Stupid)

- 定义：Keep It Simple and Stupid，保持简单和愚蠢
- 解释：在设计和编码时，应该尽量保持简单，不要过度设计，不要过度编码

## YAGNI原则(You Ain't Gonna Need It)

- 定义：You Ain't Gonna Need It，你不会需要它
- 解释：在设计和编码时，不要去实现你现在不需要的功能，等到真正需要的时候再去实现它

## DRY原则(Don't Repeat Yourself)

- 定义：Don't Repeat Yourself，不要重复自己
- 解释：在设计和编码时，不要去重复自己，尽量复用已有的代码
