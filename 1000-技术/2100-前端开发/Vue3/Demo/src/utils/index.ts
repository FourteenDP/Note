import { ModuleNamespace } from "vite/types/hot";

type Files = Record<string, () => Promise<ModuleNamespace>>

export function filesToTree(files: Files) {
  const tree: Tree = {}
  const keys = Object.keys(files)
  keys.forEach((key) => {
    const path = key.replace('../views', '').replace('.tsx', '')
    const pathArr = path.split('/')

    pathArr.shift()
    let temp = tree
    console.log(pathArr);

    pathArr.forEach((item, index) => {
      console.log(index, pathArr.length);
      if (index === pathArr.length - 1) {
        temp[item] = files[key]
      } else {
        if (!temp[item]) {
          temp[item] = {}
        }
        temp = temp[item]
        console.log(temp);

      }
    })
  })
  console.log(tree);

  return tree
}

export async function treeToRoutes(tree: any, parentPath = '') {
  let temp: any[] = []
  const keys = Object.keys(tree)
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const module = (await tree[key]()).default
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
