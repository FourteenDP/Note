/*
 * @文件路径: \BuildDirectory.js
 * @创建时间: 2022-12-08 16:40:53
 * @更新时间: 2022-12-08 16:58:00
 */



const fs = require('fs')
const path = require('path')
const nodes = []

// 读取当前文件夹下的所有文件
const files = fs.readdirSync(__dirname)

// 遍历所有文件
files.forEach((file) => {
  // 获取当前文件的绝对路径
  const filePath = path.join(__dirname, file)

  // 获取当前文件的状态
  const stats = fs.statSync(filePath)

  // 判断当前文件是否为文件夹
  if (stats.isDirectory()) {
    // 将文件夹的名称添加到数组中
    nodes.push(file)
  }

  // 判断当前文件是否为文件
  if (stats.isFile()) {
    // 将文件的名称添加到数组中
    nodes.push(file)
  }
})

// 输出数组
console.log(nodes)
