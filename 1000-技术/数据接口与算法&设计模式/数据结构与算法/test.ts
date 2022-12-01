// 什么是柯里化
// 柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
// 柯里化的实现
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
// 柯里化的应用
function sum(a, b, c) {
  return a + b + c;
}
let curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3)); // 6, 没有变化
console.log(curriedSum(1)(2, 3)); // 6, 变化了
console.log(curriedSum(1)(2)(3)); // 6, 变化了

// Path: 1000-技术\数据接口与算法&设计模式\数据结构与算法\test.ts
// 什么是偏函数
// 偏函数是指固定一个函数的一个或多个参数，然后产生一个新的函数的技术
// 偏函数的实现
function partial(fn, ...argsBound) {
  return function (...args) {
    return fn.call(this, ...argsBound, ...args);
  };
}
// 偏函数的应用
function mul(a, b) {
  return a * b;
}
let double = partial(mul, 2);
console.log(double(3)); // = mul(2, 3) = 6
console.log(double(4)); // = mul(2, 4) = 8
console.log(double(5)); // = mul(2, 5) = 10

// Path: 1000-技术\数据接口与算法&设计模式\数据结构与算法\test.ts
// 什么是递归
// 递归是指在函数的定义中使用函数自身的技术
// 递归的实现
function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(5)); // 120
// 递归的应用
function sumTo(n) {
  return n != 1 ? n + sumTo(n - 1) : 1;
}
console.log(sumTo(100)); // 5050
