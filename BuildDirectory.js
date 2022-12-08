/*
 * @文件路径: \BuildDirectory.js
 * @创建时间: 2022-12-08 16:40:53
 * @更新时间: 2022-12-08 16:45:35
 */

// 打印目录文件
const fs = require('fs');

// 递归打印目录
function printDirectory(path) {
  let files = fs.readdirSync(path + '/'); // 读取目录
  files.forEach(function (item, index) {
    let fPath = path + '/' + item;
    let stat = fs.statSync(fPath);
    if (stat.isDirectory() === true) {
      printDirectory(fPath);
    }
    if (stat.isFile() === true) {
      console.log(fPath);
    }
  });
}

// 打印目录文件
printDirectory(__dirname + '/1000-技术');
