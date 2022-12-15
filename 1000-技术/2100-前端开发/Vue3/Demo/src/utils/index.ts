import { ReactiveVariable } from "vue/macros"

export function unlock(reactiveVariable: ReactiveVariable<unknown>) {
  if (Array.isArray(reactiveVariable)) {
    return [...reactiveVariable]
  }
  if (typeof reactiveVariable === 'object') {
    return { ...reactiveVariable }
  }
};
