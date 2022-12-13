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
        {/* tailwind css 定位上下局中*/}
        <div class="fixed left-0 bg-cyan-800 top-1/2">
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
