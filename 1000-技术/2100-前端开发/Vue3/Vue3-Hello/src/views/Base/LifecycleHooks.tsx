import { defineComponent, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onRenderTracked, onRenderTriggered, onUnmounted, onUpdated } from "vue";

export default defineComponent({
  name: "LifecycleHooks",
  meta: {
    title: "生命周期钩子",
  },
  setup() {
    let count = $ref(0)
    const increment = () => {
      count++
    }
    // 实例挂载之前
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    // 实例挂载之后
    onMounted(() => {
      console.log("created");
    });
    // 实例卸载之前
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    // 实例卸载之后
    onUnmounted(() => {
      console.log("onUnmounted");
    });
    // 数据更新之前
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    // 数据更新之后
    onUpdated(() => {
      console.log("onUpdated");
    });
    // 跟踪响应式数据的变化
    onRenderTracked((event) => {
      console.log("onRenderTracked", event);
    });
    // 触发响应式数据的变化
    onRenderTriggered((event) => {
      console.log("onRenderTriggered", event);
    });
    return () => (
      <div>
        <div class="text-xl">count: {count}</div>
        <button class="btn btn-primary" onClick={increment}>+1</button>
      </div>
    );
  },
})
