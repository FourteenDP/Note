---
标题: Windows 终端设置代理
描述: null
封面: null
uid: 20240123112807160
aliases: []
tags:
  - 计算机/Windows
  - 终端
  - 设置代理
  - 临时代理
  - 长期生效
  - 测试
cssclasses: null
创建时间: 2023-05-07T14:01:31.000Z
更新时间: 2024-01-22T16:57:40.000Z
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
