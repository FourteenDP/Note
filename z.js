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

// 排序 tree 优先级 文件夹 > 文件 > 符号 > 数字 > 字母 > 其他
function sortTree(tree) {
  let keys = Object.keys(tree)
  keys.sort((a, b) => {
    if (tree[a] === true && tree[b] !== true) {
      return 1
    } else if (tree[a] !== true && tree[b] === true) {
      return -1
    } else if (tree[a] === true && tree[b] === true) {
      return a.localeCompare(b)
    } else {
      return a.localeCompare(b)
    }
  })
  let temp = {}
  keys.forEach((item) => {
    if (tree[item] !== true) {
      temp[item] = sortTree(tree[item])
    } else {
      temp[item] = true
    }
  })
  return temp
}

tree = sortTree(tree)

// 过滤匹配的文件夹和文件
function filterTree(tree, filter) {
  let keys = Object.keys(tree)
  let temp = {}
  keys.forEach((item) => {
    if (tree[item] !== true) {
      let res = filterTree(tree[item], filter)
      if (Object.keys(res).length > 0) {
        temp[item] = res
      }
    } else {
      if (filter.test(item)) {
        temp[item] = true
      }
    }
  })
  return temp
}

tree = filterTree(tree, /README/)

console.log(JSON.stringify(tree, null, 2));
console.log(tree);
