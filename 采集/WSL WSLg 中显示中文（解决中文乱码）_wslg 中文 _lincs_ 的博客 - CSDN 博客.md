---
title: WSL WSLg 中显示中文（解决中文乱码）_wslg 中文 _lincs_ 的博客 - CSDN 博客
tags:
  - 采集
  - WSL
  - WSLg
  - 中文显示
  - 乱码解决
  - 教程
uid: 1683439293652
date created: 2023-05-07 14:01:33
date updated: 2023-11-28 14:10:51
---

# WSL WSLg 中显示中文（解决中文乱码）_wslg 中文 _lincs_ 的博客 - CSDN 博客

**原文：**[WSL WSLg 中显示中文（解决中文乱码）_wslg 中文_lincs_的博客 - CSDN 博客](https://blog.csdn.net/weixin_41714373/article/details/119519589)

- 生成 locale 配置文件

```
sudo locale-gen
locale

```

- Sharing Windows fonts with WSL

```
sudo apt install fontconfig
sudo vim /etc/fonts/local.conf

```

- paste

```
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
    <dir>/mnt/c/Windows/Fonts</dir>
</fontconfig>

```

- 开启 WSL 下的图形界面编辑器 gedit，还有效果图：

```
