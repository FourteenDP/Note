import { createPinia } from 'pinia'

export const pinia = createPinia()

// 休眠
export async function sleep(ms: number) {
   await setTimeout(() => {
      return true
   }, ms)
}
