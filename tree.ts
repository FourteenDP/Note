namespace Tree {
  // 遍历文件夹
  class Tree {
    constructor() {
      const fs = require('fs');
      const path = require('path');
      const dir = path.resolve(__dirname, '../');
      const files = fs.readdirSync(dir);
      this.traverse(files, dir);
    }

    traverse(files, dir) {
      files.forEach((file) => {
        const filePath = path.resolve(dir, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
          const files = fs.readdirSync(filePath);
          this.traverse(files, filePath);
        } else {
          console.log(filePath);
        }
      });

    }
  }

  const tree = new Tree();
}
