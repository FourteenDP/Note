import { ReactiveVariable } from "vue/macros"

export function unlock(reactiveVariable: ReactiveVariable<unknown>) {
  if (typeof reactiveVariable === 'array') {
    return [...reactiveVariable]
  }
  if (typeof reactiveVariable === 'object') {
    return { ...reactiveVariable }
  }
};
