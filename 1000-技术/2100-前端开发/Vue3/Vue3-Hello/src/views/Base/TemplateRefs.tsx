import { defineComponent, onMounted, ref } from "vue";
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
      console.log(inputRef.value); // { value: <input> }
    })

    // 列表渲染时，可以通过 ref 获取到每个元素的引用
    const list = $ref([1, 2, 3])
    const listRef = $ref<HTMLElement[]>([])
    onMounted(() => {
      console.log(listRef);
    })
    return () => (
      <div>
        <input ref={inputRef} placeholder="REF" />
        {
          list.map((item, index) => (
            // TODO: 为什么这样写不行？
            <div ref={(el) => {
              listRef.push(el)
            }}>{item}</div>
          ))
        }
      </div>
    )
  }
})
