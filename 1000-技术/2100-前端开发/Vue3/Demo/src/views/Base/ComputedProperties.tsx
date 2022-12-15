import { defineComponent } from "vue";

export default defineComponent({
  name: "ComputedProperties",
  meta: {
    title: "计算属性",
  },
  setup() {
    const state = $ref{
      count: 0,
    }
    return () => (
      <div>
        <div class="text-xl">计算属性</div>
      </div>
    );
  },
})
