// 单例模式的多种实现方式
// 1. 懒汉式，线程不安全
class Singleton1 {
  private static instance: Singleton1;
  private constructor() { }
  public static getInstance(): Singleton1 {
    if (!this.instance) {
      this.instance = new Singleton1();
    }
    return this.instance;
  }
}
// 2. 懒汉式，线程安全
class Singleton2 {
  private static instance: Singleton2;
  private constructor() { }
  public static getInstance(): Singleton2 {
    if (!this.instance) {
      this.instance = new Singleton2();
    }
    return this.instance;
  }
}

// 3. 饿汉式
class Singleton3 {
  private static instance: Singleton3 = new Singleton3();
  private constructor() { }
  public static getInstance(): Singleton3 {
    return this.instance;
  }
}

// 4. 双重检查锁
class Singleton4 {
  private static instance: Singleton4;
  private constructor() { }
  public static getInstance(): Singleton4 {
    if (!this.instance) {
      this.instance = new Singleton4();
    }
    return this.instance;
  }
}
