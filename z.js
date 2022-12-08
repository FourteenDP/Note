const fs = require('fs')
const path = require('path')

const dir = path.join(__dirname)
const tree = {}

// 遍历目录
function walk(dir, tree) {
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      tree[file] = {}
      walk(filePath, tree[file])
    } else {
      tree[file] = filePath
    }
  })
}

walk(dir, tree)

// 过滤目录
function filter(tree, filter) {
  for (let key in tree) {
    if (filter(key)) {
      delete tree[key]
    } else if (typeof tree[key] === 'object') {
      filter(tree[key], filter)
    }
  }
}

filter(tree, file => {
  console.log(file);
  return file === 'node_modules' || file === 'package-lock.json'
})

// 输出
console.log(JSON.stringify(tree, null, 2));
console.log(tree);
