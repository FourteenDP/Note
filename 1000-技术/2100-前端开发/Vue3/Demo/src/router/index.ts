import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout'),
    children: [],
  },
]
const files = import.meta.glob('../views/**/*.tsx')

const filesToTree = (files: any) => {
  const tree: any = {}
  const keys = Object.keys(files)
  keys.forEach((key) => {
    const path = key.replace('../views', '').replace('.tsx', '')
    const pathArr = path.split('/')
    pathArr.shift()
    let temp = tree
    pathArr.forEach((item, index) => {
      if (index === pathArr.length - 1) {
        temp[item] = files[key]
      } else {
        if (!temp[item]) {
          temp[item] = {}
        }
        temp = temp[item]
      }
    })
  })
  return tree
}

const tree = filesToTree(files)


const treeToRoutes = (tree: any, parentPath = '') => {
  const keys = Object.keys(tree)
  keys.forEach((key) => {
    if (typeof tree[key] === 'function') {
      routes[0].children?.push({
        path: parentPath + '/' + key,
        name: key,
        component: tree[key],
      })
    } else {
      treeToRoutes(tree[key], parentPath + '/' + key)
    }
  })
}

treeToRoutes(tree)

console.log(routes);

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
