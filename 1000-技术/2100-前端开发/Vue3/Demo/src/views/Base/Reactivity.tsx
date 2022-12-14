import { defineComponent } from "vue";

export default defineComponent({
  name: "Reactivity",
  setup() {
    let count = $ref(0);
    const double = $computed(() => count * 2);
    const increment = () => {
      count++;
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
