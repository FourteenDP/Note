---
标题: 9、web 前端面试宝典
描述: 
封面: 
uid: "20230507175233827"
aliases: []
tags:
  - 面试题
cssclasses: 
创建时间: 2023-05-07 17:52:33
更新时间: 2024-01-22 16:57:27
---

# 9、web 前端面试宝典

## 一、HTML+CSS

### 1、移动端适配你是如何做的？

```
我在上家公司主要使用rem、vh、vw、百分比作单位，使用flex进行布局、利用viewport进行适配，以iphone6机型为基准适配其他机型 ，对具有刘海屏的手机做特殊处理。当然还有其他的适配方案。
```

### 2、如何让一个盒子上下左右都居中

```
1、绝对定位、左50%、上50%、margin-left：负的盒子宽的一半、margin-top：负的盒子高的一半
2、绝对定位、上下左右为0、margin：0 auto
3、使用弹性盒实现、使用display：flex、justify-content：center、align-items center
4、使用定位及变形、给元素绝对定位左50%、上50%、transform：translate（-50% ，-50%）

```

### 3、说说你的盒模型的理解

```
在HTML中，可以把元素看做盒子，每个盒子包括：实际内容（content）、内边距（padding）、边框（border）、外边距（margin），
1、标准盒模型（W3C标准盒模型）
标准盒模型（W3C盒子模型），即盒子模型的width（height）=设置的content的宽高+padding+border+margin

2、怪异盒模型（IE盒模型）
怪异盒模型（IE盒子模型），其盒模型的width（height）= 设置的width（height）+外边距margin

```

### 4、flex 的常用属性

```
父元素添加的属性有：
  display-flex    设置元素为弹性盒
  justify-content    控制子元素主轴排列方式
  align-items     控制子元素侧轴的排列方式
  align-content      控制多轴的排列方式
  flex-wrap      是否换行
  flex-direction    排列方式（行（row）、列（column））
  flex-flow      是flex-direction 和 flex-wrap 属性的复合属性，默认值是row nowrap
子元素添加的属性有：
  order：    定义元素的排列顺序，数值越小排列越靠前，默认为0.
  flex-grow：  定义元素在剩余空间如何放大，默认为0，即有剩余空间也不放大。
  flex-shrink：定义元素的缩小比例，默认为1，即如果空间不足，该元素将缩小。
  align-self：  设置子元素在纵轴的排列方式  可以覆盖父容器的align-items的设置。
  flex-basis：  定义在分配多余空间之前，元素占据主轴的空间。
  flex：    是flex-grow、flex-shrink、flex-basis的符合属性，默认值为0 1 auto。

```

### 5、遇到过浏览器兼容性问题

```
PC端：
  1、对低版本浏览器  需要使用css  hack（比如IE6/7 可以加* _ 的方式）
  2、去掉所有标签的默认样式，对所有的标签进行初始化（引入reset.css）
  3、Css3新增属性和选择器 低版本浏览器不支持，可以加相应的浏览器内核前缀(-webkit-  -moz- -o- -ms-)
  4、Html5新增标签浏览器不兼容，使用script标签内使用js创建标签，然后使用标签。（当然也可以使用js插  件(html5.js)，就不用我们自己创建标签，直接可以使用）
移动端：
  几乎不存在浏览器兼容性问题主要是对屏幕适配做一些兼容处理。比如使用rem、百分比、viewport的方式。

```

```
常见浏览器兼容问题有三类：html、css、javascript
  对于html兼容
    主要就是低版本浏览器不识别新增的语义化标签，我们可以在script标签内先进行创建标签，然后再使用，也可以使用js插件。
  css兼容问题：
    1、引入reset.css的将所有标签的默认样式去掉，normalize.css的作用将所有的标签的样式统一化
    2、css Hack
      1)低版本的浏览器
      2）CSS3新增的属性和选择器加上相关浏览  内核
    1、不同浏览器默认的内外边距不同（初始化页面中所有标签设置内外边距为0）
    2、IE6下元素浮动之后margin变成双倍（我们可以将元素转为行内块元素进行解决）
  Js方面的兼容问题：
    一般需要自己封装一个方法（函数），实现浏览器兼容性处理
    1、获取浏览器窗口大小
    2、Event对象 参数问题  绑定事件方式
    3、阻止默认行为、阻止冒泡
    这些都需要有兼容性写法
```

### 6、浮动问题你是怎么解决的?

```
1、父元素设置高度
2、给父元使用overflow：hidden
3、在父元素内多写一个元素，使用行内样式写入style=“clear：both”；
4、使用万能清除浮动法
  .clearfixed:after{
    content:””;
    clear:both;
    height:0;
    display:block;
    overflow:hidden
  }

```

### 7、移动端适配 meta 标签 (viewport) 有哪些属性

| width         | 设置 layout viewport 的宽度，为一个正整数，或字符串 "width-device" |
| ------------- | ------------------------------------------------------------ |
| initial-scale | 设置页面的初始缩放值，为一个数字，可以带小数                 |
| minimum-scale | 允许用户的最小缩放值，为一个数字，可以带小数                 |
| maximum-scale | 允许用户的最大缩放值，为一个数字，可以带小数                 |
| user-scalable | 是否允许用户进行缩放，值为 "no" 或 "yes", no 代表不允许，yes 代表允许 |
|               |                                                              |

### 8、position 定位有那些属性及区别是什么

```
一共有五个分别是： relative相对定位、absolute绝对定位、fixed固定定位、static（四大体可）默认值、inherit（音嗨瑞特）。
常用的有三个：relative、absolute、fixed
特点：
  Relative相对定位：元素本身位置会被保留，是根据自身位置进行偏移
  Absolute绝对定位：元素本身位置不被保留，根据离他最近的具有定位属性的父元素进行偏移，如果父级没有定位，那么会根据根元素进行偏移。
  Fixed固定定位：元素本身位置不被保留，根据浏览器窗口进行偏移。
  static  默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right z-index 声明）。
   inherit 规定从父元素继承 position 属性的值。

```

### 9、IOS 端是如何适配的

```
IOS端的适配
  1、分析机型:整体上把现有的iOS屏幕分为两大类，非全面屏和全面屏
    非全面屏：（6、6s、7、8）和Plus系列（6 Plus、6s Plus、7 Plus、8 Plus)
    全面屏： iPhoneX  iPhoneXR  iPhone 11 等
    屏幕尺寸总结，iPhone在逻辑像素共有四种，375x667，375x812，414x736，414x896
  2、安全区域
    非全面屏都是矩形，整个屏幕都是安全区域。
    全面屏受到大圆角、刘海以及底部的影响，UI图更需要考虑安全区域
    顶部44pt、 底部34pt
  3、以iphone6为进行制作去适配其它机型，对iphoneX单独处理

```

### 10、了解 2X 图和 3X 图吗

```
因为手机的dpr有2.0和3.0的，所以设计师会切出2X和3X图，我们制作的时候可以根据dpr的不同引入不同的图片
使用的是media(媒体查询)

```

### 11、H5 怎么引用原生代码，和原生怎么引入 H5 代码

```
通过JSbrige

```

### 12、HTML5 的新特性

```
1. 新增绘画 canvas元素
2. 新增媒介回放 video 和 audio 元素
3. 新增本地离线存储 localStorage 和sessionStorage
4. 新增语义化标签： header、footer、nav、section、article等
5. 新增表单控件，比如 calendar(日历)、date、time、email、url、search等

```

### 13、CSS3 的新特性

```
1、新增了选择器：first-of-type  last-of-type  nth-of-type...
2、新增的属性：圆角  盒子阴影   文字阴影  盒子大小  RGBA透明度  服务器端字体  边框图片  多栏布局  多背景图  媒体查询  wordwrap  变形  动画,flex布局

```

### 14、如何处理 HTML5 新标签的浏览器兼容问题？

```
方法一 :
  1、使用静态资源的html5shiv包
    <!--[if lt IE9]>
      <script src="http://cdn.static.runoob.com/libs/html5shiv/3.7/html5shiv.min.js">    </script>
  <![endif]-->
  2、载入后，初始化新标签的css
  header, section, footer, aside, nav, main, article, figure { display: block; }
方法二:

  IE6/IE7/IE8支持通过document方法产生的标签，利用这一特性让这些浏览器支持HTML5新标签

```

### 15、在地址栏输入 url 之后发生了什么（http 请求是如何解析文档的）

```
1.DNS解析，将域名地址解析为ip地址（当输入url回车之后）
  读取浏览器DNS缓存、读取系统DNS缓存、路由器DNS缓存、网络运营商DNS缓存
  递归搜索   blog.baidu.com
      .com域名下查DNS解析
      .baidu域名下查DNS解析
      .blog域名下查DNS解析
        出错了
2.（在跟服务器交互之前）TCP链接  TCP三次握手
    第一次握手：由浏览器发起，告诉服务器我要发送请求了
    第二次握手：由服务器发起，告诉浏览器我准备接收了，你赶紧发送吧。
    第三次握手：由浏览器发送，告诉服务器，我马上就发了。准备接收吧。

3.发送请求
  请求报文，HTTP协议的通信内容
4.接受响应
  响应报文
5.渲染页面
  -遇见HTML标记，浏览器会调用HTML解析器，解析成Token标记（对象上的属性名和属性值）并构成DOM树
  -遇见style/link标记，浏览器调用css解析器，处理css标记并构建cssDOM树
  -遇到script标记，调用javascript解析器，处理script代码（绑定事件，修改dom树/cssdom树）
  -将dom树和cssdom树合并成一个（render）渲染树
  -根据渲染树来计算布局，计算每个节点的几何信息（布局）
    -将各个节点颜色绘制到屏幕上（渲染）

  注意：

    这个5个步骤不一定按照顺序执行，如果dom树或cssdom树被修改了，可能会执行多次布局和渲染，往往实际页面中，这些步骤都会执行多次的。

6.断开链接 TCP的四次挥手
  第一次挥手：由浏览器发起的，发送给服务器，我东西发送完了（请求报文），你准备关闭吧。
  第二次挥手：由服务器发起的，告诉浏览器，我东西接受完了（请求报文），我准备关闭了，你也准备吧。
  第三次挥手：由服务器发起，告诉浏览器，我东西发送完了（响应报文），你准备关闭吧。
  第四次挥手：由浏览器发起，告诉服务器，我东西接受完了（响应报文），我准备关闭了，你也准备吧


重绘和回流
  什么是回流
当render tree中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建。这就称为回流(reflow)。每个页面至少需要一次回流，就是在页面第一次加载的时候，这时候是一定会发生回流的，因为要构建render tree。在回流的时候，浏览器会使渲染树中受到影响的部分失效，并重新构造这部分渲染树，完成回流后，浏览器会重新绘制受影响的部分到屏幕中，该过程成为重绘。

什么是重绘
  当render tree中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如background-color。则就叫称为重绘。

区别：
他们的区别很大：
回流必将引起重绘，而重绘不一定会引起回流。比如：只有颜色改变的时候就只会发生重绘而不会引起回流
当页面布局和几何属性改变时就需要回流
比如：添加或者删除可见的DOM元素，元素位置改变，元素尺寸改变——边距、填充、边框、宽度和高度，内容改变
```

