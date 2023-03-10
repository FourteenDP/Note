interface Function {
  myCall(context: any, ...args: any[]): any
  apply(context: any, args: any[]): any
  bind(context: any, ...args: any[]): any
}
namespace DesignPatterns.This {
  // 实现call方法
  Function.prototype.myCall = function (context: any, ...args: any[]) {
    // 判断是否为函数调用
    if (typeof this !== 'function') {
      throw new TypeError('Error')
    }
    // 判断context是否为null或undefined (null和undefined都会被转换成globalThis)
    context = context || globalThis
    // 将调用call的函数设为context的一个属性
    context.fn = this as any
    // 调用该函数
    const result = context.fn(...args)
    // 删除该属性
    delete context.fn
    // 返回结果
    return result
  }

  // 测试
  const obj = {
    name: 'obj',
    getName() {
      console.log(this.name)
    }
  }

  const obj2 = {
    name: 'obj2'
  }

  obj.getName.myCall(obj2) // obj2
}
