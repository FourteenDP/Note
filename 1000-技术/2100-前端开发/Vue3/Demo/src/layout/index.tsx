import { defineComponent, } from "vue";
import { $ref } from "vue/macros"
import { useRouter } from 'vue-router'
type RouteRecordNormalized = import('vue-router').RouteRecordNormalized

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
              currentRoutePath === route.path ? "text-blue-500" : "text-gray-500",
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
        <div class="menu fixed bottom-1.5 left-1/2 -translate-x-1/2 bg-white flex flex-row p-2 rounded-lg">
          {getMenuItem()}
        </div>
        <router-view />
      </div>
    );
  },
});
