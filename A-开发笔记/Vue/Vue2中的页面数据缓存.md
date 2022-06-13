---
date created: 2022-06-11 14:39
date updated: 2022-06-13 15:08
---

# Vue2中的页面数据缓存

## 使用场景

在使用Vue开发单页面应用事，经常会遇到表单页需要显示上次输入的数据，这就需要将整个页面数据的存储下来

## 三种方式

### 全局状态管理

将数据保存到全局状态管理工具如Vuex，关闭页面时数据丢失

### Keep-alive

缓存页面实例，不销毁实例，关闭页面时数据丢失

### 本地缓存

将数据保存到浏览器缓存，只要不主动清理缓存，数据不丢失

## 全局状态管理

- [ ] 全局状态管理页面缓存

## Keep-alive缓存

- [ ] Keep-alive缓存

## 本地缓存
- 通过`vm.$data`获取当前`vm`数据，缓存到本地
- 读取数据时因`vm.$data`是个只读属性，无法直接把缓存中的数据直接赋值到`vm.$data`
- 

```javascript
export default {
  data() {
    const dataStr = localStorage.getItem('myCat');
    const data = JSON.parse(dataStr) || {}
    return Object.assign(
      {
        text:'',
      },
      data,
    )
  },
  methods: {
    cache() {
      localStorage.setItem('data', JSON.stringify(this.$data));
    },
  },
}
```
