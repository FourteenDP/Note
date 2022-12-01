---
title: Linux 安装 Node 版本管理器 Nvm
aliases:
tags:
date created: 2022-08-09 21:46:04
date updated: 2022-12-01 17:55:24
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

## 关联资料

- [[Nvm常用命令]]

## 参考资料

- [GitHub - nvm-sh/nvm: Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions](https://github.com/nvm-sh/nvm)
