---
标题: Vue 自定义单击双击长按
笔记ID: 1683439291146
描述: null
封面: null
aliases: []
tags:
  - Vue
  - 计算机/前端开发/JavaScript
  - 单击
  - 双击
  - 长按
  - 自定义
cssclasses: null
创建时间: 2023-05-07T14:01:31.000Z
更新时间: 2023-12-31T01:17:23.000Z
uid: '20230507140131146'
---

# Vue 自定义单击双击长按

## Vue 自定义实现单击双击长按

为什么要自己实现呢？因为有些时候，我们需要在单击双击长按的时候，做一些事情，比如在单击的时候，弹出一个对话框，双击的时候，跳转到另一个页面，长按的时候，弹出一个菜单。以及自定义双击、长按的时间

### 实现思路

1. 用 `v-on` 绑定 `mousedown` 事件
2. 在 `mousedown` 事件中，用 `setTimeout` 设置一个定时器，定时器的时间为 500ms
3. 在 `mousedown` 事件中，用 `clearTimeout` 清除定时器

### 实现代码

```html
<template>
  <div class="app">
    <div class="box" @mousedown="onMouseDown">
      <div class="box-content">
        <div class="box-content-text">单击</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    onMouseDown(e) {
      let timer = setTimeout(() => {
        console.log("长按");
      }, 500);
      e.target.onmouseup = () => {
        clearTimeout(timer);
        console.log("单击");
      };
      e.target.ondblclick = () => {
        clearTimeout(timer);
        console.log("双击");
      };
    },
  },
};
</script>

````
