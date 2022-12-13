import { defineComponent } from "vue";
import { useRouter } from 'vue-router'
import "./index.module.styl";
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
        <div class="menu fixed bottom-0 left-1/2">
          {menuRoutes.map(route => {
            return (
              <div class="menu-item" onClick={() => router.push(route.path)}>
                {route.meta?.title}
              </div>
            )
          })}
        </div>
        <router-view />
      </div>
    );
  },
});
