import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";

console.log(RouterLink, RouterView);


export default defineComponent({
  name: "Layout",
  setup() {
    return () => (
      <div class="layou">
        <p>
          <router-link to="/">首页</router-link>
          <router-link to="/about">关于</router-link>
        </p>
        <router-view />
      </div>
    );
  },
});
