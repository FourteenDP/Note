namespace Curry {
  /**
   * 函数柯里化
   * @param        {Function} fn
   * @param        {Array} args
   * @return       {Function}
  * @example: curry(add, 1, 2, 3, 4, 5) || curry(add, 1, 2) (3, 4, 5) || curry(add, 1) (2) (3) (4) (5)
  * @note: **函数柯里化**是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。
   */
  function curry<T>(fn: Function, ...args: T[]): Function {
    return args.length >= fn.length
      ? fn(...args)
      : (..._args: T[]) => curry(fn, ...args, ..._args);
  }

  function add(a: number, b: number): number {
    return a + b;
  }

  console.log(curry<number>(add, 1, 2, 3, 4, 5));
  console.log(curry<number>(add, 1, 2)(3, 4, 5));
  console.log(curry<number>(add, 1)(2)(3)(4)(5));
}
