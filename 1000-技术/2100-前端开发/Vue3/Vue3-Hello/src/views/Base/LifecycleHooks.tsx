import { defineComponent, onBeforeMount } from "vue";

interface LifecycleHooksProps {
  msg: string;
}

export default defineComponent({
  name: "LifecycleHooks",
  meta: {
    title: "生命周期钩子",
  },
  setup() {
    const lifecycleHooksMsgs: LifecycleHooksProps[] = $ref([]);

    onBeforeMount(() => {
      lifecycleHooksMsgs.push({ msg: "beforeCreate" });
    });


    return () => (
      <div>
        <ul>
          {lifecycleHooksMsgs.map((msg) => (
            <li>{msg}</li>
          ))}
        </ul>
      </div>
    );
  },
})
