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
        <div class="text-xl">class绑定对象</div>
        <div class="text-xl" class={{ active: true }}>class绑定对象</div>
        <div class="text-xl" class={{ active: false }}>class绑定对象</div>
      </div>
    );
  },
})
