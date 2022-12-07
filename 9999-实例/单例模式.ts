/*
 * @文件路径: \9999-测试\单例模式.ts
 * @创建时间: 2022-12-08 01:38:54
 * @更新时间: 2022-12-08 02:00:29
 */

namespace Singleton {
  /**
   * @description : 单例模式
   * @return       {Singleton}
   * @example     : const instance = Singleton.getInstance();
   * @note        : 单例模式是指一个类只有一个实例，且该类能自行创建这个实例的一种模式
   */
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
