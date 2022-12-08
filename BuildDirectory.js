/*
 * @文件路径: \BuildDirectory.js
 * @创建时间: 2022-12-08 16:40:53
 * @更新时间: 2022-12-08 16:53:45
 */

// 遍历文件夹和文件
const fs = require('fs')
const path = require('path')

// 读取当前文件夹下的所有文件
const files = fs.readdirSync(__dirname)

// 遍历文件夹下的所有文件
files.forEach((file) => {
  console.log(file);
  // 获取文件的绝对路径
  const filePath = path.join(__dirname, file)
  // 获取文件信息
  const stats = fs.statSync(filePath)
  // 判断是否是文件夹
  if (stats.isDirectory()) {
    console.log('文件夹', file)
  }
  // 判断是否是文件
  if (stats.isFile()) {
    console.log('文件', file)
  }
})
