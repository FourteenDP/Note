import { defineComponent, nextTick, onMounted, ref } from "vue";
export default defineComponent({
  name: "TemplateRefs",
  meta: {
    title: "模板引用",
  },
  setup() {
    // 声明一个 ref 来存放该元素的引用
    // 必须和模板里的 ref 同名
    const inputRef = ref<HTMLInputElement | null>(null)

    onMounted(() => {
      // 在 mounted 时，获取该元素的引用
      // 通过 ref.value 获取
      nextTick(() => {
        console.log(inputRef);
      })
    })
    return () => (
      <div>
        <input ref="inputRef" />
      </div>
    )
  }
})
