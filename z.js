const fs = require('fs')
const path = require('path')

function travel(dir, ext, callback) {
  fs.readdirSync(dir).forEach(function (file) {
    var pathname = path.join(dir, file)
    if (fs.statSync(pathname).isDirectory()) {
      travel(pathname, ext, callback)
    } else {
      if (path.extname(pathname) === ext) {
        callback(pathname)
      }
    }
  })
}

let tree = {}

travel('./', '.md', function (pathname) {
  // 用\分割路径，然后用转成tree
  let arr = pathname.split('\\')
  let temp = tree
  arr.forEach((item, index) => {
    if (index === arr.length - 1) {
      temp[item] = true
    } else {
      if (!temp[item]) {
        temp[item] = {}
      }
      temp = temp[item]
    }
  })
})

// 排序 tree 优先级 文件夹 > 文件 > 符号 > 数字 > 字母
function sortTree(tree) {
  let temp = {}
  let keys = Object.keys(tree)
  keys.sort((a, b) => {
    if (tree[a] === true && tree[b] !== true) {
      return 1
    } else if (tree[a] !== true && tree[b] === true) {
      return -1
    } else {
      return 0
    }
  })
  keys.forEach(item => {
    if (tree[item] === true) {
      temp[item] = true
    } else {
      temp[item] = sortTree(tree[item])
    }
  })
  return temp
}

tree = sortTree(tree)

console.log(tree);
