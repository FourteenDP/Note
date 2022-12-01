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

// 柯里化的几种应用
// 1. 参数复用
// 2. 提前返回
// 3. 延迟计算
// 4. 偏函数

// 1. 参数复用
function check(reg, text) {
  return reg.test(text);
}
let checkTel = check.bind(null, /^1\d{10}$/);
let checkEmail = check.bind(null, /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);
console.log(checkTel("12345678901")); // true
console.log(checkEmail("")); // false
