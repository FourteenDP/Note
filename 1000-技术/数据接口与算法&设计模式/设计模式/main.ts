// 事件总线
class EventBus {
  public event: any;
  constructor() {
    this.event = {};
  }
  on(eventName, fn) {
    if (!this.event[eventName]) {
      this.event[eventName] = [];
    }
    this.event[eventName].push(fn);
  }
  emit(eventName, ...args) {
    if (this.event[eventName]) {
      this.event[eventName].forEach((fn) => {
        fn(...args);
      });
    }
  }
  off(eventName, fn) {
    if (this.event[eventName]) {
      this.event[eventName] = this.event[eventName].filter((item) => {
        return item !== fn;
      });
    }
  }
}
