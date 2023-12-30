---
标题: Debian 中文环境
tags:
  - Debian
  - 设置
  - 中文
笔记ID: 1683439291240
创建时间: 2023-05-07 14:01:31
更新时间: 2023-11-28 11:27:40
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
