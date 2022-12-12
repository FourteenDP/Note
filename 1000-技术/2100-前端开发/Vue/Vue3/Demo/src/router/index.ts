import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'



const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Layout",
    component: () => import("@/layout"),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/view/Home'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/view/About'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/view/NotFound'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