### 16、说说你对语义化的理解

```
1、去掉或者丢失样式的时候能够让页面呈现出清晰的结构；
2、有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
3、方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；
4、便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。
```

### 17、浏览器缓存

```
强制缓存优先于协商缓存进行，若强制缓存(Expires和Cache-Control)生效则直接使用缓存，若不生效则进行协商缓存(Last-Modified / If-Modified-Since和Etag / If-None-Match)，协商缓存由服务器决定是否使用缓存，若协商缓存失效，那么代表该请求的缓存失效，重新获取请求结果，再存入浏览器缓存中；生效则返回304，继续使用缓存。
```

## 二、Javascript

### 1、代码规范

```
1、变量  声明变量必须加上var关键字，而且每个var只声明一个变量，增加可读写。
2、常量 常量的命名方式：用大写字符，并用下划线分隔。
3、with(){}  尽量少用。
4、缩进  用4个空格作为一缩进，而不是使用tab
5、字符串过长截取   每行代码不超过80个字符。如代码过长，可使用+运算符拼接。
8、构造函数  对于构造函数，命名采用首字母大写，其他函数一律小写。
9、注释  合理的加上注释，有利于后期维护，提高可读性。
10、{}和[]   使用{}代替new Object()，使用[]代替new Array()
11、单引号（'） 尽量使用单引号（'），只在JSON文件中使用双引号。
12、变量和函数声明  变量名和函数名在JavaScript机制下会发生声明提升（也就是会提前到顶部声明），所以建议变量和函数应该在使用前声明。
13、使用===和!==代替==和!=  在JavaScript中，比较运算符进行计算时会进行强制转换，==和!=会产生一些意想不到的结果，所以应该用“严格相等”===
14、换行  在语句块和下一个语句之间留一个空行，提高可读性。
15、命名  构造函数或类名使用驼峰式命名
16、语句  对于复合语句，if, for, while, do, switch, try … catch 等代码体，函数定义的函数体，对象的定义等都需要放在花括号'{}'里面。
17、for-in  对于数组，尽量避免使用for-in
```

### 2、数组和字符串常用方法

| **方法**      | **含义**                                                     | **发音/邪音** |
| ------------- | ------------------------------------------------------------ | ------------- |
| concat()      | 将多个数组拼接成一个数组                                     |               |
| join()        | 将数组转化为字符串                                           |               |
| pop()         | 删除数组最后一个元素                                         |               |
| shift()       | 删除数组第一个元素                                           |               |
| reverse()     | 数组翻转                                                     |               |
| push()        | 数组末尾添加元素                                             |               |
| unshift()     | 数组开头添加元素                                             |               |
| sort()        | 数组排序                                                     |               |
| indexOf()     | 主要用于在数组中查找数组元素第一次出现的位置                 |               |
| lastIndexOf() | 主要用于在数组中查找数组元素最后一次出现的位置               |               |
| splice()      | 方法向/从数组中添加/删除项目，然后返回被删除的项目           |               |
| slice()       | 以从数组中返回 start 下标开始取值，直到 end 下标结束.            |               |
| filter()      | 对数组中的每个元素执行相同的函数，将结果组合成一个新数组。|               |
| map()         | 主要用于对每个数组里面的元素执行相同的函数来创建新的数组     |               |
| some()        | 方法用于检测数组中的元素是否满足指定条件，返回值为布尔类型   |               |
| every()       | 主要用于检查数组中每个元素是否符合函数的条件，如果其中有一个不符合，则返回 false |               |
| reduce()      | 求和操作，主要是对数组中的每个元素执行函数，生成一个值。|               |
| flat()        | 将多维数组转成一维数组                                       |               |
| find()        | 查找数组第一个符合条件的元素                                 |               |
| findIndex()   | 查找数组第一个符合条件的元素的下标                           |               |
| from()        | 将类数组转真正的数组                                         |               |
| **方法**      | **含义**                                                     | **发音/邪音** |
| substring()   | 截取字符串                                                   |               |
| charAt()      | 查找字符串                                                   |               |
| toUpperCase() | 转大写                                                       |               |
| toLowerCase() | 转小写                                                       |               |
| split()       | 字符串转数组                                                 |               |
| indexOf()     | 返回子字符串第一次出现的位置                                 |               |
| lastIndexOf() | 返回子字符串最后一次出现的位置                               |               |
| slice()       | 截取字符串                                                   |               |
| replace()     |                                                              |               |
| padStart()    | 用于头部补全                                                 |               |
| padEnd()      | 用于尾部补全                                                 |               |
| trimStart()   | 消除字符串头部的空格                                         |               |
| trimEnd()     | 消除尾部的空格`                                              |               |
| trim()        | 方法用于删除字符串的头尾空白符                               |               |
| repeat()      |                                                              |               |
| startsWith()  | 返回布尔值，表示参数字符串是否在原字符串的头部。|               |
| endsWith()    | 返回布尔值，表示参数字符串是否在原字符串的尾部。|               |

### 3、JS 的三大组成部分

```
ECMAscript:主要用来描述javascript的语法部分
BOM:结合js及BOM提供的属性和方法对浏览器进行操作
DOM：结合js及BOM提供的属性和方法对HTML和XML文档进行操作
```

### 4、JS 的数据类型？怎么检测数据类型的？

```
Js的基本数据类型有：string、number、boolean、null、undefined，ES6中symbol
复杂数据类型有：object

typeof()  intanceof()  constructor()

typeof()测试数据类型的时候结果：
  “number”、“string”、“boolean”、“undefined”、“object”、“function”

如何判断一个元素是否是数组
  1、instanceof 操作符判断
  2、arr.constructor === Array
  3、Array.isArray(arr)
```

### 5、JS 强制类型转换

| **方法**   | **含义**       | **发音/邪音** |
| ---------- | -------------- | ------------- |
| parseInt() | 转换数值类型   | 怕思因特      |
| Number()   | 转换数值类型   | 囊波儿        |
| ToString() | 转换字符串类型 | 兔思吹        |
| Boolean()  | 转换对象类型   | 布里恩        |

### 6、常见的 dom 操作？

| **方法**             | **含义**             | **发音/邪音**   |
| -------------------- | -------------------- | --------------- |
| createElement('div') | 创建 dom 元素          | 亏爱特 爱里们特 |
| appendChild()        | 把节点添加到某元素中 | 额喷的 拆哦的   |
| parentNode           | 寻找父节点           | 拍润特 耨的     |
| remove()             | 删除节点             | 瑞 木屋         |
| removeChild()        | 删除子节点           | 瑞木屋 球儿得   |
| insertBefore()       | 之前插入子节点       |                 |
| children             | 所有子节点           |                 |
| nodeType             | 节点类型             |                 |
|                      |                      |                 |

### 7、数组去重的方法

```
数组去重的方法有很多，我先说一下我常用的方法
1、首先声明一个新数组，并遍历原数组使用indexOf方法进行判断新数组中是否有原数组中的元素，如果没有，就往新数组里添加，如果有则不添加

2、使用new Set 进行去重，然后再转为数组
   var arr1 = [...(new Set(arr))]
   var arr1 = Array.from(new Set(arr))
3、filter  +  indexOf
    //var arr1 = arr.filter(( item,index) = {
    return  arr.indexOf(item) === index
    })
```

### 8、如何阻止事件冒泡

```
非IE浏览器使用stopPropagation()方法可以清除事件冒泡    邪音：思倒破 破破给甚
IE浏览器使用cancelBubble()清除事件冒泡
```

### 9、数组的冒泡原理及其实现

```
原理：相邻的两项进行比较，如果前面的一项大于（小于）后面的项，则交换位置。直到最大（最小）数沉底为止。
 var ary=[21,32,2,9,4];
        function bubbleSort(ary){
            for(var i=0; i<ary.length; i++){//正在进行第几次循环
                for(var j=0; j<ary.length-1-i; j++){//本次循环需要执行几次
                    if(ary[j]>ary[j+1]){
                        var tmp=ary[j];
                        ary[j]=ary[j+1];
                        ary[j+1]=tmp;
                    }
                }
            }
            return ary;
        }
       document.write(bubbleSort(ary));
