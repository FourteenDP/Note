const fs = require('fs')
const path = require('path')

/**
 * 文件夹遍历方法
 * @param {string} dir
 * @param {string} ext
 * @param {Array} fileList
 * @param {function} callback
 * @returns {void}
 */
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
      temp[item] = null
    } else {
      if (!temp[item]) {
        temp[item] = {}
      }
      temp = temp[item]
    }
  })
})

console.log(tree)
