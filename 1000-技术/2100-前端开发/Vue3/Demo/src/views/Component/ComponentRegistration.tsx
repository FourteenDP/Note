import { defineComponent } from "vue";

export default defineComponent({
  name: "ComponentRegistration",
  meta: {
    title: "组件注册",
  },
  setup() {
    return () => (
      <div>
        <h1>组件注册</h1>
        <p>组件注册</p>
      </div>
    );
  },
});
