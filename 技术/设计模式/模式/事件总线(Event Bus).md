---
title: 事件总线(Event Bus)
aliases: [事件总线(Event Bus)]
tags:
date created: 2023-03-07 07:13:27
date updated: 2023-03-07 07:14:01
---

# 事件总线(Event Bus)

- 定义：事件总线是一种设计模式，它允许我们将事件的发布和订阅解耦，从而使我们的代码更加灵活和可维护
- 解释：事件总线是一种设计模式，它允许我们将事件的发布和订阅解耦，从而使我们的代码更加灵活和可维护
- 优点：解耦，使得发布者和订阅者之间不需要直接交互，只需要通过事件总线进行通信
- 缺点：事件总线是一个全局的单例，如果事件过多，会造成内存泄漏
- 适用场景：当一个对象的改变需要同时改变其他对象，而且它不知道具体有多少对象有待改变时
- 模式结构：
  - 事件总线类（Event Bus）：负责事件的注册、注销和通知
  - 事件类（Event）：事件的基类，封装事件的信息
  - 事件监听器类（Event Listener）：事件监听器的基类，封装事件的处理逻辑
  - 事件监听器实现类（Event Listener Implementation）：事件监听器的具体实现类
  - 事件发布者类（Event Publisher）：事件发布者的基类，封装事件的发布逻辑
  - 事件发布者实现类（Event Publisher Implementation）：事件发布者的具体实现类

## 代码示例

```ts
// 事件总线类
class EventBus {
  private static instance: EventBus;
  private listeners: Map<string, Function[]>;

  private constructor() {
    this.listeners = new Map();
  }

  public static getInstance(): EventBus {
    if (!EventBus.instance) {
      EventBus.instance = new EventBus();
    }
    return EventBus.instance;
  }

  public on(eventName: string, listener: Function): void {
    if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, []);
    }
    this.listeners.get(eventName).push(listener);
  }

  public off(eventName: string, listener: Function): void {
    if (!this.listeners.has(eventName)) {
      return;
    }
    const listeners = this.listeners.get(eventName);
    const index = listeners.indexOf(listener);
    if (index > -1) {
      listeners.splice(index, 1);
    }
  }

  public emit(eventName: string, ...args: any[]): void {
    if (!this.listeners.has(eventName)) {
      return;
    }
    const listeners = this.listeners.get(eventName);
    listeners.forEach((listener) => {
      listener(...args);
    });
  }
}

// 事件类
class Event {
  private name: string;
  private data: any;

  constructor(name: string, data: any) {
    this.name = name;
    this.data = data;
  }

  public getName(): string {
    return this.name;
  }

  public getData(): any {
    return this.data;
  }
}

// 事件监听器类

abstract class EventListener {
  public abstract handleEvent(event: Event): void;
}

// 事件监听器实现类

class EventListenerImplementation extends EventListener {
  public handleEvent(event: Event): void {
    console.log(`Event ${event.getName()} received`);
  }
}

// 事件发布者类

abstract class EventPublisher {
  public abstract publishEvent(event: Event): void;
}

// 事件发布者实现类

class EventPublisherImplementation extends EventPublisher {
  public publishEvent(event: Event): void {
    EventBus.getInstance().emit(event.getName(), event);
  }
}

// 测试代码

const eventBus = EventBus.getInstance();
const eventListener = new EventListenerImplementation();
const eventPublisher = new EventPublisherImplementation();

eventBus.on("test", (event: Event) => {
  console.log(`Event ${event.getName()} received`);
});

eventPublisher.publishEvent(new Event("test", "test"));
```