```

### 10、怎么用 JS 获取一个盒子的宽高

```
var box = document.getElementById("box")
//获取元素设置的高度，为带单位的字符串类型
var contentHeight = window.getComputedStyle(box,null).height
//获取元素设置的高度，为不带单位的数值类型
box.clientHeight
//获取盒子自身实际高度，为不带单位的数值类型
box.offsetHeight
```

### 11、== 和 ===的区别

```
==   会自动转换类型再去比较值是否相等
===  不会自动转类型，并且进行比较时值与数据类型都要相等
```

### 12、undefinde 和 null 的区别

```
undefined是访问一个初始化变量时返回的值，而null是访问一个不存在的对象时所返回的值。
因此可以把undefined看作是一个空变量，null看作是一个空对象。
```

### 13、JS 遇到过哪些兼容性问题

```
是要处理IE浏览器和非IE浏览器之间的兼容

1、获取滚动距离的兼容处理
  document.documentElement.scrollTop    非IE
    document.body.scrollTop   ==> 兼容IE
2、阻止冒泡的兼容处理
  e.stopPropagation()  非IE   ||    e.cancelBubble 兼容IE
3、阻止默认行为
  preventDefault( ) 非IE  ||    return  false  兼容IE
4、DOM2添加监听事件的兼容处理
  addEventListener 非IE || attachEvent  兼容IE
5、删除DOM2事件监听
  removeEventListener 非IE  || detachEvent  兼容IE
    。。。
```

### 14、window.onload 和 $(document).ready() 的区别

```
1、window.onload和ready都是属于就绪函数、区别是window.onload只执行一次、ready会执行多次。
2、window.onload是在页面资源(比如图片和媒体资源都加载完成再执行，它的加载速度远慢于DOM的加载速度)
3、ready是在dom树结构加载完成后就会执行
4、所以ready要比onload要先执行
```

### 15、说说你对 this 的理解

```
this代表的是当前对象，由于执行环境不同，所代表的对象也不同。
比如：
  1、在DOM0事件中this指向调用这个函数的对象。
  2、在构造函数中this指向创建新的实例
  3、在箭头函数中this指向当前函数外离他最近的对象
  4、当函数为全局函数时this指向 window  （在全局范围内，这代表全局对象，例如web浏览器中的 window 对象）
  5、在call和apply中，this会指向第一个参数
  总结：那个对象触发的函数就会指向那个对象。
```

### 16、作用域及作用链

```
作用域:变量或者函数的可访问的范围
   全局作用域： 在函数的外部使用var声明的变量，可以在任意位置访问；
   局部作用域（函数作用域）：在函数中使用var关键字声明的变量，只能在函数的内部访问;
  ES6又增加了一种作用域：块级作用域

 作用域链：变量的查找顺序，查找顺序是由内到外逐级查找并且不可逆。
```

### 17、深拷贝和浅拷贝

```
都是引用数据类型来说的，基本数据类型没有深拷贝和浅拷贝一说
浅拷贝\深拷贝
  浅复制只复制一层对象的属性，而深复制则递归复制了所有层级
一、对象的深浅拷贝
深拷贝
1、原生实现
function deepCopy(p,c){
    var i;
    c = c||{};
    for(i in p){
        if(p.hasOwnProperty(i)){
            if(typeof(p[i])==="object"){
                c[i] = Array.isArray(p[i])?[]:{};
                deepCopy(p[i],c[i]);
            }else{
                c[i] = p[i];
           }
        }
    }
    return c;
}

2、使用 JSON 全局对象的 parse 和 stringify 方法来实现深复制
    function jsonClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    var clone = jsonClone({ a:1 });
 (https://www.cnblogs.com/kongxy/p/4618173.html)
 对象的属性分为可枚举和不可枚举之分，它们是由属性的enumerable值决定的。可枚举性决定了这个属性能否被for…in查找遍历到。for...in遍历可枚举的属性和原型链上的可枚举的属性。
这种方法有一个缺点就是只能复制对象中的可枚举属性，其他属性不可复制，例如function。这种简单粗暴的方式有局限性，当值为undefined、function、symbol会在转换过程中被忽略。

这时可以采用如下方法：
function getType(obj) {
  //tostring会返回对应不同的标签的构造函数
  var toString = Object.prototype.toString;
  var map = {
    '[object Boolean]'  : 'boolean',
    '[object Number]'   : 'number',
    '[object String]'   : 'string',
    '[object Function]' : 'function',
    '[object Array]'    : 'array',
    '[object Date]'     : 'date',
    '[object RegExp]'   : 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]'     : 'null',
    '[object Object]'   : 'object'
  };
  if(obj instanceof Element) {
    return 'element';
  }
  return map[toString.call(obj)];
}

function deepCopy(obj) {
  var type = getType(obj);
  var obj;
  if(type === 'array'){
    obj = [];
  } else if(type === 'object'){
    obj = {};
  } else {
    //不再具有下一层次
    return obj;
  }
  if(type === 'array'){
    for(var i = 0, len = obj.length; i < len; i++){
      obj.push(deepCopy(obj[i]));
    }
  } else if(type === 'object'){
    for(var key in obj){
      obj[key] = deepCopy(obj[key]);
    }
  }
  return obj;
}

3、$.extend(),设置为true是深拷贝
var x = {
    a: 1,
    b: { f: { g: 1 } },
    c: [ 1, 2, 3 ]
};

var y = $.extend({}, x),          //shallow copy
    z = $.extend(true, {}, x);    //deep copy

y.b.f === x.b.f       // true
z.b.f === x.b.f       // false

4、Object.assign(...)

对象的浅拷贝
1、自己封装函数实现
 var obj = { a:1, arr: [2,3] };
 var shallowObj = shallowCopy(obj);

function shallowCopy(src) {
  var dst = {};
  for (var prop in src) {
    if (src.hasOwnProperty(prop)) {
      dst[prop] = src[prop];
    }
  }
  return dst;
}
2、直接赋值
  var obj = {a:1};
  var obj1 = obj;
二、数组的深浅拷贝
浅拷贝
1、直接赋值
  var arr = [12,34,343];
  var arr1 = arr;
2、自己封装函数实现

深拷贝
1、自己封装函数实现
2、slice()
// 当数组里面的值是基本数据类型，比如String，Number，Boolean时，属于深拷贝
// 当数组里面的值是引用数据类型，比如Object，Array时，属于浅拷贝
3、concat()
// 当数组里面的值是基本数据类型，比如String，Number，Boolean时，属于深拷贝
4、使用扩展运算符实现深拷贝
// 当value是基本数据类型，比如String，Number，Boolean时，是可以使用拓展运算符进行深拷贝的
// 当value是引用类型的值，比如Object，Array，引用类型进行深拷贝也只是拷贝了引用地址，所以属于浅拷贝
```

### 18、ES6 新特性

```
  1.  模块化开发
  2.  箭头函数
  3.  函数参数默认值
  4.  模板字符串
  5.  解构赋值
  6.  对象属性简写
  7.  Promise
  8.  let与const
  9.  class 类
  10.  扩展运算符
  11、新增了数组、字符串、对象的方法
  12、for...of
```

### 19、箭头函数和普通函数的区别

```
区别：
  1、语法不同。
  2、箭头函数是匿名函数，不能作为构造函数，不能使用new。
  3、箭头函数不能绑定arguments，取而代之用rest参数...解决。
  4、箭头函数没有原型属性。
  5、箭头函数不绑定this，会捕获其所在的上下文的this值，作为自己的this值。
  6、箭头函数不能当做Generator函数,不能使用yield关键字.
```

### 20、let Const Var 的区别

```
1、var声明的变量会挂载到window上，而let和const声明的变量不会。
2、var声明变量存在变量声明提升，let和const不存在变量声明提升。
3、let和const声明的变量有块作用域。
4、同一作用域下let和const不能声明同名变量，而var可以。
5、let和const声明的变量存在 暂时性死区。
6、const声明变量的时候必须赋初始值
```

### 21、说说对 promise 的理解

```
Promise是异步编程的一种解决方案，主要解决由于异步请求的多层嵌套造成的回调地狱问题。
解决异步编程的方案：async await  generator promise
Promise有三个状态和两个过程
  三个状态：pending（初始状态）、fulfilled（成功状态）、rejected（失败状态）；

  两个过程：pending==>fulfilled的过程和pending==>rejected的过程。
  缺点：promise的状态一旦改变则不会再变，是不可逆的,无法阻止状态的改变

  方法：Promise是一个构造函数，自身有all、race、reject、resolve这几个方法，原型上有then和catch方法，让异步代码像同步一样执行。


  all方法是：只有所有的promise对象都成功了，就会调then方法，如果有一个是失败的就会调catch方法
  race方法是：如果有一个成功的就会调then方法，如果第一个是失败的就会调catch方法

  什么时候使用all方法：比如：当一个页面有多个ajax请求，想请求结果都成功之后再处理结果。

js他是单线程的，但是它分为同步任务和异步任务，同步任务会放到主线程中去执行，

在ES6中由于增加了promise，所以在异步任务中又分为宏任务和微任务
宏任务：setTimeout、setInterval、requestAnimationFrame
  1、宏任务所处的任务队列就是宏任务队列
  2、第一个宏任务队列中只有一个任务：执行主线程的js代码
  3、宏任务队列可以有多个
  4、当宏任务队列中的任务全部执行完会查看是否有位任务队列，如果有先执行微任务中的所有任务，如果没有就查看是否有宏任务
微任务：promise.then(回调)   process.nexttick(  )
  1、微任务所处的队列就是微任务队列
  2、只有一个微任务队列
  3、在上一个宏任务队列执行完毕后执行，如果有为任务队列就会执行微任务中的所有任务。
    首先在宏任务的队列中选取出第一个任务，执行完毕后取出为任务队列中的所有任务顺序执行，之后再取出宏任务，周而复始，直至两个队列的任务都取完。


    setTimeout(function(){
            console.log(1);
        },0);
        new Promise(function(a,b){
            console.log(2);
            for(var i=0;i<10;i++){
                i==9&&a();
            }
            console.log(3)
        }).then(function(){
            console.log(4)
        });
        console.log(5);

  正确输出顺序为：2，3，5，4，1；

  微任务先执行，宏任务后执行
