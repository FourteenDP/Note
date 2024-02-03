---
标题: Debian 中文环境
描述: null
封面: null
uid: 20240123112806910
aliases: null
tags:
  - 计算机/Linux/Debian
cssclasses: null
创建时间: 2023-05-07T14:01:31.000Z
更新时间: 2024-01-22T16:57:44.000Z
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
