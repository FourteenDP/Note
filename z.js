const fs = require('fs')
const path = require('path')


// 过滤
function filterFile(file) {
  if (file.startsWith('.') || file.startsWith('~') || file.startsWith('-') || file.startsWith('0000')) return true;
  if (file === 'INDEX.md') return true;
  return false;
}

// 生成文件树
function buildDirectoryTree(dir, filter, type) {
  const files = fs.readdirSync(dir)
  const result = {}
  files.forEach((file) => {
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

// 对文件树进行排序 优先级：文件夹>文件>文件名
function sortDirectoryTree(tree) {
  const result = {}
  const keys = Object.keys(tree)
  keys.sort((a, b) => {
    if (typeof tree[a] === 'object' && typeof tree[b] === 'string') {
      return -1
    } else if (typeof tree[a] === 'string' && typeof tree[b] === 'object') {
      return 1
    } else if (typeof tree[a] === 'object' && typeof tree[b] === 'object') {
      return a.localeCompare(b)
    } else if (typeof tree[a] === 'string' && typeof tree[b] === 'string') {
      return a.localeCompare(b)
    }
  })
  keys.forEach((key) => {
    result[key] = tree[key]
    if (typeof tree[key] === 'object') {
      result[key] = sortDirectoryTree(tree[key])
    }
  })
  return result
}

// 转成markdown格式
function treeToMarkdown(tree, dir) {
  console.log(dir);
  let result = `---
title: ${dir === './' ? '📋目录' : '📋目录-' + dir}
aliases:
tags:
  - 目录
date created: ${new Date().toISOString().substring(0, 10) + ' ' + new Date().toISOString().substring(11, 19)}
date updated: ${new Date().toISOString().substring(0, 10) + ' ' + new Date().toISOString().substring(11, 19)}
---

# ${dir === './' ? '📋目录' : '📋目录-' + dir}

`
  Object.keys(tree).forEach((key) => {
    if (typeof tree[key] === 'string') {
      result += `- [[${tree[key].substring(0, tree[key].lastIndexOf("."))}]]\n`
      return
    } else {
      result += `- **[[📋目录-${key}]]**\n`
    }
  })
  return result
}

// 生成索引所有文件夹
function generateIndex(dir) {
  const files = fs.readdirSync(dir)
  // 根目录生成INDEX.md
  if (dir === './') {
    const tree = buildDirectoryTree(dir, ['.md'], 'include')
    const sortTree = sortDirectoryTree(tree)
    const markdown = treeToMarkdown(sortTree, dir)
    fs.writeFileSync(path.join(dir, 'INDEX.md'), markdown)
  }
  files.forEach((file) => {
    if (filterFile(file)) return;
    const filePath = path.join(dir, file)
    const stats = fs.statSync(filePath)
    if (stats.isDirectory()) {
      const tree = buildDirectoryTree(filePath, ['.md'], 'include')
      const sortTree = sortDirectoryTree(tree)
      const markdown = treeToMarkdown(sortTree, file)
      fs.writeFileSync(path.join(filePath, 'INDEX.md'), markdown)
      generateIndex(filePath)
    }
  })
}



// 删除索引
function deleteIndex(dir) {
  const files = fs.readdirSync(dir)
  files.forEach((file) => {
    if (file === 'INDEX.md') {
      fs.unlinkSync(path.join(dir, file))
      return
    }
    const filePath = path.join(dir, file)
    const stats = fs.statSync(filePath)
    if (stats.isDirectory()) {
      deleteIndex(filePath)
    }
  })
}

true ? generateIndex('./') : deleteIndex('./')
