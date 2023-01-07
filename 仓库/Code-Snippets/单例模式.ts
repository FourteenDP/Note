/*
 * @文件路径: \9999-实例\单例模式.ts
 * @创建时间: 2022-12-08 01:38:54
 * @更新时间: 2022-12-08 02:25:39
 */

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
