---
标题: UniApp 和 WebView 双向通信
描述: 
封面: 
uid: 20230507140131136
aliases: []
tags:
  - 计算机/前端/uni-app
  - 计算机/前端/通信
  - 计算机/前端/WebView
cssclasses: 
创建时间: 2023-05-07 14:01:31
更新时间: 2024-01-22 16:57:41
---

# UniApp 和 WebView 双向通信

## WebView 向 UniApp 通信

### Vue

- `index.html` 导入 UniApp-Sdk

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

### UniApp

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

## UniApp 向 WebView

## UniApp

```javascript
let currentWebview = _this.$scope.$getAppWebview();
let wv = currentWebview.children()[0];
let params = JSON.stringify({
  function: "handleLabelScanCode",
  data,
});
wv.evalJS("getUniAppMessage(" + params + ")");
```

## Vue

```javascript
export default {
  mounted() {
    window.getUniAppMessage = (e) => {
      if (e.function) {
        this[e.function](e.data);
      }
    };
  },
}
```
