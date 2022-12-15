import { defineComponent } from "vue";

export default defineComponent({
  name: "ClassAndStyleBindings",
  meta: {
    title: "Class与Style绑定",
  },
  setup() {

    // class绑定对象
    let isActive = $ref(true)

    const swapText = $computed(() => isActive ? "Active" : "Inactive")
    return () => (
      <div>
        <div class={{ btn: true, "btn-secondary": isActive }} onClick={
          () => {
            isActive = !isActive
          }
        }>{swapText}</div>
      </div>
    );
  },
})
