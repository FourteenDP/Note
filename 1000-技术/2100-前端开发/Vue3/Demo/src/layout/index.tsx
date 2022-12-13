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
        <router-view />
      </div>
    );
  },
});
