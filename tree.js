const fs = require('fs')
const path = require('path')

const dir = path.join(__dirname)
const tree = {}

// 遍历目录
function walk(dir, tree) {
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      tree[file] = {}
      walk(filePath, tree[file])
    } else {
      tree[file] = filePath
    }
  })
}

walk(dir, tree)

// 过滤隐藏文件和前缀
function filter(tree, prefixs = ['.', '_']) {
  for (let key in tree) {
    if (prefixs) {
      for (let prefix of prefixs) {
        if (key.startsWith(prefix)) {
          delete tree[key]
        } else if (typeof tree[key] === 'object') {
          filter(tree[key])
        }
      }
    }
  }
}

filter(tree, ['.', '_', 'tree.js', '~', '-', '0000'])

// 包含文件夹和文件
function filterMd(tree) {
  for (let key in tree) {
    if (typeof tree[key] === 'object') {
      filterMd(tree[key])
    } else {
      if (!key.endsWith('.md')) {
        delete tree[key]
      }
    }
  }
}

filterMd(tree)

// tree对象 转换为child node数组
function treeToArray(tree) {
  const arr = []
  for (let key in tree) {
    if (typeof tree[key] === 'object') {
      arr.push({
        title: key,
        children: treeToArray(tree[key])
      })
    } else {
      arr.push({
        title: key,
        path: tree[key]
      })
    }
  }
  return arr
}

const arr = treeToArray(tree)

// child node数组 转 markdown 格式
function arrayToMd(arr, title = '📋目录') {
  let md = `---
title: ${title}
aliases:
tags:
  - 目录
date created: ${new Date().toISOString().slice(0, 10) + ' ' + new Date().toISOString().slice(11, 19)}
date updated: ${new Date().toISOString().slice(0, 10) + ' ' + new Date().toISOString().slice(11, 19)}
---

# ${title}

`
  arr.forEach(item => {
    item.title = item.title.replace(/\.md$/, '')
    if (item.children) {
      md += `- **[[${item.title}]]**\n`
    } else {
      md += `- [[${item.title}]]\n`
    }
  })
  return md
}


// 给每个文件夹生成目录
function generateMd(arr, dir) {
  arr.forEach(item => {
    if (item.children) {
      const md = arrayToMd(item.children, item.title)
      fs.writeFileSync(path.join(dir, item.title, '📋目录.md'), md)
      generateMd(item.children, path.join(dir, item.title))
    }
  })
}

generateMd(arr, dir)
