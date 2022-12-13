import { defineComponent } from "vue";
import { useRouter, RouteRecordNormalized } from 'vue-router'
export default defineComponent({
  name: "Layout",
  setup() {
    const router = useRouter()
    // 获取路由列表
    const routes = router.getRoutes()
    // 过滤出需要显示在菜单中的路由
    const menuRoutes = routes.filter(route => route.meta?.showMenu)
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
