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
  export function debounce(fn: Function, delay: number = 1000, immediate: boolean = false) {
    // 通过闭包保存定时器
    let timer: number | null = null
    return function (...args: any[]) {
      // 重置定时器
      if (timer) clearTimeout(timer)
      // 立即执行
      if (immediate) {
        // 如果定时器已存在，则不执行
        if (!timer) fn.apply(this, args)
        // 重置定时器
        timer = setTimeout(() => (timer = null), delay)
      } else {
        // 重置定时器
        timer = setTimeout(() => fn.apply(this, args), delay)
      }
    }
  }

  /**
   * 节流 (throttle) 模式： 在一定时间内，只执行一次
   * @param fn 要执行的函数
   * @param delay 延迟时间
   * @example
   * const fn = throttle(() => console.log('throttle'), 1000)
   */
  export function throttle(fn: Function, delay: number) {
    // 通过闭包保存定时器
    let timer: number | null = null
    return function (...args: any[]) {
      // 如果定时器已存在，则不执行
      if (!timer) {
        timer = setTimeout(() => {
          fn.apply(this, args)
          // 重置定时器
          timer = null
        }, delay)
      }
    }
  }
}
