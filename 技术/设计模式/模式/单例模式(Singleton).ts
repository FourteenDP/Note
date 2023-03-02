namespace Singleton {
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

  // 测试
  const instance = Singleton.getInstance();
  const instance2 = Singleton.getInstance();
  console.log(instance === instance2);
}
