const fs: any = require('fs');
const path: any = require('path');
export enum FilterType {
  include,
  exclude
}

export class Tree {
  private root: string;
  private tree: any;

  constructor(root: string) {
    this.root = root;
    this.tree = {};
  }
  public getTree(type?: FilterType, filter?: (file: string) => boolean) {
    this.tree = this.getDir(this.root);
    if (type && filter) this.tree = this.filterTree(this.tree, type, filter);
    fs.writeFileSync('./tree.json', JSON.stringify(this.tree, null, 2));
    return this.tree;
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

  public filterTree(tree: any, type: FilterType, filter: (file: string) => boolean) {
    const result: any = {};
    Object.keys(tree).forEach((key: string) => {
      const value: any = tree[key];
      if (typeof value === 'string') {
        if (type === FilterType.include) {
          if (filter(value)) {
            result[key] = value;
          }
        } else {
          if (!filter(value)) {
            result[key] = value;
          }
        }
      } else {
        const subTree: any = this.filterTree(value, type, filter);
        if (Object.keys(subTree).length > 0) {
          result[key] = subTree;
        }
      }
    });
    return result;
  }
}
const tree = new Tree('./');
tree.getTree(FilterType.exclude, (file: string) => {
  let boolean = false;
  const startWiths = ['.', '-', '~', '0000'];
  startWiths.forEach((char: string) => {
    if (file.startsWith(char)) {
      boolean = true;
    }
  });
  return boolean;
});
