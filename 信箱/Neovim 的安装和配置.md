---
标题: Neovim 的安装和配置
描述: null
封面: null
uid: '20230507140131253'
aliases: []
tags:
  - 计算机/Linux/Neovim
  - 计算机/Linux/安装
  - 计算机/Linux/配置
  - 计算机/Linux/Debian
cssclasses: null
创建时间: 2023-05-07 14:01:31
更新时间: 2023-12-31 03:07:34
---

# Neovim 的安装和配置

## Neovim 的安装

### 直接 Debian 远程仓库安装

**版本较旧**

```
apt install neovim
```

### 从 GitHub 仓库下载安装

- 在这 [Neovim Releases](https://github.com/neovim/neovim/releases) 找到对应版本下载到系统中

```shell
wget <url>
```

- 使用 `apt` 安装 `neovim`

```shell
sudo apt install ./nvim-linux64.deb
```

### 配置 NeoVim

- [nvchad](https://nvchad.com/docs/quickstart/install)

### 参考

- [neovim/neovim: Vim-fork focused on extensibility and usability](https://github.com/neovim/neovim)