```

### 22、http 请求

```
指从客户端到服务器端的请求消息
```

### 23、http 请求的方式

```
HTTP请求的方法：
  HTTP1.0定义了三种请求方法： GET, POST 和 HEAD方法。
  HTTP1.1新增了五种请求方法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT 方法
```

### 24、get 请求与 post 请求的区别

```
1、get和post在HTTP中都代表着请求数据，其中get请求相对来说更简单、快速，效率高些
2、get相对post安全性低
3、get有缓存，post没有
4、get体积小，post可以无限大
5、get的url参数可见，post不可见
6、get只接受ASCII字符的参数数据类型，post没有限制
7、get请求参数会保留历史记录，post中参数不会保留
8、get会被浏览器主动catch，post不会，需要手动设置
9、get在浏览器回退时无害，post会再次提交请求


get:一般用于信息获取，使用url传递参数，对所发送信息的数量也有限制，一般在2000个字符，有的浏览器是8000个字符
post：一般用于修改服务器上的资源，对所发送的信息没有限制（post通过请求体将数据传向后台）
  在以下情况中，使用post请求
  1.无法使用缓存文件（更新服务器上的文件或数据库）
  2.向服务器发送大量数据（post没有数据限制）
  3.发送包含未知字符的用户输入时，post比get更稳定也更可靠
```

### 25、http 请求的状态码

```
http的状态码有很多
http状态码分为五类：
  1开头的代表信息状态码
  2开头的代表成功状态码
  3开头的代表重定向状态码
  4开头的代表客户端错误状态码
  5开头代表服务端错误状态码
常用状态码有：
  200：请求成功
  301：被请求的资源已经永久移动到新位置
  304：所请求的资源未修改（缓存）。
  404：服务器无法根据客户端的请求找到资源
  500：服务器内部错误，无法完成请求
  503：由于超载或系统维护，服务器暂时无法处理客户端请求
301与303的区别：
  301转向(或叫301重定向，301跳转)是当用户或搜索引擎向网站服务器发出浏览请求时，服务器返回的HTTP数据流中头信息(header)中的状态码的一种，表示本网页永久性转移到另一个地址。

  303状态码：对于POST请求，它表示请求已经被处理，客户端可以接着使用GET方法去请求Location里的URI。
```

### 26、网络请求的方式

```
1、原生ajax
2、jq中的ajax
3、es6中的fetch
4、vue项目及react项目中使用axios.js
5、jsonp
6、vue1.0中使用vue-resource.js
```

### 27、同源策略

```
是浏览器的一个重要的安全策略，浏览器不允许访问不同源的资源。如果缺少了同源策略，浏览器很容易受到 XSS、 CSFR 等攻击。由 Netscape 公司 1995 年引入浏览器，它是浏览器最核心也最基本的安全功能，现在所有支持 JavaScript 的浏览器都会使用这个策略.
```

### 28、同源

```
同协议、同域名、同端口
```

### 29、跨域

```
访问了不同源的资源就是跨域
```

### 30、跨域解决方案

```
1、nginx代理跨域
2、通过jsonp跨域
```

### 31、本地存储都有什么及区别

```
本地存储有localStorage、sessionStorage和cookie，但他们之间是有区别的。
总结：
  它们都是用来保存信息的。cookie兼容所有的浏览器，低版本的浏览器不支持localStorage和sessionStorage（IE6,7,8）
    cookie需要程序员自己封装函数实现，localStorage、sessionStorage提供了友好的API
生成及存储位置
  cookie服务器端生成，通过浏览器存储在客户端，每次发送请求的时候会携带cookie.
  localStorage、sessionStorage，客户端生成，存储在客户端（浏览器端）和服务器没有半毛钱关系
大小区别：
  localStorage、sessionStorage一个源下最多只能存储5MB左右,(可以存储5m)
  cookie有存储的大小限制，一般一个源（一个域下）只能存储4KB内容(cookie只能存储4kb)。
有效期的区别：
  localStorage可以长期存储数据，浏览器关闭后数据不丢失，除非手动删除。
  sessionStorage存储数据在浏览器关闭时自动删除。
  Cookie可设置过期时间，过期之后浏览器关闭后自动消失。
安全问题：
  cookie会把消息上传到服务器端最不安全。
  localstorage和sessionstorage都会留在本地所以更安全。

localStorage与sessionStorage的区别：
    localStorage只要在相同的协议、相同的主机名、相同的端口下，即同源就能读取/修改到同一份localStorage数据。
    sessionStorage比localStorage更严苛一点，除了协议、主机名、端口外，还要求在同一窗口（也就是浏览器的标签页）下。

    存入到 localStorage 和 sessionStorage 的都是字符串，因此如果是要将一个对象存入 localStorage/sessionStorage 的话，是需要先用 JSON.stringify() 序列化对象的，读取时也需要 JSON.parse() 转换为真正的 JS 对象。

```

### 32、了解 Eventloop（事件循环）吗？

```
js是单线程语言，一次只能完成一个任务，如果同时完成多个任务怎么办？js把任务分为同步和异步任务，把所有的同步放到主线程上去执行，把所有的异步任务放到事件队列里去，当所有的同步任务都执行完之后，去事件队列中看看有没有没有执行的异步任务，如果有把需要先执行的异步任务拉到主线程上去执行，当这个任务执行完后，再去事件队列里看有没有没完成的任务，如果有再把任务拉到主线程去执行，这样就形成一个事件循环。



js他是单线程的，但是它分为同步任务和异步任务，同步任务会放到主线程中去执行，

在ES6中由于增加了promise，所以在异步任务中又分为宏任务和微任务
宏任务：setTimeout、setInterval、requestAnimationFrame
  1、宏任务所处的任务队列就是宏任务队列
  2、第一个宏任务队列中只有一个任务：执行主线程的js代码
  3、宏任务队列可以有多个
  4、当宏任务队列中的任务全部执行完会查看是否有位任务队列，如果有先执行微任务中的所有任务，如果没有就查看是否有宏任务
微任务：promise.then(回调)   process.nexttick(  )
  1、微任务所处的队列就是微任务队列
  2、只有一个微任务队列
  3、在上一个宏任务队列执行完毕后执行，如果有为任务队列就会执行微任务中的所有任务。
    首先在宏任务的队列中选取出第一个任务，执行完毕后取出为任务队列中的所有任务顺序执行，之后再取出宏任务，周而复始，直至两个队列的任务都取完。


    setTimeout(function(){
            console.log(1);
        },0);
        new Promise(function(a,b){
            console.log(2);
            for(var i=0;i<10;i++){
                i==9&&a();
            }
            console.log(3)
        }).then(function(){
            console.log(4)
        });
        console.log(5);

  正确输出顺序为：2，3，5，4，1；
```

### 33、谈谈你对 js 闭包的理解

```
闭包就是能够读取函数内部变量的函数
  优点：能够读取函数内部的变量，让这些变量一直存在于内存中，不会在调用结束后，被垃圾回收机制回收。
  缺点：由于闭包会使函数中的变量保存在内存中，内存消耗很大，而且容易造成内存泄漏，（解决办法就是在退出函数之前，将不使用的局部变量删除）

  垃圾回收机制
  不定期，不定时回收内存不再使用的变量，释放内存
垃圾回收机制有两种
  标记清除法
      当一个变量进入到一个执行环境，就做一个标记，当不再使用这个变量时再做标记，回收那些标记为不再使用的变量
    引用计数法
      当一个变量进入到一个执行环境，给这个变量进行计数为1，当不再使用这个变量的时候减1，回收那些计数为0的变量。

   内存泄露：
    1）意外的全局变量引起的内存泄露
        function leak(){
          leak="xxx";//leak成为一个全局变量，不会被回收
        }
  2）闭包引起的内存泄露
  3）没有清理的DOM元素引用
  4）被遗忘的定时器或者回调
  5）子元素存在引起的内存泄露
```

### 34、解释一下原型链

```
原型链就是通过原型继承在原型之间建立起来的链型结构被称为原型链
对象属性查找顺序为：
    先在对象的私有属性中查找，如果找到则返回该属性对应的值，如果没有找到，就会沿着__proto__属性到它的原型中查找，找到则返会对应的值，没找到，那么会沿着原型链向上查找，直到找到Object构造方法的原型为止，如果还没找到则返回undefined。
```

### 35、JS 创建对象的方法

```
0，字面量方式
1，工厂函数方式
2，构造函数模式
3，原型模式
4，混合构造函数和原型模式
5，动态原型模式
6，寄生构造函数模式
7，稳妥构造函数模式
```

### 36、JS 实现继承的方法

```
1，原型链继承
2，借用构造函数继承
3，组合继承(原型+借用构造)
4，原型式继承
5，寄生式继承
6，寄生组合式继承
```

### 37、说说 jsonp 的原理

```
利用script标签的src的跨域属性

1）创建script标签
    var script = document.createElement('script');
2)设置回调函数
  function getData(data){
    //数据请求回来会被触发的函数
    console.log(data);
  }
3)设置script标签的src属性，设置请求的地址
    script.src = 'http://localhost:3000?callback=getData'
4)让script生效
    document.body.appendChild(script)
5）后台设置代码
  (比如后端用的是node搭建的服务器)
  ...获取到callback的值
    然后调用callback的值（前端函数）并传递数据
    var data = {
        name:"jxk",
        age:20
    }
    var scriptStr = `${query.callback}(${JSON.stringify(data)})`
    res.end(scriptStr)
