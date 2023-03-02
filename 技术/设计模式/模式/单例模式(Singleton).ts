namespace Singleton {
  // 懒汉式
  class Singleton {
    private static instance: Singleton;

    private constructor() { }

    static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  }
  const instance = Singleton.getInstance();
  const instance2 = Singleton.getInstance();
  console.log(instance === instance2);

  // 饿汉式
  class Singleton2 {
    private static instance: Singleton2 = new Singleton2();

    private constructor() { }

    static getInstance(): Singleton2 {
      return Singleton2.instance;
    }
  }
  const instance3 = Singleton2.getInstance();
  const instance4 = Singleton2.getInstance();
  console.log(instance3 === instance4);

  // 登记式/静态内部类
  class Singleton3 {
    private static instance: Singleton3;

    private constructor() { }

    static getInstance(): Singleton3 {
      if (!Singleton3.instance) {
        Singleton3.instance = new Singleton3();
      }
      return Singleton3.instance;
    }
  }
  const instance5 = Singleton3.getInstance();
  const instance6 = Singleton3.getInstance();
  console.log(instance5 === instance6);
}
