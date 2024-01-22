---
标题: 接口隔离原则 ISP(Interface Segregation Principle)
描述: null
封面: null
uid: '20230507140131489'
aliases: []
tags:
  - 计算机/设计模式
  - 计算机/设计模式/基本原则
  - 计算机/设计模式/基本原则/SOLID
  - 接口隔离原则 ISP(Interface Segregation Principle)
cssclasses: null
创建时间: 2023-05-07 14:01:31
更新时间: 2023-12-31 03:07:32
---

# 接口隔离原则 ISP(Interface Segregation Principle)

- 定义：使用多个专门的接口，而不使用单一的总接口，客户端不应该依赖它不需要的接口
- 解释：客户端不应该依赖它不需要的接口，即一个类对另一个类的依赖应该建立在最小的接口上
- 优点：可以提高代码的可读性和可维护性，降低变更引起的风险
- 缺点：增加了系统的复杂度和理解难度
- 适用场景：在系统中尽量使用面向接口编程，而不是面向实现编程
