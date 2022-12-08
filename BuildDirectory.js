/*
 * @文件路径: \BuildDirectory.js
 * @创建时间: 2022-12-08 16:40:53
 * @更新时间: 2022-12-08 17:05:01
 */



const fs = require('fs')
const path = require('path')


// 遍历文件和文件夹打印到log文件
function walkFile(dir, logFile) {
  let files = fs.readdirSync(dir)
  files.forEach((file, index) => {
    let filePath = path.join(dir, file)
    let stat = fs.statSync
    if (stat(filePath).isDirectory()) {
      // 文件夹
      walkFile(filePath, logFile)
    }
    else {
      // 文件
      let content = fs.readFileSync(filePath, 'utf-8')
      fs.appendFileSync(logFile, content + '', 'utf-8')
    }
  })
}

walkFile(__dirname)
