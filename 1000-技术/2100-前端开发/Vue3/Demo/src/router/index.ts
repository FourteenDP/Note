import { createRouter, createWebHistory } from 'vue-router'
type RouteRecordRaw = import('vue-router').RouteRecordRaw

// 自动导入路由
const modules = import.meta.glob('../views/**/*.tsx')

const addRoutes = Object.keys(modules).map((key) => {
  const path = key.replace('../views', '').replace('.tsx', '')
  const name = path.replace('/', '')
  return {
    path,
    name,
    meta: (modules[key] as any).default.meta,
    component: () => import(`../views${path}`),
  }
})


console.log(addRoutes);


export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout'),
    children: [
      {
        path: '/Base',
        name: 'Base',
        meta: (await import('@/views/Base')).default.meta,
        component: () => import('@/views/Base'),
        children: [
          {
            path: '/Base/Reactivity',
            name: 'Reactivity',
            meta: (await import('@/views/Base/Reactivity')).default.meta,
            component: () => import('@/views/Base/Reactivity'),
          },
        ]
      },
      {
        path: '/Component',
        name: 'Component',
        meta: (await import('@/views/Component')).default.meta,
        component: () => import('@/views/Component'),
        children: [
          {
            path: '/Component/ComponentRegistration',
            name: 'ComponentRegistration',
            meta: (await import('@/views/Component/ComponentRegistration')).default.meta,
            component: () => import('@/views/Component/ComponentRegistration'),
          },
        ]
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
