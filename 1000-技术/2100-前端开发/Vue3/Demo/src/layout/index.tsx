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

    return () => (
      <div class="layou">
        <div class="btm-nav">
          {menuRoutes.map(route => {
            return (
              <button class="menu-item" onClick={() => router.push(route.path)}>
                <span class="btm-nav-label">{route.meta?.title}</span>
              </button>
            )
          })}
        </div>
        <router-view />
      </div>
    );
  },
});
