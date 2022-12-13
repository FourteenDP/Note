import { createPinia } from 'pinia'

export const pinia = createPinia()

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function fetchUser() {
  await delay(1000)
  return {
    name: 'John Doe',
  }
}
