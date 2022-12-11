
namespace Tree {
  const fs: any = require('fs');
  const path: any = require('path');
  interface FilterType {
    include?: (file: string) => boolean,
    exclude?: (file: string) => boolean
  }

  class Tree {
    private root: string;
    private tree: any;
    private treeArr: any[] = [];

    constructor(root: string) {
      this.root = root;
      this.tree = {};
    }
    public getTree(filterType?: FilterType) {
      this.tree = this.getDir(this.root);
      if (filterType) this.tree = this.filterTree(this.tree, filterType);
      this.treeArr = this.treeToArr(this.tree);
      this.sortTreeArr(this.treeArr);
      return {
        tree: this.tree,
        treeArr: this.treeArr
      };
    }
    private getDir(dir: string) {
      const tree: any = {};
      const files: string[] = fs.readdirSync(dir);
      files.forEach((file: string) => {
        const filePath: string = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          tree[file] = this.getDir(filePath);
        }
        if (stat.isFile()) {
          tree[file] = filePath;
        }
      });
      return tree;
    }

    public filterTree(tree: any, filterType?: FilterType) {
      const result: any = {};
      Object.keys(tree).forEach((key: string) => {
        const value: any = tree[key];
        if (typeof value === 'string') {
          if (filterType?.include && (!filterType.include(key) || !filterType.include(value))) return;
          if (filterType?.exclude && (filterType.exclude(key) || filterType.exclude(value))) return;
          result[key] = value;
        } else {
          const subTree: any = this.filterTree(value, filterType);
          if (Object.keys(subTree).length > 0) {
            result[key] = subTree;
          }
        }
      });
      return result;
    }
    private treeToArr(tree: any, arr: any[] = []) {
      Object.keys(tree).forEach((key: string) => {
        const value: any = tree[key];
        if (typeof value === 'string') {
          arr.push({
            title: key,
            path: value
          });
        } else {
          arr.push({
            title: key,
            children: this.treeToArr(value)
          });
        }
      });
      return arr;
    }

    private sortTreeArr(treeArr: any[]) {
      treeArr.sort((a: any, b: any) => {
        if (a.children && b.children) {
          return 0;
        } else if (a.children) {
          return -1;
        } else if (b.children) {
          return 1;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
      treeArr.forEach((item: any) => {
        if (item.children) {
          this.sortTreeArr(item.children);
        }
      });
    }
  }

  // 在每个文件夹下生成📋目录.md文件, 用于生成当前文件夹和文件目录
  class TreeArrToMd {
    private treeArr: any[];
    private dir: string = '';
    constructor(treeArr: any[], dir: string = './') {
      this.treeArr = treeArr;
      this.dir = dir;
    }

    public generate() {
      this.generatePath(this.treeArr, this.dir);
    }

    private generatePath(treeArr: any[], dir: string) {
      treeArr.forEach((item: any) => {
        if (item.children) {
          this.generatePath(item.children, path.join(dir, item.title));
        }
        const mdPath: string = path.join(dir, '📋目录.md');
        const mdContent: string = this.generateMdContent(treeArr);
        fs.writeFileSync(mdPath, mdContent);
      });
    }

    private generateMdContent(treeArr: any[]) {
      let mdContent: string = '';
      treeArr.forEach((item: any) => {
        if (item.children) {
          mdContent += `- **[[${item.title}/📋目录|${item.title}]]**\n`;
        } else {
          item.title = item.title.replace(/\.md$/, '');
          mdContent += `- [[${item.title}]]\n`;
        }
      });
      return mdContent;
    }

    // 将完整的treeArr转换并打印到tree.md
    public static generateTreeMd(treeArr: any[]) {
      const treeMd: string = this.generateTreeMdContent(treeArr);
      fs.writeFileSync('./tree.md', treeMd);
    }

    private static generateTreeMdContent(treeArr: any[], level: number = 0) {
      let treeMd: string = '';
      let space: string = '';
      for (let i = 0; i < level; i++) {
        space += '  ';
      }
      treeArr.forEach((item: any) => {
        if (item.children) {
          treeMd += `${space}- **[[${item.title}/📋目录|${item.title}]]**\n`;
          treeMd += this.generateTreeMdContent(item.children, level + 1);
        } else {
          treeMd += `${space}- [[${item.title}]]\n`;
        }
      });
      return treeMd;
    }
  }

  const tree = new Tree('./');
  const treeArr = tree.getTree({
    include: (file: string) => {
      let boolean = false;
      const endsWith = ['.md'];
      endsWith.forEach((item: string) => {
        if (file.endsWith(item)) {
          boolean = true;
        }
      });
      return boolean;
    },
    exclude: (file: string) => {
      let boolean = false;
      const startsWith = ['.', '-', '~', '0000', '📋目录', 'node_modules'];
      startsWith.forEach((item: string) => {
        if (file.startsWith(item)) {
          boolean = true;
        }
      });
      return boolean;
    }
  });

  const md = new TreeArrToMd(treeArr.treeArr);
  md.generate();
  TreeArrToMd.generateTreeMd(treeArr.treeArr);
}
