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

// 用\分割路径，然后用转成tree
function pathToTree(pathname) {
  let arr = pathname.split('\\')
  let temp = {}
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
  return temp
}

travel('./', '.md', function (pathname) {
  console.log(pathToTree(pathname))
})
