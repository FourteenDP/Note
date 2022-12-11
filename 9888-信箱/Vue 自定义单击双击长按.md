---
title: Vue 自定义单击双击长按
aliases:
tags:
date created: 2022-08-16 09:42:15
date updated: 2022-12-12 01:36:48
---

## Vue 自定义单击双击长按

```vue
<template>
  <div class="click" @click="click" @dblclick="dblclick" @mousedown="mousedown" @mouseup="mouseup">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Click',
  methods: {
    click() {
      this.$emit('click')
    },
    dblclick() {
      this.$emit('dblclick')
    },
    mousedown() {
      this.$emit('mousedown')
    },
    mouseup() {
      this.$emit('mouseup')
    }
  }
}
</script>

<style scoped>
.click {
  cursor: pointer;
}
</style>
```
