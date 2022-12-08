/*
 * @文件路径: \BuildDirectory.js
 * @创建时间: 2022-12-08 16:40:53
 * @更新时间: 2022-12-08 17:17:37
 */



const fs = require('fs')
const path = require('path')


/**
 * @description: 生成文件树过滤器
 * @param {string} dir
 * @param {Array} filter
 * @param {string} type
 * @return {Object}
 * @example: buildDirectoryTree('./', ['.js', '.json'], 'include')
*/

function buildDirectoryTree(dir, filter, type) {
  const files = fs.readdirSync(dir)
  const result = {}
  files.forEach((file) => {
    // 过滤隐藏文件
    if (file.startsWith('.')) return;
    const filePath = path.join(dir, file)
    const stats = fs.statSync(filePath)
    if (stats.isDirectory()) {
      result[file] = buildDirectoryTree(filePath, filter, type)
    } else if (stats.isFile()) {
      if (type === 'include') {
        if (filter.includes(path.extname(filePath))) {
          result[file] = filePath
        }
      } else if (type === 'exclude') {
        if (!filter.includes(path.extname(filePath))) {
          result[file] = filePath
        }
      }
    }
  })
  return result
}


// 将文件树打印到DrerectoryTree.txt
fs.writeFileSync('DrerectoryTree.txt', JSON.stringify(buildDirectoryTree('./', ['.js', '.json'], 'exclude'), null, 2))
