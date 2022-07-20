---
title: UniApp-WebView 向应用通信
aliases: 
tags: 
date created: 2022-07-20 13:58:09
date updated: 2022-07-20 14:08:53
---

# UniApp-WebView 向应用通信

## Vue

- `index.html`

```html
<script type="text/javascript" src="https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js"></script>
```

- `App.vue`

```javascript
mounted() {
    this.$nextTick(() => { 
 document.addEventListener("UniAppJSBridgeReady",  () => {
        uni.getEnv(function (res) {
          console.log("当前环境：" + JSON.stringify(res));
        });
      });
    });
  },
```

- 向应用发送

```javascript
uni.postMessage({
  data: {
     type: "data",
     data: "message",
  },
});
```

## UniApp

```html
<template>
  <view>
    <web-view :webview-styles="webviewStyles" src="http://192.168.3.140:8888/" @message="getMessage">
    </web-view>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        webviewStyles: {
          progress: {
            color: '#FF3333'
          }
        }
      }
    },
    methods: {
      getMessage(e) {
        console.log(e);
      }
    }
  }
</script>
```
