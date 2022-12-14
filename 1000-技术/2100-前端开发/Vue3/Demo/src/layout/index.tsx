import { defineComponent, } from "vue";
import { useRouter } from 'vue-router'

export default defineComponent({
  name: "Layout",
  setup() {
    const router = useRouter()
    const routes = router.getRoutes()

    const menuRoutes = routes.filter(route => {
      return route.meta?.showMenu
    })
    let currentRoutePath = $ref(router.currentRoute.value.path)
    router.afterEach((to) => {
      currentRoutePath = to.path
    })

    const getMenuItem = () => {
      return menuRoutes.map(route => {
        return (
          <router-link
            to={route.path}
            class={[
              "flex flex-col items-center justify-center px-2",
              currentRoutePath === route.path ? " text-cyan-400" : "text-white",
            ]}
          >
            <span class="text-2xl">{route.meta?.icon}</span>
            <span class="text-xs">{route.meta?.title}</span>
          </router-link>
        );
      })
    }
    return () => (
      <div class="layou">
        <div class="menu bg-primary textw flex flex-row p-2">
          {getMenuItem()}
        </div>
        <router-view />
      </div>
    );
  },
});
