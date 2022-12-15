import { defineComponent, onBeforeMount, onMounted } from "vue";

interface LifecycleHooksProps {
  msg: string;
}

export default defineComponent({
  name: "LifecycleHooks",
  meta: {
    title: "生命周期钩子",
  },
  setup() {
    // 实例挂载之前
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    // 实例挂载之后
    onMounted(() => {
      console.log("created");
    });
    // 实例卸载之前
    beforeUnmount(() => {
      console.log("beforeUnmount");
    });



    return () => (
      <div>

      </div>
    );
  },
})
