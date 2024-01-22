---
标题: 【WSL】 WSLg 中显示中文（解决中文乱码）_wslg 中文乱码 - CSDN 博客
描述: 
封面: 
uid: "20231231002219799"
aliases: []
tags:
  - 采集
cssclasses: 
作者: blog.csdn.net
域名: blog.csdn.net
原文链接: https://blog.csdn.net/weixin_41714373/article/details/119519589
创建时间: 2023-12-31 00:22:19
更新时间: 2024-01-22 16:56:21
---

# 【WSL】 WSLg 中显示中文（解决中文乱码）_wslg 中文乱码 - CSDN 博客

- 生成 locale 配置文件

```
sudo locale-gen
locale

```

- Sharing Windows fonts with WSL

```
sudo apt install fontconfig
sudo vim /etc/fonts/local.conf

```

- paste

```
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
    <dir>/mnt/c/Windows/Fonts</dir>
</fontconfig>

```

- 开启 WSL 下的图形界面编辑器 gedit，还有效果图：

```
gedit cn.txt

```

![](https://img-blog.csdnimg.cn/655f24dada204c2e90f4ed5164adc2a6.png)
