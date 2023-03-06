namespace Curry {
  /**
   * @description : 函数柯里化
   * @param        {Function} fn
   * @param        {Array} args
   * @return       {Function}
   * @example     : curry(add, 1, 2, 3, 4, 5) || curry(add, 1, 2)(3, 4, 5) || curry(add, 1)(2)(3)(4)(5)
   * @note        : 柯里化是将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
   */
  function curry<T>(fn: Function, ...args: T[]): Function {
    return args.length >= fn.length
      ? fn(...args)
F: (..._args: T[]) => curry(fn, ...args, ..._args);
  }

  function add(a: number, b: number): number {
    return a + b;
  }

  console.log(curry<number>(add, 1, 2, 3, 4, 5));
  console.log(curry<number>(add, 1, 2)(3, 4, 5));
  console.log(curry<number>(add, 1)(2)(3)(4)(5));
}
