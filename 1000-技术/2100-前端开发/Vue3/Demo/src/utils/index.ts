type RouteRecordRaw = import('vue-router').RouteRecordRaw

type RouteRecordRawPromise = () => Promise<{ default: RouteRecordRaw }>

interface RoutesTree {
  [key: string]: RoutesTree | (RouteRecordRawPromise)
}
export function filesToTree(files: any) {
  const tree:RoutesTree = {}
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

export async function treeToRoutes(tree: RoutesTree, parentPath = '') {
  let temp = []
  const keys = Object.keys(tree)
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const module: RouteRecordRaw = (await tree[key]()).default
    const path = parentPath + '/' + key
    if (typeof tree[key] === 'function') {
      temp.push({
        path,
        name: key,
        meta: module.meta,
        component: tree[key],
      })
    } else {
      temp = temp.concat(treeToRoutes(tree[key], path))
    }
  }
  return temp
}
