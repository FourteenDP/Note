interface Function {
  myCall(context: any, ...args: any[]): any
  apply(context: any, args: any[]): any
  bind(context: any, ...args: any[]): any
}

// 实现call方法
Function.prototype.myCall = function (context: any, ...args: any[]) {
  // 判断是否为函数调用
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  // 判断context是否为null或undefined (null和undefined都会被转换成window)
  context = context || globalThis
  context.fn = this as any
  const result = context.fn(...args)
  delete context.fn
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
