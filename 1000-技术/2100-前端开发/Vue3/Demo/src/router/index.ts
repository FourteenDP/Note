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
Object.keys(files).forEach(async (key) => {
  const path = key.replace('../views', '').replace('.tsx', '')
  const name = path.replace('/', '').split('/')
  const meta = ((await files[key]()) as any).default.meta as RouteMeta
  if (name.length === 1) {
    routes[0].children?.push({
      path,
      name: name[0],
      meta,
      component: files[key],
      children: [],
    })
  } else {
    const parent = routes[0].children?.find((item) => item.name === name[0])
    if (parent) {
      parent.children?.push({
        path,
        name: name[1],
        meta,
        component: files[key],
      })
    }
  }
})

console.log(routes);




const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
