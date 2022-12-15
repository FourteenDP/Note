import { defineComponent } from "vue"

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
      </div>
    )
  }
})
