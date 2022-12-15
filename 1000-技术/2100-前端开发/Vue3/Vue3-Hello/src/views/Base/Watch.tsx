import { defineComponent, reactive, ref, watch, watchEffect, watchPostEffect } from "vue";

export default defineComponent({
  name: "Watch",
  meta: {
    title: "监听器",
  },
  setup() {
    let count = ref(0)
    const increment = () => {
      count.value++
    }
    // 监听ref count的变化
    watch(count, (newVal, oldVal) => {
      console.log(`监听ref: ${oldVal} -> ${newVal}`)
    })

    // 监听reactive count的变化
    const state = reactive({ count: 0 })
    watch(() => state.count, (newVal, oldVal) => {
      console.log(`监听reactive: ${oldVal} -> ${newVal}`)
    })
    // 监听多个值
    watch([() => state.count, count], ([newVal1, newVal2], [oldVal1, oldVal2]) => {
      console.log(`监听多个值1: ${oldVal1} -> ${newVal1}`)
      console.log(`监听多个值2: ${oldVal2} -> ${newVal2}`)
    })

    // 深度监听
    const deepState = reactive({ count: 0, obj: { a: 1 } })
    watch(deepState, (newVal, oldVal) => {
      console.log(`深度监听: ${oldVal} -> ${newVal}`)
    }, { deep: true })

    // getter 监听
    const getterState = reactive({ count: 0 })
    watch(() => getterState.count + 10, (newVal, oldVal) => {
      console.log(`getter 监听: ${oldVal} -> ${newVal}`)
    })

    // 立即执行
    watch(count, (newVal, oldVal) => {
      console.log(`立即执行: ${oldVal} -> ${newVal}`)
    }, { immediate: true })

    // 后置回调DOM更新之后执行
    watch(count, (newVal, oldVal) => {
      console.log(`后置回调DOM更新之后执行: ${oldVal} -> ${newVal}`)
    }, { flush: 'post' })

    // 同步回调DOM更新之前执行
    watch(count, (newVal, oldVal) => {
      console.log(`同步回调DOM更新之前执行: ${oldVal} -> ${newVal}`)
    }, { flush: 'sync' })

    // 异步回调DOM更新之前执行
    watch(count, (newVal, oldVal) => {
      console.log(`异步回调DOM更新之前执行: ${oldVal} -> ${newVal}`)
    }, { flush: 'pre' })

    // watchEffect
    watchEffect(() => {
      console.log(`watchEffect: ${count.value} ${state.count}`)
    })

    // watchPostEffect
    watchEffect(() => {
      console.log(`watchPostEffect: ${count.value} ${state.count}`)
    }, { flush: 'post' })
    watchPostEffect(() => {
      console.log(`watchPostEffect: ${count.value} ${state.count}`)
    })

    // 结束监听
    const stop = watch(count, (newVal, oldVal) => {
      console.log(`结束监听: ${oldVal} -> ${newVal}`)
    })
    stop()

    return () => (
      <div>
        <div class="text-xl">count: {count.value}</div>
        <button class="btn btn-primary" onClick={increment}>+1</button>
        <div class="text-xl">state.count: {state.count}</div>
        <button class="btn btn-primary" onClick={() => state.count++}>+1</button>
        <div class="text-xl">deepState.count: {deepState.count}</div>
        <button class="btn btn-primary" onClick={() => deepState.count++}>+1</button>
        <div class="text-xl">deepState.obj.a: {deepState.obj.a}</div>
        <button class="btn btn-primary" onClick={() => deepState.obj.a++}>+1</button>
        <div class="text-xl">getterState.count: {getterState.count}</div>
        <button class="btn btn-primary" onClick={() => getterState.count++}>+1</button>
      </div>
    );
  },
})
