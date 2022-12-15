import { createRouter, createWebHistory } from 'vue-router'
type RouteRecordRaw = import('vue-router').RouteRecordRaw

const routes: RouteRecordRaw[] = [
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
          }
        ]
      },
      {
        path: '/Component',
        name: 'Component',
        meta: (await import('@/views/Component')).default.meta,
        component: () => import('@/views/Component'),
      },
    ],
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
