import { defineComponent } from "vue";

export default defineComponent({
  name: "Reactivity",
  meta: {
    title: "Reactivity",
    showMenu: true,
    icon: "🔥",
  },
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
