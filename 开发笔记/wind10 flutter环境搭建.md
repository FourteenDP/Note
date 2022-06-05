---
aliases:
tags:
date created: 2022-06-05 22:13:33
date modified: 2022-06-05 22:13:33
---

# windows flutter 环境搭建
<!-- TODO flutter 环境搭建 -->

## 系统配置要求

- 操作系统：Windows 7 SP1 或更高的版本（基于 x86-64 的 64 位操作系统）
- 设置: 必须在 Windows 10/11 上启用开发者模式

## 下载 Flutter SDK

[Flutter SDK 列表地址](https://flutter.cn/docs/development/tools/sdk/releases?tab=windows)

```shell
git clone git@github.com:flutter/flutter.gitF
```

1. 把 Flutter SDK 压缩包解压到系统
2. Flutter SDK 解压出来其实是个 git 项目可以直接使用 git clone 克隆到系统
3. 可以通过切换 git tag 进行版本切换

## 设置环境变量

```shell
setx Path "%PATH%;FlutterRootDirectory\bin";   # flutter环境变量
setx PUB_HOSTED_URL "https://pub.flutter-io.cn";  # pub国内镜像
setx FLUTTER_STORAGE_BASE_URL "https://storage.flutter-io.cn";  #flutter国内镜像
```
