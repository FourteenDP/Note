---
title: 查看操作系统版本信息
aliases: [查看操作系统版本信息]
tags: []
date created: 2022-07-18 21:00:05
date updated: 2022-12-29 16:12:48
---

# Linux查看硬件和系统信息

## 查看操作系统版本信息

| 命令                  | 说明                  |
| --------------------- | --------------------- |
| `cat /proc/version`   | 查看系统版本信息      |
| `uname -a`            | 查看系统内核信息      |
| `cat /etc/issue`      | 查看发行版本信息      |
| `cat /etc/os-release` | 查看详细发行版本信息  |
| `cat /proc/cpuinfo`   | 查看硬件信息          |
| `getconf LONG_BIT`    | 查看 32bit 还是 64bit |
