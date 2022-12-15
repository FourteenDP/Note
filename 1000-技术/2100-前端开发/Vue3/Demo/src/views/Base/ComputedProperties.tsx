import { defineComponent } from "vue";

export default defineComponent({
  name: "ComputedProperties",
  meta: {
    title: "计算属性",
  },
  setup() {
    const state = $ref([
      { name: "Alice", age: 20 },
      { name: "Bob", age: 30 },
      { name: "Carol", age: 40 },
    ])
    // 平均年龄
    const averageAge = $computed(() => {
      return state.reduce((sum, person) => sum + person.age, 0) / state.length
    })

    console.log(averageAge);

    return () => (
      <div>
        <div class="text-xl">计算属性</div>
      </div>
    );
  },
})
