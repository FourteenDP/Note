import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Component',
  title: '',
  setup() {
    return () => (
      <div class="about">
        About
      </div>
    )
  }
})
