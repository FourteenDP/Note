import { defineComponent } from "vue";

export default defineComponent({
  name: "Layout",
  setup() {
    return () => (
      <div class="layout bg-red-600">
        <p>
          <router-link to="/">首页</router-link>
          <router-link to="/about">关于</router-link>
        </p>
        <router-view />
      </div>
    );
  },
});
