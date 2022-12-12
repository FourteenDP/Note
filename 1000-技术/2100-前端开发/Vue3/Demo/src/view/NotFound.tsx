import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFound",
  setup() {
    return () => (
      <div class="not-found">
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    );
  },
});