```

### 38、前端性能优化的方法？

```
（1）、当需要设置的样式很多时设置className而不是直接操作style。
（2）、避免在页面的主题布局中使用table，table要等其中的内容完全下载之后才会显示出来，显示比div+css布局慢。
（3）、用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能。
（4）、减少http请求次数：CSS Sprites，JS、CSS源码压缩，图片大小控制合适；网页GZIP压缩，CDN托管，data缓存，图片服务器。
（5）、图片预加载，将样式表放在顶部，将脚本放在底部，加上时间戳。
（6）、前端模板 JS+数据，减少由于html标签导致的贷款浪费，前端用变量保存AJAX请求结果，每次操作本地数据，减少请求次数。
（7）、少用全局变量，缓存DOM节点查找的结果。减少IO（输入/输出）读取操作。
（8）、避免使用CSS Expression(css 表达式)又称动态属性（Dynamic properties）。
（9）、减少DOM操作；部署前，图片压缩、代码压缩；优化js代码结构，减少冗余代码；减少http请求，合理设置http缓存；使用内容分发cdn加速；静态资源缓存；图片延迟加载；
```

### 39、for In 和 for Of 的区别

```
for。。。in的特点：
    1.index索引为字符串型数字，不能直接进行几何运算。
    2.遍历顺序有可能不是按照实际数组的内部顺序。
    3.使用for in会遍历数组所有的可枚举属性，包括原型。所以for in更适合遍历对象，不要使用for in遍历数组。
    对象的遍历（for...in..  keys() values() entries()）
for…of的特点：
    for..of适用遍历数/数组对象/字符串/map/set等拥有迭代器对象的集合.但是不能遍历对象,因为对象没有迭代器.与forEach()不同的是，它可以正确响应break、continue和return语句
    for-of循环不支持普通对象，如果要迭代一个对象的属性，可以用for-in循环（这也是它的本职工作）或内建的Object.keys()方法

forEach更多的用来遍历数组

for in 一般常用来遍历对象或json

for of数组对象都可以遍历，遍历对象需要通过和Object.keys()

for in循环出的是key，for of循环出的是value
```

### 40、forEach() 和 map() 和 every() 和 some() 和 filter() 的区别

```
首先forEach、map、filter、some都是遍历数组的方法，都是用来遍历数组。
forEach，没有返回值
  不能响应return、break
map：返回值为新的数组
  按照原数组的元素顺序依次处理元素，返回一个处理后的新数组，数组元素是值类型则原数组不变，数组元素为引用类型，则原数组改变
filter：返回值为新的数组
  过滤指定数组中所有符合条件的元素，返回一个新数组，原数组不变
some：返回值为boolean类型
  用于检测数组中的元素是否满足指定条件，如果有一个符合条件的就返回true，如果没有符合条件的就返回false，原数组不变

every:返回值为boolean类型
  every用于检测数组中的元素是否满足指定条件，所有元素都符合条件才返回true，如果没有符合条件的返回    false，原数组不变。
```

### 41、call() 和 apply() 的区别

```
相同点：都是改变this的指向，改变后的this指向传入的第一个参数。
不同点：传值方式不同
  Call方法：传递参数是一个一个传入的。（call（obj，arg1，arg2，arg3））
  Apply方法：传递参数是以数组形式传入的。（apply（obj，[ ] || arr））
```

### 42、变量的声明提升

```
var有变量声明提升,将变量的声明提升到当前的作用域最开始的位置,但赋值还是在原来位置
函数也存在声明提升.
函数的升明提升优先于变量的声明提升

console.log(a);
var a = 100;
```

### 43、原生 Ajax 请求的五个步骤

```
1.创建一个XMLHttpRequest异步对象
2.设置请求方式和请求地址
3.用send发送请求
4.监听状态变化
5.接收返回的数据并处理数据
```

### 44、new 关键字的执行过程

```
(一)  首先创建一个空对象
(二)  将这个空对象赋值给this，并将this的__proto__指向构造方法对象的原型
(三)  对this这个对象进行属性的添加，并初始化
(四)  将this对象返回
```

### 45、自己实现 bind 函数

```

```

### 46、setTimeout 和 setInterval 的区别

```
  1.setInterval在执行完一次代码之后，经过了那个固定的时间间隔，它还会自动重复执行代码，而setTimeout只执行一次那段代码。
  setTimeout用于延迟执行某方法或功能
  setInterval则一般用于刷新表单，对于一些表单的假实时指定时间刷新同步
```

### 47、防抖和节流

```
https://www.cnblogs.com/youma/p/10559331.html

两者都是优化高频率执行js代码的一种手段。
函数防抖（debounce）：
  一个需要频繁触发的函数，在规定时间内，只让最后一次生效，前面的不生效。（主要应用场景有：input验证、搜索联想、resize）
  （大白话：只执行最后一次）

函数节流（throttle）：
  一个函数执行一次后，只有大于设定的执行周期后才会执行第二次。（主要应用场景有：scroll、touchmove）
  （大白话：控制执行次数）
```

### 48、浏览器的缓存

```
https://www.sohu.com/a/280389359_120047065
```

## 三、vue

### 1、说说你对 MVVM 思想的理解

```
MVVM 是一种前端的一种设计思想，vue，angular等框架就是使用的这种设计思想。MVVM是 Model-View-ViewModel的缩写，即模型-视图-视图模型，
模型（Model）： 数据保存—存放着各种数据，有的是固定写死的，大多数是从后端返回的数据
视图 （View）：用户界面，也就是DOM
视图模型（View-Model）:连接View和Model的桥梁，当数据变化时，ViewModel够监听到数据的变化（通过Data Bindings），自动更新视图，而当用户操作视图，ViewModel也能监听到视图的变化（通过DOM Listeners），然后通知数据做改动，这就实现了数据的双向绑定。
vue就是使用这种编程思想，中心思想就是实现了双向绑定。
```

### 2、数据双向绑定原理

```
大概理解的意思是：
vue.js 采用数据劫持结合发布-订阅者模式,通过 Object.defineproperty 来劫持各个属性的setter和getter,在数据变动时发布消息给订阅者,触发相应的监听回调。

js实现简单的双向绑定

<body>
    <div id="app">
        <input type="text" id="txt">
        <p id="show"></p>
    </div>
</body>
<script type="text/javascript">
    var obj = {};
    Object.defineProperty(obj, 'txt', {
        get: function () {
            return obj
        },
        set: function (newValue) {
            document.getElementById('txt').value = newValue;
            document.getElementById('show').innerHTML = newValue;
        }
    })
    document.addEventListener('keyup', function (ev) {
        obj.txt = ev.target.value;
    })
</script>
```

### 3、vue 指令有那些 V-if 和 v-show 的区别

```
Vue的指令有：
  v-show（显示隐藏）、v-bind（绑定属性 简写：）、v-if（条件判断）、v-on（事件监听简写@）、
  v-text（渲染文本）、v-for（循环）、v-html（渲染文本和标签）、v-model（表单控件，双向绑定）、
  v-once（只渲染一次）、v-slot（插槽简写#）、v-cloak（防闪烁）、v-pre（预编译）

v-if和v-show都可以控制元素的显示与隐藏。
区别：
  v-if是通过判断条件重建与销毁DOM元素来控制元素的显示隐藏。
  v-show是通过CSS的display来控制元素的显示与隐藏。
  v-if频繁切换消耗高，   v-show初始渲染消耗高。
使用场景：
  所以需要频繁切换状态时，使用 v-show
  要加快初始化时的渲染速度（组件的重建和销毁时），使用 v-if
```

### 4、key 的作用

```
第一种答法
key的作用是为了在diff算法执行时更快的找到对应的节点，提高diff速度，key具有唯一性。
让每一个元素有一个唯一的识别身份，主要是为了vue精准的追踪到每一个元素，更高效的更新虚拟DOM。

专业回答：
  1.key的作用主要是为了高效的更新虚拟DOM,其原理是vue在patch(打补丁)过程中通过key可以精确判断两个节点是否是同一个，从而避免频繁更新不同元素，使得整个patch过程更加高效，减少DOM操作量，提高性能。
  2.另外，若不设置key还可能在列表更新时引发一些隐蔽的bug
  3.vue中在使用相同标签名元素的过渡切换时，也会使用到key属性，其目的也是为让vue可以区分他们，否则vue只会替换其内部属性而不会触发过渡效果。


第二种答法：
1、key的作用是为了更高效的更新虚拟DOM；
2、vue在patch过程中判断两个节点是否相同key是一个必要条件，渲染一组列表时，key往往是唯一标识，所以如果不定义key的话，vue只能认为比较的两个节点是同一个，哪怕它们实际上不是，这导致了频繁更新元素，使得整个patch过程比较低效，影响性能；
3、实际使用中在渲染一组列表时key必须设置，而且必须是唯一标识，应该避免使用数组索引作为key，这可能导致一些隐蔽的bug；vue中在使用相同标签元素过渡切换时，也会使用key属性，其目的也是为了让vue可以区分它们，否则vue只会替换其内部属性而不会触发过渡效果；
4、从源码中可以知道，vue判断两个节点是否相同时主要判断两者的key和元素类型等，因此如果不设置key，它的值就是undefined，则可能永远认为这是两个相同节点，只能去做更新操作，这造成了大量的dom更新操作，明显是不可取的。
```

### 5、虚拟 DOM

https://www.cnblogs.com/gaosong-shuhong/p/9253959.html

```
虚拟DOM是什么:用JS对象的形式，表示DOM和DOM之间的嵌套关系.Vue在这个Virtual DOM 上实现了一个 diff 算法，当要重新渲染组件的时候，会通过 diff 寻找到要变更的 DOM 节点，再把这个修改更新到浏览器实际的 DOM 节点上，所以使用虚拟DOM性能会比原生 DOM 快很多。
```

![12](assets/12.png)

![10](assets/10.png)

```
patch函数

patch函数的执行分为两个阶段，两次传递的参数都是两个

