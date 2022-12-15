import { defineComponent } from "vue";

export default defineComponent({
  name: "Forms",
  meta: {
    title: "表单输入绑定",
  },
  setup() {
    const message = $ref("Hello Vue3");
    return () => (
      <div>
        <div class="text-xl">message: {message}</div>
        {/* 简写 */}
        <input v-mode={message} type="text" placeholder="请输入内容" />
      </div>
    );

  },
})
