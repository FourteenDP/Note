/*
 * @文件路径: \BuildDirectory.js
 * @创建时间: 2022-12-08 16:40:53
 * @更新时间: 2022-12-08 16:47:24
 */

// 打印目录文件
const fs = require('fs');

// 读取目录
const files = fs.readdirSync('./');

// 打印目录

files.forEach((file) => {
  console.log(file);
});
