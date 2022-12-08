/*
 * @文件路径: \BuildDirectory.js
 * @创建时间: 2022-12-08 16:40:53
 * @更新时间: 2022-12-08 17:10:23
 */



const fs = require('fs')
const path = require('path')


// 生成文件树
function buildDirectoryTree(dir, tree = {}) {
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    if (file.startsWith('.') || file.startsWith('-') || file.startsWith('~')) return
    const filePath = path.join(dir, file)
    const stats = fs.statSync(filePath)
    if (stats.isDirectory(filePath)) {
      tree[file] = {}
      buildDirectoryTree(filePath, tree[file])
    }
    else {
      tree[file] = null
    }
  })
  return tree
}

// 将文件树打印到DrerectoryTree.txt

fs.writeFileSync('DrerectoryTree.txt', JSON.stringify(buildDirectoryTree('./'), null, 2))
