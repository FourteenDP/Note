/*
 * @文件路径: \BuildDirectory.js
 * @创建时间: 2022-12-08 16:40:53
 * @更新时间: 2022-12-08 17:01:46
 */



const fs = require('fs')
const path = require('path')


// 读取当前文件夹下的所有文件
const files = fs.readdirSync(__dirname)
// 过滤出文件夹
const dirs = files.filter(file => fs.statSync(path.join(__dirname, file)).isDirectory())
// 过滤出文件
const files = files.filter(file => fs.statSync(path.join(__dirname, file)).isFile())
