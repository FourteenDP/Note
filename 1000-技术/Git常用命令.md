---
date created: 2022-06-20 15:05
date updated: 2022-06-20 15:05
---

# 介绍

- Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。

- Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。

- Git 与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。

## GIT 与 SVN 区别

- Git 不仅仅是个版本控制系统，它也是个内容管理系统(CMS)，工作管理系统等。

- 如果你是一个具有使用 SVN 背景的人，你需要做一定的思想转换，来适应 Git 提供的一些概念和特征。

- Git 与 SVN 区别点：

- 1、Git 是分布式的，SVN 不是：这是 Git 和其它非分布式的版本控制系统，例如 SVN，CVS 等，最核心的区别。

- 2、Git 把内容按元数据方式存储，而 SVN 是按文件：所有的资源控制系统都是把文件的元信息隐藏在一个类似 .svn、.cvs 等的文件夹里。

- 3、Git 分支和 SVN 的分支不同：分支在 SVN 中一点都不特别，其实它就是版本库中的另外一个目录。

- 4、Git 没有一个全局的版本号，而 SVN 有：目前为止这是跟 SVN 相比 Git 缺少的最大的一个特征。

- 5、Git 的内容完整性要优于 SVN：Git 的内容存储使用的是 SHA-1 哈希算法。这能确保代码内容的完整性，确保在遇到磁盘故障和网络问题时降低对版本库的破坏。

# GIT 常用命令

| 命令                                   | 说明                                           |
| ------------------------------------ | -------------------------------------------- |
| git ini                              | 初始化项目                                        |
| git status                           | 查看目前项目状态                                     |
| git add [file]                       | 添加文件到暂存区                                     |
| git add -A                           | 添加所有变化到暂存区                                   |
| git add -u                           | 添加被修改(modified)和被删除(deleted)文件，不包括新文件(new)   |
| git add .                            | 添加新文件(new)和被修改(modified)文件，不包括被删除(deleted)文件 |
| git config user.name [name]          | 添加项目用户信息                                     |
| git config user.emil [emil]          | 添加项目用户邮箱                                     |
| git config --global user.name [name] | 添加全局用户信息                                     |
| git config --global user.emil [emil] | 添加全局用户邮箱                                     |
| git commit -m                        | 把暂存区的文件添加到 commit 并说明                        |
| git remote                           | 查看远程库                                        |
| git remote add [name][url]           | 添加远程库                                        |
| git push [name][name]                | 推送到远程库                                       |
| ssh-keygen -t rsa -C "[name]"        | 创建一个 ssh 密钥用于免密登录                            |
