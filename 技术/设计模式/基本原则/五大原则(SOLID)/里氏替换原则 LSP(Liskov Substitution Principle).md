---
title: 里氏替换原则 LSP(Liskov Substitution Principle)
aliases:
  - 里氏替换原则 LSP(Liskov Substitution Principle)
tags: []
date created: 2023-03-02 14:46:23
date updated: 2023-11-22 10:40:47
---

# 里氏替换原则 LSP(Liskov Substitution Principle)

- 定义：所有引用基类的地方必须能透明地使用其子类的对象
- 解释：子类必须完全实现父类的方法，而且子类可以有自己的个性化方法
- 优点：可以在运行时判断任意一个实例对象是否是某个类的实例
- 缺点：增加了代码的复杂度
- 适用场景：只有当子类可以替换掉所有父类的出现的地方，父类才能真正被复用，而且子类还能增加父类的新功能
