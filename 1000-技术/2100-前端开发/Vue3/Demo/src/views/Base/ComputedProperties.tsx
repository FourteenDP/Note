import { defineComponent } from "vue";

export default defineComponent({
  name: "ComputedProperties",
  meta: {
    title: "计算属性",
  },
  setup() {

    return () => (
      <div>
        <div class="text-xl">计算属性</div>
      </div>
    );
  },
})
