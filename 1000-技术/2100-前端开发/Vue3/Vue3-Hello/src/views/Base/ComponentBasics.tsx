import { defineComponent } from "vue";

export default defineComponent({
  name: 'ComponentBasics',
  meta: {
    title: '组件基础',
  },
  setup() {
    return () => <div>
      <A />
    </div>;
  },
});

const A = defineComponent({
  name: 'A',
  setup() {
    return () => <div>B</div>;
  },
});
