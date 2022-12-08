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

// 对文件树进行排序 优先级 文件名>文件>文件夹>符号>数字>字母>其他
function sortDirectoryTree(tree) {
  const result = {}
  const keys = Object.keys(tree)
  keys.sort((a, b) => {
    if (a.startsWith('[') && b.startsWith('[')) {
      return a.localeCompare(b)
    } else if (a.startsWith('[')) {
      return -1
    } else if (b.startsWith('[')) {
      return 1
    } else if (a.startsWith('!') && b.startsWith('!')) {
      return a.localeCompare(b)
    } else if (a.startsWith('!')) {
      return -1
    } else if (b.startsWith('!')) {
      return 1
    } else if (a.startsWith('_') && b.startsWith('_')) {
      return a.localeCompare(b)
    } else if (a.startsWith('_')) {
      return -1
    } else if (b.startsWith('_')) {
      return 1
    } else if (a.startsWith('#') && b.startsWith('#')) {
      return a.localeCompare(b)
    } else if (a.startsWith('#')) {
      return -1
    } else if (b.startsWith('#')) {
      return 1
    } else if (a.startsWith('$') && b.startsWith('$')) {
      return a.localeCompare(b)
    } else if (a.startsWith('$')) {
      return -1
    } else if (b.startsWith('$')) {
      return 1
    } else if (a.startsWith('`') && b.startsWith('`')) {
      return a.localeCompare(b)
    } else if (a.startsWith('`')) {
      return -1
    } else if (b.startsWith('`')) {
      return 1
    } else if (a.startsWith('[') && b.startsWith('[')) {
      return a.localeCompare(b)
    } else if (a.startsWith('[')) {
      return -1
    } else if (b.startsWith('[')) {
      return 1
    } else if (a.startsWith('!') && b.startsWith('!')) {
      return a.localeCompare(b)
    } else if (a.startsWith('!')) {
      return -1
    } else if (b.startsWith('!')) {
      return 1
    } else if (a.startsWith('_') && b.startsWith('_')) {
      return a.localeCompare(b)
    } else if (a.startsWith('_')) {
      return -1
    } else if (b.startsWith('_')) {
      return 1
    } else if (a.startsWith('#') && b.startsWith('#')) {
      return a.localeCompare(b)
    } else if (a.startsWith('#')) {
      return -1
    } else if (b.startsWith('#')) {
      return 1
    } else if (a.startsWith('$') && b.startsWith('$')) {
      return a.localeCompare(b)
    } else if (a.startsWith('$')) {
      return -1
    } else if (b.startsWith('$')) {
      return 1
    }
    return a.localeCompare(b)
  })
  keys.forEach((key) => {
    if (typeof tree[key] === 'object') {
      result[key] = sortDirectoryTree(tree[key])
    } else {
      result[key] = tree[key]
    }
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
