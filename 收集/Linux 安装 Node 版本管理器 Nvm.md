---
标题: Linux 安装 Node 版本管理器 Nvm
笔记ID: 1683439291246
aliases: 
tags:
  - Linux
  - Node
  - 版本管理
  - Nvm
cssclasses: 
描述: 
创建时间: 2023-05-07 14:01:31
更新时间: 2023-12-31 00:38:00
---

# Linux 安装 Node 版本管理器 Nvm

## 安装和更新脚本

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

## 更换镜像源

```shell
# .zshrc
export NVM_NODEJS_ORG_MIRROR="https://npmmirror.com/mirrors/node"
# 刷新环境变量
source ~/.zshrc

```

## 参考

- [GitHub - nvm-sh/nvm: Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions](https://github.com/nvm-sh/nvm)
