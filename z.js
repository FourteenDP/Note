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
    // 过滤隐藏文件和~开头的文件和-开头的文件和0000开头的文件
    if (file.startsWith('.') || file.startsWith('~') || file.startsWith('-') || file.startsWith('0000')) return;
    const filePath = path.join(dir, file)
    const stats = fs.statSync(filePath)
    if (stats.isDirectory()) {
      result[file] = buildDirectoryTree(filePath, filter, type)
    } else if (stats.isFile()) {
      if (type === 'include') {
        if (filter.includes(path.extname(filePath))) {
          result[file] = file
        }
      } else if (type === 'exclude') {
        if (!filter.includes(path.extname(filePath))) {
          result[file] = file
        }
      }
    }
  })
  return result
}

// 转成markdown格式
function treeToMarkdown(tree, level = 0) {
  let result = ''
  Object.keys(tree).forEach((key) => {
    // 判断是否是文件
    if (typeof tree[key] === 'string') {
      result += `${'  '.repeat(level + 1)}- [[${tree[key].substring(0, tree[key].lastIndexOf("."))}]]\n`
      return
    } else {
      result += `${'  '.repeat(level)}- ${key}\n`
      if (typeof tree[key] === 'object') {
        result += treeToMarkdown(tree[key], level + 1)
      }
    }
  })
  return result
}

// 将文件树打印到DrerectoryTree.md
fs.writeFileSync('目录.md', treeToMarkdown(buildDirectoryTree('./', ['.md'], 'include')))
