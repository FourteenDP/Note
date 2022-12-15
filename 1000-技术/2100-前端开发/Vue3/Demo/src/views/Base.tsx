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
    return () => (
      <div class="home">
        <h1>基础</h1>
        <RouterView></RouterView>
      </div>
    )
  }
})
