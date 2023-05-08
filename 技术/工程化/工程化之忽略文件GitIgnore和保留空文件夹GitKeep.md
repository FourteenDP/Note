---
title: 工程化之忽略文件GitIgnore和保留空文件夹GitKeep
aliases: [工程化之忽略文件GitIgnore和保留空文件夹GitKeep, 工程化之忽略文件和保留空文件夹 GitIgnore 和 GitKeep, 工程化之忽略文件和保留空文件夹GitIgnore和GitKeep, 工程化之GitIgnore和GitKeep]
tags: []
date created: 2023-05-08 19:19:39
date updated: 2023-05-08 19:28:42
---

# 工程化之忽略文件GitIgnore和保留空文件夹GitKeep

## 忽略文件GitIgnore

在使用 Git 管理项目时，我们经常需要忽略一些文件或目录，以防止它们被提交到仓库中。例如，我们可能希望忽略编译生成的二进制文件、日志文件或包含敏感信息的配置文件。为了实现这一目的，我们可以使用 `.gitignore` 文件来指定要忽略的文件和目录

下面为常用忽略文件例子:

```ini
# Logs
# 日志
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Editor directories and files
# 编辑器目录和文件
.idea
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

node_modules
.DS_Store
dist
*.local
```
