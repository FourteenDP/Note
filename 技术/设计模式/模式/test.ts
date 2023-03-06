namespace Test {
  // 事件总线类
  class EventBus {
    private static instance: EventBus;
    private constructor() {}
    public static getInstance(): EventBus {
      if (!EventBus.instance) {
        EventBus.instance = new EventBus();
      }
      return EventBus.instance;
    }

    private _subscribers: { [key: string]: Function[] } = {};

    public on(event: string, callback: Function) {
      if (!Array.isArray(this._subscribers[event])) this._subscribers[event] = [];
      this._subscribers[event].push(callback);
    }

    public emit(event: string, ...args: any[]) {
      this._subscribers[event]?.forEach((callback) => {
        callback(...args);
      });
    }

    public off(event: string, callback: Function) {
      this._subscribers[event] = this._subscribers[event]?.filter((item) => item !== callback);
      if (this._subscribers[event]?.length === 0) delete this._subscribers[event];
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
