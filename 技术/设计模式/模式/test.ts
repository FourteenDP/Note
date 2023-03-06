namespace Test {
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
      this.listeners.get(eventName)!.push(listener)
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

}
