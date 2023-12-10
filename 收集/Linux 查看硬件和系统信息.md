---
title: Linux 查看硬件和系统信息
tags: 
    - Linux
    - 硬件信息
    - 系统信息
    - 操作系统版本
    - 系统内核
    - 发行版本
    - 硬件信息
uid: 1683439291250
date created: 2023-05-07 14:01:31
date updated: 2023-11-28 11:27:40
---

# Linux 查看硬件和系统信息

## 查看操作系统版本信息

| 命令                  | 说明                  |
| --------------------- | --------------------- |
| `cat /proc/version`   | 查看系统版本信息      |
| `uname -a`            | 查看系统内核信息      |
| `cat /etc/issue`      | 查看发行版本信息      |
| `cat /etc/os-release` | 查看详细发行版本信息  |
| `cat /proc/cpuinfo`   | 查看硬件信息          |
| `getconf LONG_BIT`    | 查看 32bit 还是 64bit |
