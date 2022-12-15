import { createRouter, createWebHistory } from 'vue-router'
type RouteRecordRaw = import('vue-router').RouteRecordRaw

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
