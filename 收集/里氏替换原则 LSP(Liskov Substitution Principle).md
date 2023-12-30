---
标题: 里氏替换原则 LSP(Liskov Substitution Principle)
笔记ID: 1683439291492
aliases: []
tags:
  - 计算机/设计模式
  - 基本原则
  - SOLID
  - 里氏替换原则 LSP(Liskov Substitution Principle)
cssclasses: 
描述: 
创建时间: 2023-05-07 14:01:31
更新时间: 2023-12-31 01:10:03
---

# 里氏替换原则 LSP(Liskov Substitution Principle)

- 定义：所有引用基类的地方必须能透明地使用其子类的对象
- 解释：子类必须完全实现父类的方法，而且子类可以有自己的个性化方法
- 优点：可以在运行时判断任意一个实例对象是否是某个类的实例
- 缺点：增加了代码的复杂度
- 适用场景：只有当子类可以替换掉所有父类的出现的地方，父类才能真正被复用，而且子类还能增加父类的新功能
