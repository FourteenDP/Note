"use strict";
exports.__esModule = true;
exports.Tree = void 0;
var fs = require('fs');
var path = require('path');
var Tree = /** @class */ (function () {
  function Tree(root) {
    this.treeArr = [];
    this.root = root;
    this.tree = {};
  }
  Tree.prototype.getTree = function (filterType) {
    this.tree = this.getDir(this.root);
    if (filterType)
      this.tree = this.filterTree(this.tree, filterType);
    this.treeArr = this.treeToArr(this.tree);
    this.sortTreeArr(this.treeArr);
    fs.writeFileSync('./tree.json', JSON.stringify(this.treeArr, null, 2));
    return {
      tree: this.tree,
      treeArr: this.treeArr
    };
  };
  Tree.prototype.getDir = function (dir) {
    var _this = this;
    var tree = {};
    var files = fs.readdirSync(dir);
    files.forEach(function (file) {
      var filePath = path.join(dir, file);
      var stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        tree[file] = _this.getDir(filePath);
      }
      if (stat.isFile()) {
        tree[file] = filePath;
      }
    });
    return tree;
  };
  Tree.prototype.filterTree = function (tree, filterType) {
    var _this = this;
    var result = {};
    Object.keys(tree).forEach(function (key) {
      var value = tree[key];
      if (typeof value === 'string') {
        if ((filterType === null || filterType === void 0 ? void 0 : filterType.include) && (!filterType.include(key) || !filterType.include(value)))
          return;
        if ((filterType === null || filterType === void 0 ? void 0 : filterType.exclude) && (filterType.exclude(key) || filterType.exclude(value)))
          return;
        result[key] = value;
      }
      else {
        var subTree = _this.filterTree(value, filterType);
        if (Object.keys(subTree).length > 0) {
          result[key] = subTree;
        }
      }
    });
    return result;
  };
  Tree.prototype.treeToArr = function (tree, arr) {
    var _this = this;
    if (arr === void 0) { arr = []; }
    Object.keys(tree).forEach(function (key) {
      var value = tree[key];
      if (typeof value === 'string') {
        arr.push({
          title: key,
          path: value
        });
      }
      else {
        arr.push({
          title: key,
          children: _this.treeToArr(value)
        });
      }
    });
    return arr;
  };
  Tree.prototype.sortTreeArr = function (treeArr) {
    var _this = this;
    treeArr.sort(function (a, b) {
      if (a.children && b.children) {
        return 0;
      }
      else if (a.children) {
        return -1;
      }
      else if (b.children) {
        return 1;
      }
      else {
        return a.title.localeCompare(b.title);
      }
    });
    treeArr.forEach(function (item) {
      if (item.children) {
        _this.sortTreeArr(item.children);
      }
    });
  };
  return Tree;
}());
exports.Tree = Tree;
var tree = new Tree('./');
tree.getTree({
  include: function (file) {
    var boolean = false;
    var endsWith = ['.md'];
    endsWith.forEach(function (item) {
      if (file.endsWith(item)) {
        boolean = true;
      }
    });
    return boolean;
  },
  exclude: function (file) {
    var boolean = false;
    var startsWith = ['.', '-', '~', '0000', '📋'];
    startsWith.forEach(function (item) {
      if (file.startsWith(item)) {
        boolean = true;
      }
    });
    return boolean;
  }
});