第一阶段为虚拟dom的第一次渲染，传递的两个参数分别是放真实DOM的container和生成的vnode，此时patch函数的作用是用来将初次生成的真实DOM结构挂载到指定的container上面。

第二阶段传递的两个参数分别为vnode和newVnode，此时patch函数的作用是使用diff算法对比两个参数的差异，进而更新参数变化的DOM节点；

可以发发现h函数和patch函数在cnabbdom中实现vdom到真实DOM的转化起到了至关重要的作用，那么还有一个很重要的环节，patch函数中是怎么样实现对比两个vnode从而实现对真实DOM的更新的呢，这里还要提一下snabbdom的另外一个核心算法，即diff算法。
```

### 6、diff 算法

```
1.diff 算法是虚拟dom生成的必然产物，通过新旧dom比较，将变化的地方更新到真实的dom上
2.当页面的数据发上变化的时候，Diff算法只会比较同一层级的节点
3.在diff算法时key的作用很重要，就是为了高效的更新虚拟DOM
```

### 7、watch 和 computed 的区别

```
区别：
  1、computed有缓存，watch没有缓存。
  2、computed调用时不需要加括号，watch不需要调用。
  3、当属性没有发生改变时computed会从缓存中读取值，watch当属性发生改变时会接收到两个值，一个新值、一个就值。
  4、computed中的函数名可以随意命名，watch中的函数名必须时data中的属性名。
  5、computed必须有返回值。
如果watch需要监听对象，必须设置深度监听。（deep = true）

应用场景：
  a）多个数据变化影响一个数据的变化，使用computed。
  b）一个数据变化影响多个数据变化，使用watch。
```

### 8、vue 自定义指令

```
自定义指令：全局自定义指令
      局部自定义指令
1、可以使用Vue.directive( dir_name , {} ) 来定义全局自定义指令
2、也可以使用 directives{ dir_name : {} } 来定义局部自定义指令
钩子函数 :
    bind
        只调用一次, 当指令第一次绑定在元素上时.
        用来做一次性初始化操作.
    inserted
        当绑定元素已插入到父节点时调用.
        也就是说 必定存在父节点.
        但是 它 及它的父节点 未必存在文档中.
    update
        在包含该组件的VNode更新后调用该函数.
        可能在其子级更新前调用.
        指令的值可能已更改,可能未更改.最好通过判断新旧值来过滤掉不必要的操作.
基本语法
全局定义指令
 Vue.directive('xxx-xxx' , function( el , binding ) {
            el.style.backgroundColor = binding.value ;
        })
局部定义指令
directives:{   //自定义私有指令
             'fontweight':{
                  bind(el,binding){
                     el.style.fontWeight = binding.value;
                  },
                    },
              'color-swatch'(el, binding) {   //简写
                    el.style.backgroundColor = binding.value;
               }
         }
```

### 9、说说你对生命周期的理解

```
生命周期钩子函数：在这个生命周期过程中，vue为我们提供了8个常用的钩子函数。

生命周期：
  总共分为8个阶段，创建前/后，载入前/后，更新前/后，销毁前/后。
beforeCreate：
  阶段，vue实例的挂载元素$el和数据对象data都为undefined，data和methods还未初始化。
created：
  阶段，数据对象data和methods已经初始化，但$el还没有，视图和实例还没有挂载。
beforeMount：
  阶段，vue实例的$el和数据对象data都已经初始化，但还是虚拟的dom节点，视图和实例还没有挂载。
mounted：
  阶段，模板已经编译好，虚拟dom渲染成真正的dom标签，数据已经渲染到页面，Vue实例已经创建完毕。
beforeUpdate：
  阶段当数据依赖改变时，对象data中的 数据已经更改（虚拟dom已经重新渲 染），但是还未开始渲染真正dom，页面中的值还是原来的。
updated：
  阶段data中的数据更新完毕，页面已经被重新渲染。
beforeDestroy：
  阶段实例还是可用的一般在这里做一些善后工作。（例如清除定时器、清除非指令绑定的事件等等。）。
destroyed：
  阶段Vue实例被销毁，观察者、子组件、事件监听被清除（页面数据不会消失，只是响应式无效了）。

一般会在created阶段做网络请求,在mounted阶段对第三方插件的初始化。
在destroyed阶段进行清除定时器和一些事件的解绑
```

### 10、实现网络请求的方式及跨域问题的解决方案

```
网络请求的方式：
  1、原生ajax
  2、jq中的ajax
  3、es6中的fetch
  4、vue项目及react项目中使用axios.js
  5、jsonp  但是jsonp只能实现get请求
  6、vue1.0中使用vue-resource.js

跨域分为：前端跨域、后端跨域、线上跨域、线下跨域
解决跨域有多种方法：
  1、使用vue项目中的webpack配置proxy反向代理。
  2、使用nginx反向代理。
  3、使用jsonp。
  4、后台添加代码。
    A） header('Access-Control-Allow-Origin:*');//允许所有来源访问
    B） header('Access-Control-Allow-Method:POST,GET');//允许访问的方式
线上跨域：
  后台解决。

  项目开发阶段一般是在webpack配置proxy反向代理。项目上线之后一般后端解决。
```

### 11、页面之间传值

```
父传子：
  父组件发送的形式是用v-bind绑定值到子组件身上。然后子组件用属性props接收。
子传父：
  子组件使用$emit(事件名,需要发送的值)触发自定义事件，父组件使用v-on监听（@事件名=获取值的方法）。
兄弟：
  A）、两个都要引入公共js->bus。首先是发送者，bus.$emit(名字，值)。然后是接受者,bus.$on("传过来的那个名字"，函数（值）)，这里要注意的是接受者的这个监听事件应该是放在钩子mounted事件内。同时注意this指向问题。（可用封装方法）
  B）、使用vuex和localStroage进行传值
  C）、借助父组件，让两个兄弟组件可以联动，子组件A将值传递给父组件，父组件再将值传递给子组件B
隔代组件：
  vuex、本地存储、事件车、$attrs/$listeners、provide / inject都可以实现

