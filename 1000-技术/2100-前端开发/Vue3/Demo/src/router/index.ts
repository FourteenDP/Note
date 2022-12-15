import { createRouter, createWebHistory, RouteMeta, RouteRecordRaw } from 'vue-router'

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

// 自动导入路由
const files = import.meta.glob('../views/**/*.tsx')

routes[0].children?.forEach((item) => {
  Object.keys(files).forEach((key) => {
    const path = key.replace('../views', '').replace('.tsx', '')
    const name = path.replace('/', '').split('/')
    console.log(name);


  })
})

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
