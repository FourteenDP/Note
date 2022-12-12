import { defineComponent } from "vue";

export default defineComponent({
  name: "Layout",
  setup() {
    return () => (
      <div class="layout">
        <p>
          <router-link to="/">Go to Home</router-link>
          <router-link to="/about">Go to About</router-link>
        </p>
        <router-view />

      </div>
    );
  },
});
