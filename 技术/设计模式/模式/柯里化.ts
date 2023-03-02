namespace Curry {
  /**
   * @description : 柯里化
   * @param        {Function} fn
   * @param        {Array} args
   * @return       {Function}
   * @example     : curry(add, 1, 2, 3, 4, 5) || curry(add, 1, 2)(3, 4, 5) || curry(add, 1)(2)(3)(4)(5)
   * @note        : 柯里化是将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
   */
  function curry(fn: Function, ...args: any[]): Function {
    return args.length >= fn.length
      ? fn(...args)
      : (..._args) => curry(fn, ...args, ..._args);
  }

  // 测试
  function add(a, b, c, d, e) {
    return a + b + c + d + e;
  }

  console.log(curry(add, 1, 2, 3, 4, 5));
  console.log(curry(add, 1, 2)(3, 4, 5));
  console.log(curry(add, 1)(2)(3)(4)(5));
}
