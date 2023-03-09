namespace DesignPatterns.DebounceAndThrottle {
  /**
   * 防抖: 一段时间内多次触发同一事件, 只执行最后一次
   * @param {Function} fn 要执行的函数
   * @param {number} delay 延迟时间
   * @param {boolean} immediate 是否立即执行
   * @returns {Function} 返回一个新的函数
   * @example
   * const fn = () => console.log('fn') // 要执行的函数
   * const debounceFn = debounce(fn, 1000) // 一秒内多次触发, 只执行最后一次
   * window.addEventListener('scroll', debounceFn)
   */
  export function debounce(fn: Function, delay: number, immediate: boolean = false) {
    let timer: number | null = null
    return function (...args: any[]) {
      if (timer) clearTimeout(timer)
      if (immediate) {
        if (!timer) fn.apply(this, args)
        timer = setTimeout(() => { timer = null }, delay)
      } else {
        timer = setTimeout(() => {
          fn.apply(this, args)
        }, delay)
      }
    }
  }
}
