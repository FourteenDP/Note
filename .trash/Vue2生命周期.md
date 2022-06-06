---
aliases: 
tags: 
date created: 2022-06-06 22:37:59
date modified: 2022-06-06 22:38:31
---

# VUE2生命周期

## 简介

- Vue实例有一个完整的生命周期，也就是说从开始创建、初始化数据、编译模板、挂在DOM、渲染-更新-渲染、卸载等一系列过程，我们成为Vue 实例的生命周期，钩子就是在某个阶段给你一个做某些处理的机会。

![Vue生命周期](https://picbed.fourteen.top/20210830_003514.png)

## [#](HTTPS://WWW.FOURTEEN.TOP/PAGES/D4959F/#BEFORECREATE-%E5%88%9B%E5%BB%BA%E5%89%8D)BEFORECREATE（创建前）

- 在实例初始化之后，进行数据侦听和时间/侦听器的配置之前同步调用
- 这个时候，数据还没有挂载呢，只是一个空壳
- 此时组件的选项对象还未创建，el 和 data 并未初始化，因此无法访问methods， data， computed等上的方法和数据。

## [#](HTTPS://WWW.FOURTEEN.TOP/PAGES/D4959F/#CREATED-%E5%88%9B%E5%BB%BA%E5%90%8E)CREATED（创建后）

- 在实例创建完成后被立即同步调用。
- 以下内容已被配置完毕：数据侦听、计算属性、方法、事件/侦听器的回调函数。然而，挂载阶段还没开始，且 `$el` property 目前尚不可用
- 这里更改数据不会触发`updated`函数
- 渲染前倒数第二次更改数据的机会，不会触发其他钩子函数，一般可以在这里做初始化数据

## [#](HTTPS://WWW.FOURTEEN.TOP/PAGES/D4959F/#BEFOREMOUNT-%E6%8C%82%E8%BD%BD%E5%89%8D)BEFOREMOUNT(挂载前)

- 在挂载开始之前被调用：相关的 `render` 函数首次被调用
- 虚拟dom已经创建完成，这里也可以更改数据，不会触发`updated`
- 渲染前最后一次更改数据的机会，不会触发其他钩子，一般可以在这里做初始化数据
- 实例已完成以下配置：编译模板，把data里面的数据和模板生成html，完成el和data初始化

## [#](HTTPS://WWW.FOURTEEN.TOP/PAGES/D4959F/#MOUNTED-%E6%8C%82%E8%BD%BD%E5%AE%8C%E6%88%90)MOUNTED（挂载完成）

- 实例被挂载后调用
    
- 组件已经出现在页面中，数据、真是dom已处理好，事件都已经挂载好了，可以在这里操作真是dom等事情
    
- 模板中的HTML渲染到HTML页面中，此时一般可以做一些ajax操作
    
- 这时 `el` 被新创建的 `vm.$el` 替换了。如果根实例挂载到了一个文档内的元素上，当 `mounted` 被调用时 `vm.$el` 也在文档内
    
- 注意 `mounted` **不会**保证所有的子组件也都被挂载完成。如果你希望等到整个视图都渲染完毕再执行某些操作，可以在 `mounted` 内部使用 vm.$nextTick
    

## [#](HTTPS://WWW.FOURTEEN.TOP/PAGES/D4959F/#BEFOREUPDATE-%E6%9B%B4%E6%96%B0%E5%89%8D)BEFOREUPDATE（更新前）

- 在数据发生改变后，DOM 被更新之前被调用。这里适合在现有 DOM 将要被更新之前访问它，比如移除手动添加的事件监听器。
- 该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务器端进行
- 这里不能更改数据，否则会陷入死循环

## [#](HTTPS://WWW.FOURTEEN.TOP/PAGES/D4959F/#UPDATED-%E6%9B%B4%E6%96%B0%E5%90%8E)UPDATED（更新后）

- 这里不能更改数据，否则会陷入死循环
- 数据已完成更改，dom也重新render完成
- 可以执行依赖于 DOM 的操作
- 应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之
- 注意，`updated` **不会**保证所有的子组件也都被重新渲染完毕。如果你希望等到整个视图都渲染完毕，可以在 `updated` 里使用 vm.$nextTick

## [#](HTTPS://WWW.FOURTEEN.TOP/PAGES/D4959F/#BEFOREDESTROY-%E9%94%80%E6%AF%81%E5%89%8D)BEFOREDESTROY（销毁前）

- 在实例销毁前调用，实例任然完全可用

## [#](HTTPS://WWW.FOURTEEN.TOP/PAGES/D4959F/#DESTROYED-%E9%94%80%E6%AF%81%E5%90%8E)DESTROYED（销毁后）

- 实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。

## [#](HTTPS://WWW.FOURTEEN.TOP/PAGES/D4959F/#ERRORCAPTURED-%E6%8D%95%E8%8E%B7%E5%90%8E%E4%BB%A3%E7%BB%84%E4%BB%B6%E9%94%99%E8%AF%AF)ERRORCAPTURED（捕获后代组件错误）

- 在子组件发生错误时调用

## [#](HTTPS://WWW.FOURTEEN.TOP/PAGES/D4959F/#ACTIVATED-%E8%A2%AB-KEEP-ALIVE-%E7%BC%93%E5%AD%98%E7%9A%84%E7%BB%84%E4%BB%B6%E6%BF%80%E6%B4%BB%E6%97%B6%E8%B0%83%E7%94%A8)ACTIVATED（被 KEEP-ALIVE 缓存的组件激活时调用）

# DEACTIVATED（被 KEEP-ALIVE 缓存的组件失活时调用
