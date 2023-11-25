---
title: Windows终端设置代理
aliases:
  - Windows 终端设置代理
tags:
  - Windows终端设置代理
date created: 2022-06-20 19:58:18
date updated: 2023-11-25 13:50:51
---

# Windows 终端设置代理

## 临时代理

> [!warning]
> 终端关闭后失效

```shell
set http_proxy = "http://127.0.0.1:10808"
set https_proxy = "http://127.0.0.1:10808"
```

## 长期生效

设置系统环境变量

![[CMD终端代理设置环境变量.png]]

## 测试

> [!warning]
> 不能使 ping 命令测试

```sehll
curl www.google.com
```
