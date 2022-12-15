import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "Reactivity",
  meta: {
    title: "响应式",
  },
  setup() {
    const count = ref(0);
    const double = computed(() => count.value * 2);
    const increment = () => {
      count.value++;
    }

    return () => (
      <div>
        <p>count is: {count}</p>
        <p>double is: {double}</p>
        <button onClick={increment}>increment</button>
      </div>
    );
  },
});
