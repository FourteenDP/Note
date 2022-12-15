import { createRouter, createWebHistory } from 'vue-router'
type RouteRecordRaw = import('vue-router').RouteRecordRaw

// 自动导入路由
const modules = import.meta.glob('../views/**/*.tsx')

const addRoutes = Object.keys(modules).map(async (key) => {
  const path = key.replace('../views', '').replace('.tsx', '')
  const name = path.replace('/', '')
  const component = modules[key]
  const meta = (await component() as any).default.meta

  return {
    path,
    name,
    meta,
    component,
  }
})


export const resRoutes = await Promise.all(addRoutes)

function resRoutesToTree() {
  const resRoutesTree: any = []
  resRoutes.forEach((item) => {
    const path = item.path
    const name = item.name
    const meta = item.meta
    const component = item.component
    const pathArr = path.split('/')
    const pathArrLen = pathArr.length
    if (pathArrLen === 2) {
      resRoutesTree.push({
        path,
        name,
        meta,
        component,
      })
    }
  })
  return resRoutesTree
}

export const resRoutesTree = resRoutesToTree()
console.log('resRoutesTree', resRoutesTree);


export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout'),
    children: [
      ...resRoutes,
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
