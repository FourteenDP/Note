import { defineComponent, reactive, ref } from "vue";


export default defineComponent({
  name: "Reactivity",
  meta: {
    title: "响应式",
  },
  setup() {
    // reactive() 方法返回一个响应式的代理对象
    const state = reactive({ count: 0 })
    function increment() {
      state.count++
    }

    // ref() 方法返回一个响应式的代理对象
    const count = ref(0)

    return () => (
      <div>
        <div class="text-xl">state: {state.count}</div>
        <button class="btn btn-primary" onClick={increment}>+1</button>
        <div class="text-xl">ref: {count.value}</div>
        <button class="btn btn-primary" onClick={() => count.value++}>+1</button>
      </div>
    );
  },
});
