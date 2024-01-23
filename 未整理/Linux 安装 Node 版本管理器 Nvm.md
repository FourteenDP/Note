---
标题: Linux 安装 Node 版本管理器 Nvm
描述:
封面:
uid: "20230507140131246"
aliases: []
tags:
  - 计算机/Linux
  - Node
  - 计算机/开发/版本管理
  - 计算机/Linux/Nvm
cssclasses:
创建时间: 2023-05-07 14:01:31
更新时间: 2024-01-22 16:57:43
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
