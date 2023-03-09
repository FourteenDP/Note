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

    return function (...args: any[]) {
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
