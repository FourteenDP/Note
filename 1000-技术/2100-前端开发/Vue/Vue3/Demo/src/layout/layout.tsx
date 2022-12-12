import { defineComponent } from "vue";

export default defineComponent({
  name: "Layout",
  setup() {
    return () => (
      <div class="layout">
        <router-view />
      </div>
    );
  },
});
