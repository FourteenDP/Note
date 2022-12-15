import { defineComponent, reactive } from "vue";


export default defineComponent({
  name: "Reactivity",
  meta: {
    title: "响应式",
  },
  setup() {
    const state = reactive({ count: 0 })
    function increment() {
      state.count++
    }


    return () => (
      <div>
        <div class="text-xl">count: {state.count}</div>
        <button class="btn btn-primary" onClick={increment}>+1</button>
      </div>
    );
  },
});
