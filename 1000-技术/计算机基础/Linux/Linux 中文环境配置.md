---
title: Linux 中文环境配置
aliases: 
tags: 
date created: 2022-08-12 13:38:28
date updated: 2022-08-12 13:48:30
---

# Linux 中文环境配置

```shell
# 安装
apt install locales
# 配置
dpkg-reconfigure locales
# 查看当前语言
locale
# 设置失败执行以下
export LANG=zh_CN.UTF-8
```
