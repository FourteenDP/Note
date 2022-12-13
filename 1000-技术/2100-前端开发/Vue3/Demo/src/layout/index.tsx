import { defineComponent } from "vue";
import { useRouter } from 'vue-router'
export default defineComponent({
  name: "Layout",
  setup() {
    const router = useRouter()
    const routes = router.getRoutes()
    const menuRoutes = routes.filter(route => {
      return route.meta?.showMenu
    })
    console.log(menuRoutes);


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
