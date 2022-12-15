import { defineComponent } from "vue";

export default defineComponent({
  name: "ClassAndStyleBindings",
  meta: {
    title: "Class与Style绑定",
  },
  setup() {

    return () => (
      <div>
        <h2>Class绑定</h2>
        <div class={{ active: false, textXl: true }}>class绑定对象</div>
      </div>
    );
  },
})
