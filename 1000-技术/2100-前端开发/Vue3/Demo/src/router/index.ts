import { createRouter, createWebHistory, RouteMeta, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout'),
    children: [],
  },
]

// 自动导入路由
const files = import.meta.glob('../views/**/*.tsx')
Object.keys(files).forEach((key) => {
  const path = key.replace('../views', '').replace('.tsx', '')
  const name = path.replace('/', '').split('/')
  if (name.length === 1) {
    routes[0].children?.push({
      path,
      name: name[0],
      component: files[key],
    })
    console.log({
      path,
      name: name[0],
      component: files[key],
    });
  }
})


const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
