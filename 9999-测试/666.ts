class Singleton {
  private static instance: Singleton;
  private constructor() { }
  public static getInstance() {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
}

// 测试
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
