---
标题: Neovim 的安装和配置
笔记ID: 1683439291253
描述: 
封面: 
aliases: []
tags:
  - Neovim
  - 安装
  - 配置
  - Debian
cssclasses: 
创建时间: 2023-05-07 14:01:31
更新时间: 2023-12-31 01:17:18
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
