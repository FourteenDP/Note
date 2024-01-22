---
标题: Windows 终端设置代理
描述: null
封面: null
uid: '20230507140131265'
aliases: []
tags:
  - 计算机/Windows
  - 终端
  - 设置代理
  - 临时代理
  - 长期生效
  - 测试
cssclasses: null
创建时间: 2023-05-07 14:01:31
更新时间: 2023-12-31 03:07:34
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
