import { defineComponent } from "vue";

export default defineComponent({
  name: "Forms",
  meta: {
    title: "表单输入绑定",
  },
  setup() {
    let message = $ref("Hello Vue3");
    let message2 = $ref("Hello Vue3");
    return () => (
      <div>
        <div class="text-xl">message: {message}</div>
        {/* 完整写法 */}
        <input value={message} onInput={
          (e: any) => {
            console.log(e);

            message = e.target.value
          }
        } type="text" placeholder="请输入内容" />
        {/* 简写JSX不支持简写 */}
        {/* <input v-mode={message2} type="text" placeholder="请输入内容" /> */}
      </div>
    );

  },
})
