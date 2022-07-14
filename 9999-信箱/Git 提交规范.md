---
title: Git 操作规范
aliases: 
tags: 
date created: 2022-07-14 15:15:47
date updated: 2022-07-14 15:35:45
---

# Git 操作规范

## 简介

规范提交和分支信息有助于代码版本的可辨性

## `git commit` 提交规范

| 类型    | 类别 | 说明                               |
| ------- | ---- | ---------------------------------- |
| feat    | Prod | 增加新功能                         |
| fix     | Prod | 修复 bug                           |
| perf    | Prod | 优化性能                           |
| docs    | Dev  | 文档相关改动                       |
| style   | Dev  | 代码美化格式化                     |
| build   | Dev  | 构造工具或外部依赖的改动           |
| reactor | Dev  | 代码重构                           |
| revert  | Dev  | 执行 `git revert` 打印的 `message` |
| test    | Dev  | 添加修改测试用例                   |
| ci      | Dev  | CI (持续集成服务) 有关的改的       |
| chore   | Dev  | 其它，构建流程、以来管理辅助功能等 |
