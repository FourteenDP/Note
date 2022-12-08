const fs = require('fs')
const path = require('path')


// 过滤隐藏文件和~开头的文件和-开头的文件和0000开头的文件
function filterFile(file) {
  if (file.startsWith('.') || file.startsWith('~') || file.startsWith('-') || file.startsWith('0000')) return true;
  return false;
}

// 生成文件树
function buildDirectoryTree(dir, filter, type) {
  const files = fs.readdirSync(dir)
  const result = {}
  files.forEach((file) => {
    // 过滤隐藏文件和~开头的文件和-开头的文件和0000开头的文件
    if (filterFile(file)) return;
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

// 对文件树进行排序 文件在前 文件夹在后 文件夹内部排序
function sortDirectoryTree(tree) {
  const result = {}
  const files = []
  const dirs = []
  Object.keys(tree).forEach((key) => {
    if (typeof tree[key] === 'string') {
      // 符号开头的文件放在前面
      if
      // files.push(key)
    } else {
      dirs.push(key)
    }
  })
  files.sort().forEach((file) => {
    result[file] = tree[file]
  })
  dirs.sort().forEach((dir) => {
    result[dir] = sortDirectoryTree(tree[dir])
  })
  return result
}


// 转成markdown格式
function treeToMarkdown(tree, level = 0) {
  let result = ''
  Object.keys(tree).forEach((key) => {
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

// 将文件树打印到INDEX.md
fs.writeFileSync('INDEX.md', treeToMarkdown(sortDirectoryTree(buildDirectoryTree('./', ['.md'], 'include'))))
