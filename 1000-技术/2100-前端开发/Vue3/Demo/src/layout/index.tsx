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
        <div class="fixed bottom-1.5 left-1/2 bg-opacity-75 bg-slate-900 px-2 py-3 rounded-xl text-white flex">
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