```

### 22、你都封装过什么组件

```
组件的分类：功能性组件、内容性组件、页面组件
功能性组件：图片轮播、tabbar、tab切换、loading、分页效果等。
页面组件：首页、我的、购物车等
内容性组件：商品列表、商品详情等
```

### 13、什么是路由

```
  后端路由：对于普通的网站，所有的超链接都是URL地址，所有的URL地址都对应服务器上对应的资源，这个对应关系就是后端中的路由；

  前端路由：对于单页面应用程序来说，主要通过URL中的hash(#号)来实现不同页面之间的切换，同时，hash有一个特点：HTTP请求中不会包含hash相关的内容；所以，单页面程序中的页面跳转主要用hash实现；


优点：
  1、用户体验好与后台网速没有关系，不需要每次都从服务器全部获取数据，就能快速展现给客户。
  2、可以在浏览器中输入指定想要访问的url地址。
  3、实现前后端分离，方便开发。有很多框架都带有路由功能模块。
缺点：
  1、使用浏览器前进后退按钮时，会重新发送请求。
  2、单页面应用中在使用前进后退时无法记住滚动位置。


后端路由：
  对于普通的网站，所有的超链接都是url地址，所有url都对应服务器上对应的资源。
  浏览器在地址栏中切换不同的url时，每次都向后台服务器发出请求，服务器响应请求，在后台拼接html文件传给前端显示, 返回不同的页面,
意味着浏览器会刷新页面，网速慢的话说不定屏幕全白再有新内容。后端路由的另外一个极大的问题就是 前后端不分离。
优点：
　　　　分担了前端的压力，html和数据的拼接都是由服务器完成。
缺点：
　　　　当项目十分庞大时，加大了服务器端的压力，同时在浏览器端不能输入制定的url路径进行指定模块的访问。另外一个就是如果当前网速过慢，
　　那将会延迟页面的加载，对用户体验不是很友好。
```

### 14、路由传参

```
Params传参和query传参
区别：
1、params通过name传参，query通过path传参
2、query相当于get请求，参数会在地址栏显示，而params相当于post请求，参数不会再地址栏显示。
3、用params传参，F5强制刷新参数会被清空，用query，由于参数是用路径传参的所以F5强制刷新也不会被清空。
4、使用这两种方式传参的时候都可通过路由的name进行传参，所以在配置路由的时候需要加个name属性
```

### 15、如何配置路由

```
在我们的项目搭建完成时候会有一个router的文件夹里边有一个index.js文件，在这个文件里进行配置
第一步：引入需要配置路由的组件
第二步：在index.js中有routes数组 在数组里边有对象 每一个对象就是每一条路由（在routes数组添加一个对象）
第三步：在对象内添加path和component。path的值为组件对应的路径，component的值为路径对应的组件。

当然我们也可根据实际情况进行路由属性的添加及使用。
  比如：
    name、meta、beforeEnter、redirect、params、query
```

### 16、router 和 route 的区别

```
1.router是VueRouter的一个对象（路由实例），通过Vue.use(VueRouter)和VueRouter构造函数得到一个router的实例对象，这个对象中是一个全局的对象，他包含了所有的路由包含了许多关键的对象和属性。
路由实例的方法有：
Push()  go()  replace()等方法 和守卫钩子函数
2.route是一个跳转的路由对象(路由信息对象)，每条路由都会有一个route对象，是一个局部的对象，有name,path,params,query matched，component 等属性
```

### 17、路由钩子的理解

```
导航钩子： 就是路由的生命周期
分为：全局路由守卫、组件内守卫、路由独享守卫
全局的钩子函数
  beforeEach()    在路由切换开始时调用
  afterEach()    在路由切换离开时调用

路由独享守卫
  beforeEnter
组件的钩子函数
  beforeRouterEnter
  beforeRouterUpdate
  beforeRouterLeave

 项目中一般使用全局路由守卫的中beforeEach，进行登录拦截。
```

### 18、路由模式及区别

```
hash模式
  地址栏 URL 中的 # 符号，hash 虽然出现在 URL >中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。但是页面刷新的时候，会向服务器端请求数据。

history模式
  HTML5新增的, 改变URL而不刷新页面，地址栏没有#号，在项目打包的时候如果使用history模式，前端的URL必须和实际向后端发起请求的URL一致，后台配置支持，否则就会出现404错误

```

### 19、路由组件有那些及如何使选中路由高亮显示

```
router-link  router-view
通过linkActiveClass属性设置类名
```

### 20、对 keep-alive 的理解

```
不希望组件被重新渲染影响使用体验,  keep-alive生命周期钩子函数activated 和 deactivated,主要用于保留组件状态或避免重新渲染,在组件切换过程中将状态保留在内存中，防止重复渲染DOM，减少加载时间及性能消耗，提高用户体验性.
```

### 21、说说你对 vuex 的理解

```
vuex的概念：Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。
vuex的应用场景：组件嵌套太多，组件数据传递不太方便的时候，可以使用vuex,比如购物车、用户信息等一些共享数据。

五个状态分别是：State、Getters、 Mutations、Actions、Modules。

State：存储状态（数据），在根实例中注册了store 后，用 this.$store.state 来访问store里面的状态，      存放数据方式为响应式。
getters：可以认为是 store 的计算属性，它的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改      变才会被重新计算。
mutations：存储同步函数的，更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
actions：存储任意异步操作，通过提交 mutation 间接改变状态。
modules：将 store 分割成模块，每个模块都具有state、mutations、actions、getters、甚至是嵌套子模块

vuex的优点
  1.解决了非父子组件的消息传递（将数据存放在state中）
  2.减少了AJAX请求次数，有些情景可以直接从内存中的state获取
vuex的缺点
  1.刷新浏览器，vuex中的state会重新变为初始状态
  解决方案vuex-along ,vuex-persistedstate
    https://github.com/robinvdvleuten/vuex-persistedstate
  得配合计算属性和sessionStorage来实现
```

### 22、nextTick 的作用

```
nextTick：在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的DOM。
 vue是依靠数据驱动视图更新的，该更新的过程是异步的。
应用场景：
当数据更新了，在dom中渲染后，自动执行该函数
1、如果要在created()钩子函数中进行的DOM操作，由于created()钩子函数中还未对DOM进行任何渲染，所以无法直接操作，需要通过$nextTick()来完成。
Vue生命周期的created()钩子函数进行的DOM操作要放在Vue.nextTick()的回调函数中。

2、更新数据后，想要使用js对新的视图进行操作时

3、在使用某个第三方插件时 ，希望在vue生成的某些dom动态发生变化时重新应用该插件，也会用到该方法，这时候就需要在 $nextTick 的回调函数中执行重新应用插件的方法。

Vue.nextTick()的回调函数中；
  通俗的理解是：更改数据后想立即使用js操作新的视图的时候需要使用nextTick。
```

### 23、vue 组件 data 为什么要是函数形式而根实例则没有此限制？

```
答：1、Vue组件可能存在多个实例，如果使用对象形式定义data，则会导致它们公用一个data对象，那么状态变更将会影响所有组件实例，这是不合理的；采用函数形式定义，在initData时会将其作为工厂函数返回全新data对象，有效规避多实例之间状态污染问题。
2、而在Vue根实例创建过程中则不存在该限制，也是因为根实例只有一个，不需要担心这种情况
```

### 24、混入

```
混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。
分为全局混入和局部混入
// 定义一个混入对象
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

// 定义一个使用混入对象的组件
var Component = Vue.extend({
  mixins: [myMixin]
})

var component = new Component() // => "hello from mixin!"
```

### 25、vue 中的两个内置组件

```
transition  keep-alive
```

### 26、vue3.0 和 2.0 的区别

```
https://blog.csdn.net/qq_39045645/article/details/106372407
https://blog.csdn.net/qq_42308316/article/details/111035113
2020年9月19日凌晨，尤雨溪大大正式发布了 Vue.js 3.0 版本
vue3.0的新特性
  1、createApp创建Vue对象
  2、新增Composition API，更好的逻辑复用和代码组织。
  Composition API 是以函数的形式展示组件属性，所以第一步就是导入我们需要的函数。在我们的例子中，我们用 reactive 创建响应属性，用 computed 创建计算属性。
    1)、setup 函数是一个新的组件选项。作为在组件内使用 Composition API 的入口点。
    2)、ref  ref是来实现响应式数据的方法   ref方法来实现变量的简单监听
    3)、reactive  vue3中提供的实现响应式数据的方法，reactive参数必须是对象
    4)、computed() 函数用来创建计算属性，函数的返回值是一个 ref 的实例、watch() 函数用来监视数据的变化，从而触发特定的操作
    5)、生命周期的变化
      （onBeforeMount onMount onBeforeUpdate onUpdated onBeforeUnmount onUnmounted onEorrorCaptured）
  2、重构响应式系统，使用Proxy替换Object.defineProperty实现数据的双向绑定
    Vue2.0使用Object.defineProperty
    原理：通过使用 Object.defineProperty 来劫持对象属性的 geter 和 seter 操作，当数据发生改变发出通知
    Vue 3.0使用ES6的新特性porxy
    原理：通过ES6的新特性proxy来劫持数据，当数据改变时发出通知

    Vue2.x版本中的双向绑定不能检测到下标的变化
    proxy可以劫持整个对象，并返回一个新对象

  3、filter被移除
  4、重构virtual dom
  5、使用Typrscript替换Flow（React当前还是Flow）
```

```
vue2.x数据双向绑定
 1 <!DOCTYPE html>
 2 <html lang="en">
 3 <head>
 4     <meta charset="UTF-8">
 5     <meta name="yingaxiang" content="width=device-width, initial-scale=1.0">
 6     <title>vue2.x数据双向绑定</title>
 7 </head>
 8 <body>
 9     <div>
10         <input type="text" id="input">
11         <span id="text"></span>
12     </div>
13 </body>
14 </html>
15 <script>
16     var obj = {};
17     Object.defineProperty(obj, 'prop', {
18         get: function () {
19             return val;
20         },
21         set: function (newVal) {
22             val = newVal;
23             document.getElementById('text').innerHTML = val;
24         }
25     });
26     document.addEventListener('keyup', function (e) {
27         obj.prop = e.target.value;
28     });
29 </script>
```

```
 vue3.0数据双向绑定
 1 <!DOCTYPE html>
 2 <html lang="en">
 3 <head>
 4     <meta charset="UTF-8">
 5     <meta name="yingaxiang" content="width=device-width, initial-scale=1.0">
 6     <title>vue3.0数据双向绑定</title>
 7 </head>
 8 <body>
 9     <div>
10         <input type="text" id="input">
11         <span id="text"></span>
12     </div>
13 </body>
14 </html>
15 <script>
16     var obj = {};
17     var obj1 = new Proxy(obj, {
18         // target就是第一个参数obj, receive就是返回的obj(返回的proxy对象)
19         get: function (target, key, receive) {
20             // 返回该属性值
21             return target[key];
22         },
23         set: function (target, key, newVal, receive) {
24             // 执行赋值操作
25             target[key] = newVal;
26             document.getElementById('text').innerHTML = target[key];
27         }
28     })
29     document.addEventListener('keyup', function (e) {
30         obj1[0] = e.target.value;
31     });
32 </script>
```

### 27、图片懒加载原理

```
在图片没有进入可视区域时，先不给<img>的src赋值，这样浏览器就不会发送请求了，等到图片进入可视区域再给src赋值。
```

### 28、restful API

```
Rest是web服务的一种架构风格，一种设计风格，是一种思想；同时Rest不是针对某一种编程语言的。
restful：遵守了rest风格的web服务，也就是webAPI接口规范，是后台人员编写。


非Rest设计，以往我们都会这么写：

  http://localhost:8080/admin/getUser （查询用户）
  http://localhost:8080/admin/addUser （新增用户）
  http://localhost:8080/admin/updateUser （更新用户）
  http://localhost:8080/admin/deleteUser （删除用户）

Rest架构：

GET   http://localhost:8080/admin/user （查询用户）
POST   http://localhost:8080/admin/user （新增用户）
PUT   http://localhost:8080/admin/user （更新用户）
DELETE   http://localhost:8080/admin/user （删除用户）

为什么需要Restful
  URL具有很强可读性的，具有自描述性
  规范化请求过程和返回结果
  资源描述与视图的松耦合
  可提供OpenAPI，便于第三方系统集成，提高互操作性
  提供无状态的服务接口，降低复杂度，可提高应用的水平扩展性

method请求方式
  get
  post
  put
  delete
  PATCH(一般不用)
```

### 29、项目优化

```
v-for 遍历避免同时使用 v-if
keep-alive缓存页面
细分vuejs组件降低耦合性
使用better-click防止iphone点击延迟
减少网络请求

图片懒加载
路由懒加载
第三方插件按需引入
使用CND资源
使用骨架屏提高用户体验
开启gzip压缩
减少请求次数。


页面优化：
  1、使用cdn引入。
  2、使用图片懒加载、路由懒加载、组件懒加载。
  3、使用gzip压缩。
  4、减少请求次数。
  5、利用缓存。
  6、使用dns预解析。

  1.编码优化:
    1.不要将所有的数据都放在data中，data中的数据都会增加getter和setter，会收集对应的watcher
    2.vue 在 v-for 时给每项元素绑定事件需要用事件代理
    3.SPA页面采用keep-alive缓存组件
    4.拆分组件( 提高复用性、增加代码的可维护性,减少不必要的渲染 )
    5.v-if 当值为false时内部指令不会执行,具有阻断功能，很多情况下使用v-if替代v-show
    6.key保证唯一性 ( 默认vue会采用就地复用策略 )
    7.Object.freeze 冻结数据
    8.合理使用路由懒加载、异步组件
    9.尽量采用runtime运行时版本
    10.数据持久化的问题 （防抖、节流）

