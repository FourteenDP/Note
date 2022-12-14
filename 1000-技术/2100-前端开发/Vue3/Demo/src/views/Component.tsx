import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Component',
  meta: {
    title: '深入组件',
    showMenu: true,
    icon: '🏠',
  },
  setup() {
    return () => (
      <div class="about">
        About
      </div>
    )
  }
})
