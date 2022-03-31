---
aliases: 
tags: 
date created: 2022-03-31 21:50:57
date modified: 2022-03-31 22:09:10
---

# CSS实现文本超出显示省略号

## CSS

### 单行

``` css
overflow:hidden; //超出的文本隐藏
text-overflow:ellipsis; //溢出用省略号显示
white-space:nowrap; //溢出不换行
```

### 多行

```css
  display: -webkit-box;
  overflow: hidden;  
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
```

## 无固定宽度省略号的显示

- 在需要文本超出显示省略号盒子上添加`width: fit-content`属性
- 在`flex`盒子添加`min-width:0`属性