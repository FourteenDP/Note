import { defineComponent } from "vue";

export default defineComponent({
  name: "Watch",
  meta: {
    title: "watch",
  },
  setup() {
    let count = $ref(0)
    const increment = () => {
      count++
    }

    return () => (
      <div>
        <div class="text-xl">count: {count}</div>
        <button class="btn btn-primary" onClick={increment}>+1</button>
      </div>
    );
  },
})
