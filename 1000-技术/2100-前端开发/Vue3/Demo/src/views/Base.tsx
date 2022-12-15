import { defineComponent } from "vue"
import { RouterView } from "vue-router"

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
    console.log(a, b);
    return () => (
      <div class="home">
        <RouterView></RouterView>
      </div>
    )
  }
})