2.Vue加载性能优化:
    第三方模块按需导入 (babel-plugin-component)
    滚动到可视区域动态加载 ( https://tangbc.github.io/vue-virtual-scroll-list )
    图片懒加载 (https://github.com/hilongjw/vue-lazyload.git)

3.用户体验:
    app-skeleton骨架屏  loading等
    app-shellapp壳   就是app的壳，先渲染app的头部和导航
    pwa  实现H5的离线缓存  serviceworker
4.SEO优化：
    预渲染插件 prerender-spa-plugin
    服务端渲染ssr
5.打包优化:
    使用cdn的方式加载第三方模块
    多线程打包 happypack
    splitChunks 抽离公共文件
    sourceMap生成
6.缓存，压缩
    客户端缓存、服务端缓存
    服务端gzip压缩
```

### 30、vue 和 react 的区别

```
Vue和React的共同点
  01. react采用特殊的JSX语法，Vue.js在组件开发中也推崇编写.vue特殊文件格式，对文件内容都有一些约定
  02. 两者都需要编译后使用
  03. 中心思想相同：一切都是组件，组件实例之间可以嵌套
  04. 都提供合理的钩子函数，可以让开发者定制化地去处理需求
  05. 都不内置列数AJAX，Route等功能到核心包，而是以插件的方式加载

Vue和React的不同点
  01. Vue性能更好、Vue性能上更有优势，因为 Vue 的 Virtual DOM 实现相对更为轻量一些，整体大小               比react.js更小更轻便
  02. react.JS 彩用SX语法，对语大部分工程师入手比较困难，需要要大量的时间去学习适应这种新语法的           形式，vue采用DOM模板的方法，易看易用
```

### 31、什么是 token（说说你对 token 的理解）

```
用于做用户的唯一身份的识别。
1、Token的引入：Token是在客户端频繁向服务端请求数据，服务端频繁的去数据库查询用户名和密码并进行对比，判断用户名和密码正确与否，并作出相应提示，在这样的背景下，Token便应运而生。

2、Token的定义：Token是服务端生成的一串字符串，以作客户端进行请求的一个令牌，当第一次登录后，服务器生成一个Token便将此Token返回给客户端，以后客户端只需带上这个Token前来请求数据即可，无需再次带上用户名和密码。

3、使用Token的目的：Token的目的是为了减轻服务器的压力，减少频繁的查询数据库，使服务器更加健壮。

https://blog.csdn.net/qq_38129062/article/details/89350244
```

### 32、vueX 数据是临时存储的

```
https://www.cnblogs.com/wang-sai-sai/p/11076833.html
```

## 四、git

### 1、git 常用命令

​ git clone 地址 克隆项目

​ git status 查看状态

​ git add. 提交到暂存区

​ git commit -m ' 描述 ' 提交到分支

​ git push origin xxx 提交远程

​ git pull origin xxx 从远程拉取代码并合并到本地分支

​ git check -b xxx 创建分支

​ git checkout xxx 切换分支

​ git branch 查看分支

​ git reset --hard ' 版本号 ' 回退版本

​ git log 查看日志

​ git reflog 查看所有提交的日志

### 2、git 的工作流程（git 是怎么工作的）

```
通过git add将工作区的代码提交到暂存区，通过git commit将暂存区的代码提交到自己的分支，git push提交到远程仓库
```

### 3、git Fetch 和 git Pull 的区别

```
git pull：相当于是从远程获取最新版本并merge到本地。  git fecth + git merge
git fetch：相当于是从远程获取最新版本到本地，不会自动merge。
```

### 4、git Pull 和 Git Rebase

```
git pull：获取远程分支，并更新本地分支。
git rebase：合并分支到当前分支，只存在一个。
```

## 五、小程序和 react 中的问题

**1、微信小程序生命周期**

```
应用的生命周期

页面的生命周期

```

**2、小程序用的怎么样**

**3、有过微信小程序及公众号的开发吗**

**4、react 做过项目没有**

## 六、webpack

### 1、webpack 是什么

```
构建项目的工具，模块化打包机 或者 模块打包工具, 对应到前端开发来说，就是将很多的的 css文件，js文件，图片等“物品”，全都写进一个js文件，而不是在一个html页面通过script,link标签去引入多个静态资源.
```

### 2、webpack 的作用

```
1)进行重新加载编译。实际就是将浏览器不认识的语法编译成浏览器认识的语法。比如less
编译成css，ES6 语法 转成 ES5等等。
2)减少io请求。通常我们在请求后，会返回一个html到浏览器。这时，我们如果打开控制台，就会发现在html页面通过script,link等标签引用的静态资源， 浏览器会再次发出请求去获取这些资源。但是webpack的打包，将所有的静态资源都合并好了，减少了io请求。
```

### 3、webpack 的五个核心

```
1、entry
  入口（entry）指示webpack以哪个文件作为入口起点开始打包，分析构建内部依赖图。

2、output
  出口（output）指示webpack打包后的资源 bundles 输出到哪里，以及如何命名。

3、loader
  loader让webpack能够去处理那些非JavaScript资源css、img等，将它们处理成webpack能够识别的资源，可以理解成一个翻译过程（webpack自身只能理解js和json）。

4、plugins
  插件（plugins）可用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。

5、mode
  模式（mode）指示webpack使用相应模式的配置。
  开发模式（development）：配置比较简单，能让代码本地调试运行的环境。
  生产模式（production）：代码需要不断优化达到性能最好。能让代码优化上线运行的环境。
  都会自动启用一些插件，生产模式使用插件更多

```

### 4、webpack 的打包优化

```
一、优化图片
  使用 url-loader 优化， 将小图片转化成base64压缩,防止小图片太多请求次数太多。
二、分离第三方包
  打包后的bundle.js文件夹较大，所以每次加载的时候，请求比较慢，所以有必要在打包时将第三方包分离出来。使用CommonsChunkPlugin 插件进行配置。
三、分离 css 文件并压缩 css 文件
  使用 extract-text-webpack-plugin 插件将css文件分离出来。为了使项目加载时候尽早优先加载css样式，也为了解决js文件体积过大的问题
四、压缩 js 文件
  使用 uglifyjs-webpack-plugin 将js压缩，减少打包后的 vendor.js , bundle.js 等js的文件大小
五、压缩Html
  为了减少打包后的文件体积，使性能更好，效率更高，提高加载速度，打包时有必要进行压缩。
  使用html-webpack-plugin 进行压缩
```

### 5、项目中没有用到过 webpack 配置相关没有怎么去配置过

```
1、跨域的配置
2、2.0项目使用LESS时的配置，4.0的项目无需配置
```

6、webpack 的相关优化

```
图片优化
  https://www.jb51.net/article/161272.htm
  控制图片质量，压缩图片大小；
  配置 <img /> 标签的 srcset 来适应不同的屏幕；
  合成雪碧图，减少图片资源请求数；
  使用占位图。
https://www.cnblogs.com/wangjiachen666/p/11561186.html
2. 提高 Webpack 打包速度
2.1 优化Loader搜索范围
2.2 cache-loader缓存loader处理结果
2.3 使用多线程处理打包
2.4 DllPlugin&DllReferencePlugin
2.5 noParse
2.6 IgnorePlugin
2.7 打包文件分析工具
2.8 费时分析
2.9 一些小的优化点
3. 减少 Webpack 打包后的文件体积
3.1 对图片进行压缩和优化
3.2 删除无用的CSS样式
3.3 以CDN方式加载资源
3.4 开启Tree Shaking
3.5 开启Scope Hoisting
3.6 按需加载&动态加载
```

## 七、项目中的问题

1、你的项目是独立开发还是合作开发及项目搭建

2、最近的项目是负责的那一块，用到了那些技术

3、做项目的时候遇到了那些 bug,是怎么解决的？

4、github 保没保留以前写的项目,能不能看

5、曾做的后台管理都用到什么技术，做的是那一模块

4、项目是如何测试的？

5、如果项目上线了反应有 bug，你是怎么解决的？

6、项目从无到有的流程

```
1、产品经理根据客户的需求会出需求文档
2、召集所有跟这个项目相关的工作人员进行开会商讨（项目的开发时间及上线时间和预算---前端需要几个人，后端需要几个人）
3、UI一般根据产品经理提出的需求文档绘制一个原型图
4、UI开始出UI图
5、项目经理或组长进行项的分工
6、前端人员需要跟后端人员进行沟通（后端出一个项目的接口文档）
7、前后端分别开发
8、完成之后前后端进行联调（接口能不能跑得通、数据能不能正常显示）
9、测试
10、上线

```

7、前后端如何联调

8、项目中的代码规范你们是怎么做的？

```
用的是eslint语法检查
```

## 八、人资问题

1、自我介绍

2、现在是在职还是离职，离职时间，离职原因

```
您好 我在上家公司离职是因为
公司项目比较少，对技术提升没什么帮助，现在前端技术更新特别快，始终要把提升自身技术放在第一位，只有技术提高了，才能更好的完成公司分配给的任务。
```

3、期望薪资

4、上家公司的团队组成

```
一个产品经理  一个UI 两个前端 三个后端  一个测试
```

5、上家公司有没有给你上保险

6、你自己的优势有那些

```
为人比较随和、比较乐于助人、能够快速的融入到新的环境，喜欢学习新的知识，也有刻苦钻研业务的精神。什么事情要做就做的很投入。缺点是我需要学会更耐心一点。我的性子比较急，我总要我的工作在保证质量的情况下赶在第一时间完成。我不能容忍工作怠慢。
```

7、加班怎么看，上家公司的薪资构成、离职时的工资是怎么涨的
