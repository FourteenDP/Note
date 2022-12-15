import { defineComponent, reactive, ref, watch } from "vue";

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
