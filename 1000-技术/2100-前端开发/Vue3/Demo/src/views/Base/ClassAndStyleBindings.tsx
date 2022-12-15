import { defineComponent } from "vue";

export default defineComponent({
  name: "ClassAndStyleBindings",
  meta: {
    title: "Class与Style绑定",
  },
  setup() {

    // class绑定对象
    let isActive = $ref(true)
    return () => (
      <div>
        <div class={{ btn: true, "btn-accent": isActive }} onClick={
          () => {
            isActive = !isActive
          }
        }>class绑定对象</div>
      </div>
    );
  },
})
