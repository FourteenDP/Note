---
title: 工程化之-EditorConfig
aliases: [工程化之-EditorConfig, 工程化之-.editorconfig, editorconfig]
tags: []
date created: 2023-05-08 18:46:15
date updated: 2023-05-08 18:55:20
---

# 工程化之-EditorConfig

EditorConfig 是一个用于定义代码格式的文件格式和一组文本编辑器插件。它可以帮助开发人员在不同的编辑器和 IDE 中保持一致的代码风格。

EditorConfig 文件通常命名为 `.editorconfig`，并存储在项目的根目录中。它包含一组用于定义代码格式的规则，例如缩进风格、缩进大小、换行符类型等。当您在支持 EditorConfig 的编辑器中打开项目中的文件时，编辑器会自动应用这些规则，以确保您的代码风格与项目中其他文件保持一致。

## EditorConfig

在您正在使用的编辑器插件市场搜索 `EditorConfig` 一般第一个就是安装它，使编辑器支持 `EditorConfig` 设置

## 创建 `.editorconfig`

```shell
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true


```
