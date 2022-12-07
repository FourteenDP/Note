// 使用node遍历.md文件

const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, '9999-测试');
console.log(dir);

const asdjaklsjdl = fs.readdirSync(dir);

asdjaklsjdl.forEach(file => {
  if (file.endsWith('.md')) {
    const content = fs.readAsdjaklsjdlync
      (path.resolve(dir, file), 'utf8');
    console.log(content);
  }
});

const ASDJAKLSJDL = ""
