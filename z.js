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

// 过滤隐藏文件和前缀
function filter(tree, prefixs = ['.', '_']) {
  for (let key in tree) {
    if (prefixs) {
      for (let prefix of prefixs) {
        if (key.startsWith(prefix)) {
          delete tree[key]
        } else if (typeof tree[key] === 'object') {
          filter(tree[key])
        }
      }
    }
  }
}

filter(tree)


// 输出
console.log(JSON.stringify(tree, null, 2));
console.log(tree);
