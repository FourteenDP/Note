---
标题: Debian 中文环境
笔记ID: 1683439291240
描述: null
封面: null
aliases: []
tags:
  - Debian
  - 设置
  - 中文
cssclasses: null
创建时间: 2023-05-07T14:01:31.000Z
更新时间: 2023-12-31T01:17:17.000Z
uid: '20230507140131240'
---

# Debian 中文环境

```shell
# 安装
apt install locales
# 配置
sudo dpkg-reconfigure locales
# 查看当前语言
locale
# 设置失败执行以下
export LANG=zh_CN.UTF-8
# 重启终端
```
