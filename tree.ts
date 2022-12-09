const fs: any = require('fs');
const path: any = require('path');
export interface FilterType {
  include?: (file: string) => boolean,
  exclude?: (file: string) => boolean
}

export class Tree {
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
    fs.writeFileSync('./tree.json', JSON.stringify(this.treeArr, null, 2));
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
const tree = new Tree('./');

tree.getTree({
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
    const startsWith = ['.', '-', '~', '0000', '📋'];
    startsWith.forEach((item: string) => {
      if (file.startsWith(item)) {
        boolean = true;
      }
    });
    return boolean;
  }
});
