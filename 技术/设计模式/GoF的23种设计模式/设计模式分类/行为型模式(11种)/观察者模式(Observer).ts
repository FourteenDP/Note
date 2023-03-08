// 观察者模式(Observer)
namespace Observer {
  // 观察者接口
  interface Observer {
    update(temperature: number): void;
  }
  // 主题接口
  interface Subject {
    registerObserver(o: Observer): void;
    removeObserver(o: Observer): void;
    notifyObservers(): void;
  }
  // 主题实现类
  class WeatherData implements Subject {
    private observers: Observer[];
    private temperature: number;
    constructor() {
      this.observers = [];
    }
    registerObserver(o: Observer): void {
      this.observers.push(o);
    }
    removeObserver(o: Observer): void {
      let index = this.observers.indexOf(o);
      if (index > -1) {
        this.observers.splice(index, 1);
      }
    }
    notifyObservers(): void {
      for (let observer of this.observers) {
        observer.update(this.temperature);
      }
    }
    setTemperature(temperature: number): void {
      this.temperature = temperature;
      this.notifyObservers();
    }
  }
  // 观察者实现类
  class CurrentConditionsDisplay implements Observer {
    private temperature: number;
    update(temperature: number): void {
      this.temperature = temperature;
      this.display();
    }
    display(): void {
      console.log(`Current conditions: ${this.temperature}F degrees`);
    }
  }
  // 测试
  let weatherData = new WeatherData();
  let currentDisplay = new CurrentConditionsDisplay();
  weatherData.registerObserver(currentDisplay);
  weatherData.setTemperature(80);
  weatherData.setTemperature(82);
  weatherData.setTemperature(78);
}
