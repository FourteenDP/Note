import { defineComponent } from "vue"
import { RouterView } from "vue-router"
import { ReactiveVariable } from "vue/macros";
function unlock<T>(reactiveVariable: ReactiveVariable<T>) {
  // 判断reactiveVariable 是数组还是对象
  if (Array.isArray(reactiveVariable)) {
    return reactiveVariable
  } else {
    return [...reactiveVariable]
  }
};
export default defineComponent({
  name: 'Base',
  meta: {
    title: '基础',
    showMenu: true,
    icon: '🏠',
  },
  setup() {
    const a = $ref(1)
    const b = $ref({
      name: 'b'
    })
    const c = $ref([1, 2, 3])
    console.log(a, b);
    console.log(unlock(a), unlock(b), unlock(c));
    return () => (
      <div class="home">
        <RouterView></RouterView>
      </div>
    )
  }
})
