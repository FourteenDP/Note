import { defineComponent, ref } from "vue";
import { useRouter } from 'vue-router'

export default defineComponent({
  name: "Layout",
  setup() {
    const router = useRouter()
    const routes = router.getRoutes()
    const menuRoutes = routes.filter(route => {
      return route.meta?.showMenu
    })

    const currentRoutePath = ref(router.currentRoute.value.path)



    // 监听路由变化
    router.afterEach((to, from) => {
      currentRoutePath.value = to.path
    })


    const menu = menuRoutes.map(route => {
      return (
        <div
          class={`menu-item px-1.5 ${route.path === currentRoutePath.value ? 'text-stone-800' : 'text-stone-400'}`}
          onClick={() => router.push(route.path)}>
          {route.meta?.title}
        </div>
      )
    })


    return () => (
      <div class="layou">
        <div class="menu fixed bottom-1.5 left-1/2 -translate-x-1/2 bg-white flex flex-row p-2 rounded-lg">
          {menu}
        </div>
        <router-view />
      </div>
    );
  },
});
