import { createRouter, createWebHistory } from 'vue-router'
import { filesToTree, treeToRoutes } from '@/utils'
type RouteRecordRaw = import('vue-router').RouteRecordRaw

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout'),
    children: [],
  },
]
const files = import.meta.glob('../views/**/*.tsx')
const tree = filesToTree(files)
console.log(tree);

routes[0].children = await treeToRoutes(tree)

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
