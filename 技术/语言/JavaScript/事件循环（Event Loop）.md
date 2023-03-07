---
title: 事件循环（Event Loop）
aliases: [事件循环（Event Loop）]
tags: []
date created: 2023-03-08 02:53:42
date updated: 2023-03-08 03:01:14
---

# 事件循环（Event Loop）

JavaScript 中的事件循环（Event Loop）是实现异步编程的核心机制之一，它是 JavaScript 单线程执行模型的基础。事件循环负责管理执行栈和消息队列，并将事件推送到执行栈中执行。

当JavaScript代码执行时，它会被添加到执行栈中。当执行栈为空时，事件循环开始从消息队列中取出事件，并将其添加到执行栈中执行。当事件处理完毕后，执行栈再次为空，事件循环继续从消息队列中取出事件执行，直到消息队列为空。

在事件循环中，有三个主要的部分：宏任务（macro-task）、微任务（micro-task）和回调队列（callback queue）。

- 宏任务是事件循环的最外层，包括定时器（setTimeout、setInterval等）、事件（DOM事件、网络请求等）和I/O操作（文件读写等）等。
- 微任务是宏任务执行完毕后立即执行的任务，包括Promise回调、MutationObserver回调、process.nextTick回调、Object.observe回调、queueMicrotask回调等
- 回调队列存储在事件循环的微任务队列中，它们会在下一个事件循环迭代中被调用。
事件循环的具体流程可以分为以下几个步骤：

1. 执行当前执行栈中的所有同步代码，直到执行栈为空。
2. 从宏任务队列中取出一个任务执行，直到宏任务队列为空或者达到最大执行时间限制。
3. 执行所有微任务，直到微任务队列为空。
4. 更新渲染。
5. 如果存在回调队列，从回调队列中取出一个回调执行，回到第3步。
6. 如果代码正在执行中，则继续执行代码。

## 关联

[JavaScript 宏任务与微任务 - Web前端工程师面试题讲解_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1eQ4y1d7mE/?share_source=copy_web&vd_source=2d3491d8d73e0966a37eba2105c2d30c)
