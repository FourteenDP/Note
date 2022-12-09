/*
 * @文件路径: \9999-工作台\红黑树.ts
 * @创建时间: 2022-12-09 17:59:26
 * @更新时间: 2022-12-09 18:00:42
 */
// 红黑树typescript实现
class RedBlackTree {
  key: number;
  left: Node | null;
  right: Node | null;
  parent: Node | null;
  color: boolean;
  constructor(key: number) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = true;
  }
}

// 测试红黑树
const tree = new RedBlackTree(11);
console.log(tree);
