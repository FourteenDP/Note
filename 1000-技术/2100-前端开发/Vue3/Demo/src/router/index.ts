import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'



export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/view/Login'),
  },
  {
    path: "/",
    name: "Layout",
    component: () => import("@/layout"),
    children: [
      {
        path: '/',
        name: 'Home',
        meta: {
          title: '首页',
          showMenu: true,
        },
        component: () => import('@/view/Home'),
      },
      {
        path: '/about',
        name: 'About',
        meta: {
          title: '关于',
          showMenu: true,
        },
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
