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

// 排序 tree
function sortTree(tree) {
  let arr = Object.keys(tree)
  arr.sort()
  let temp = {}
  arr.forEach(item => {
    temp[item] = tree[item]
    if (typeof temp[item] === 'object') {
      temp[item] = sortTree(temp[item])
    }
    if (typeof temp[item] === 'boolean') {
      temp[item] = null
    }
  })
  return temp
}

tree = sortTree(tree)

console.log(tree);
