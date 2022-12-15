import { defineComponent, watch } from "vue";

export default defineComponent({
  name: "Watch",
  meta: {
    title: "监听器",
  },
  setup() {
    let count = $ref(0)
    const increment = () => {
      count++
    }
    watch(count, async (nV, oV) => {
      console.log("count变化了", nV, oV);
    })

    return () => (
      <div>
        <div class="text-xl">count: {count}</div>
        <button class="btn btn-primary" onClick={increment}>+1</button>
      </div>
    );
  },
})
