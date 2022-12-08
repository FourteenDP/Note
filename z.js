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
  let dir = path.dirname(pathname)
  let file = path.basename(pathname)
  if (!tree[dir]) {
    tree[dir] = []
  }
  tree[dir].push(file)
})
