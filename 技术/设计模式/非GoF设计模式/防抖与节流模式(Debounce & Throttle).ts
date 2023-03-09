namespace DesignPatterns.DebounceAndThrottle {
  // 防抖与节流模式

  /**
   * 防抖 (debounce) 模式： 在一定时间内，只执行一次
   * @param fn 要执行的函数
   * @param delay 延迟时间
   * @param immediate 是否立即执行
   * @example
   * const fn = debounce(() => console.log('debounce'), 1000)
   */
  export function debounce(fn: Function, delay: number, immediate: boolean = false) {
    // 定时器
    let timer: number | null = null

    // 返回一个函数
    // 这个函数会在一个时间区间结束后的 delay 毫秒时执行 fn 函数
    // 如果这个时间区间内又被调用，则会重新计时
    // 也就是说，如果持续触发，就不会执行 fn，只有停下来触发后，才会执行 fn
    // 如果 immediate 为 true，则会在开始边界触发
    return function (...args: any[]) {
      // 如果已经设定过定时器了就清空上一次的定时器-重新开始
      if (timer) clearTimeout(timer)

      if (immediate) {
        const callNow = !timer
        timer = setTimeout(() => {
          timer = null
        }, delay)
        if (callNow) fn.apply(this, args)
      } else {
        timer = setTimeout(() => {
          fn.apply(this, args)
        }, delay)
      }
    }
  }
}
