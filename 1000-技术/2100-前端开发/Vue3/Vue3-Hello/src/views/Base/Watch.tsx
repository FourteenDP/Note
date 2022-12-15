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
      console.log(`count changed: ${oldVal} -> ${newVal}`)
    })

    // 监听reactive count的变化
    const state = reactive({ count: 0 })
    watch(() => state.count, (newVal, oldVal) => {
      console.log(`state.count changed: ${oldVal} -> ${newVal}`)
    })
    // 监听多个值
    watch([() => state.count, count], ([newVal1, newVal2], [oldVal1, oldVal2]) => {
      console.log(`state.count changed: ${oldVal1} -> ${newVal1}`)
      console.log(`count changed: ${oldVal2} -> ${newVal2}`)
    })

    return () => (
      <div>
        <div class="text-xl">count: {count.value}</div>
        <button class="btn btn-primary" onClick={increment}>+1</button>
        <div class="text-xl">state.count: {state.count}</div>
        <button class="btn btn-primary" onClick={() => state.count++}>+1</button>
      </div>
    );
  },
})
