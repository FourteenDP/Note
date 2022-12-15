import { ReactiveVariable } from "vue/macros"

export function unlock<T>(reactiveVariable: ReactiveVariable<T>) {
  if (Array.isArray(reactiveVariable)) {
    return [...reactiveVariable]
  }
  if (typeof reactiveVariable === 'object') {
    return { ...reactiveVariable }
  }
};
