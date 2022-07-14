---
title: Git 操作规范
aliases: 
tags: 
date created: 2022-07-14 15:15:47
date updated: 2022-07-14 15:58:23
---

# Git 操作规范

## 简介

规范提交和分支信息有助于代码版本的可辨性

## `git commit` 提交规范

### 类型:type

| 类型    | 类别 | 说明                                   | 等级 |
| ------- | ---- | -------------------------------------- | ---- |
| feat    | Prod | 增加新功能                             | 主要 |
| fix     | Prod | 修复 bug                               | 主要 |
| perf    | Prod | 优化性能                               | 其它 |
| docs    | Dev  | 文档相关改动                           | 特殊 |
| style   | Dev  | 代码美化格式化                         | 特殊 |
| build   | Dev  | 构造工具或外部依赖的改动               | 特殊 |
| reactor | Dev  | 代码重构                               | 特殊 |
| revert  | Dev  | 执行 `git revert` 打印的 `message` | 特殊 |
| test    | Dev  | 添加修改测试用例                       | 其它 |
| ci      | Dev  | CI (持续集成服务) 有关的改的           | 其它 |
| chore   | Dev  | 其它，构建流程、以来管理辅助功能等     | 其它 |

- 当一次改动包括主要 type 与特殊 type 时，统一采用主要 type。

### 改动范围:scop

- 用于描述改动的范围
- 如果一次性，改动多个模块，分多次提交

### 详情:body
- 描述



