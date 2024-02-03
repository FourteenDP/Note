---
标题: 2、JS+JQ 面试题
描述: 
封面: 
uid: "20230507175233816"
aliases: []
tags:
  - 面试/面试题/前端
cssclasses: 
创建时间: 2023-05-07 17:52:33
更新时间: 2024-01-22 16:57:28
---

# 2、JS+JQ 面试题

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

| **方法**      | **含义**                                           | **发音/邪音** |
| ------------- | -------------------------------------------------- | ------------- |
| concat()      | 将多个数组拼接成一个数组                           |               |
| join()        | 将数组转化为字符串                                 |               |
| pop()         | 删除数组最后一个元素                               |               |
| shift()       | 删除数组第一个元素                                 |               |
| reverse()     | 数组翻转                                           |               |
| push()        | 向数组末尾添加元素                                 |               |
| unshift()     | 向数组开头添加元素                                 |               |
| sort()        | 数组排序                                           |               |
| indexOf()     | 主要用于在数组中查找元素，并把元素的位置返回来     |               |
| lastIndexOf() |                                                    |               |
| splice()      | 方法向/从数组中添加/删除项目，然后返回被删除的项目 |               |
| slice()       | 以从数组中返回 start 下标开始取值，直到 end 下标结束.  |               |
| **方法**      | **含义**                                           | **发音/邪音** |
| substring()   | 截取字符串                                         |               |
| substr()      | 截取字符串                                         |               |
| charAt(i)     | 查找下标对应字符                                   |               |
| charCodeAt(i) | 查找下标对应的字符对应的 unicode 编码                |               |
| toUpperCase() | 将字符串转大写                                     |               |
| toLowerCase() | 将字符串转小写                                     |               |
| split()       | 将字符串转数组                                     |               |
| indexOf()     | 返回子字符串第一次出现的位置                       |               |
| lastIndexOf() | 返回子字符串最后一次出现的位置                     |               |
| slice()       | 截取字符串                                         |               |
| trim()        | 删除字符串的头尾空白符                             |               |
| replace()     | 替换字符串                                         |               |

### 3、JS 的三大组成部分

```
ECMAscript:主要用来描述javascript的语法部分
BOM:结合js及BOM提供的属性和方法对浏览器进行操作
DOM：结合js及BOM提供的属性和方法对HTML和XML文档进行操作
```

### 4、JS 的数据类型？怎么检测数据类型的？

```
6种
Js的基本数据类型（原始数据类型）有：string、number、boolean、null、undefined
复杂数据类型（引用类型）有：object

typeof()

typeof()测试数据类型的时候结果：
  “number”、“string”、“boolean”、“undefined”、“object”、“function”
```

### 5、JS 强制类型转换

| **方法**     | **含义**       | **发音/邪音** |
| ------------ | -------------- | ------------- |
| parseFloat() | 转换数值类型   |               |
| Number()     | 转换数值类型   | 囊波儿        |
| parseInt()   | 转换数值类型   | 怕思因特      |
| ToString()   | 转换字符串类型 | 兔思吹        |
| Boolean()    | 转换对象类型   | 布里恩        |

### 6、常见的 dom 操作？

| **方法**                                | **含义**             | **发音/邪音**   |
| --------------------------------------- | -------------------- | --------------- |
| createElement('div')                    | 创建 dom 元素          | 亏爱特 爱里们特 |
| appendChild()                           | 把节点添加到某元素中 | 额喷的 拆哦的   |
| parentNode/parentElement                | 寻找父节点           | 拍润特 耨的     |
| remove()                                | 删除节点             | 瑞 木屋         |
| removeChild()                           | 删除子节点           | 瑞木屋 球儿得   |
| insertBefore()                          | 之前插入子节点       |                 |
| childNodes/children                     | 所有子节点           |                 |
| nodeType                                | 节点类型             |                 |
| nextSibling/nextElementSibling          | 下一个兄弟节点       |                 |
| previousSibling/previousEelementSibling | 前一个兄弟节点       |                 |
| nodeName                                | 节点名称             |                 |
| getAttribute                            | 获取对象的属性       |                 |
| setAttribute                            | 设置对象的属性       |                 |
| getElementById  querySelector           | 找对象的方式         |                 |

### 7、数组去重的方法

```
数组去重的方法有很多，我先说一下我常用的方法
1、首先声明一个新数组，并遍历原数组使用indexOf方法进行判断新数组中是否有原数组中的元素，如果没有，就往新数组里添加，如果有则不添加
2、filter  +  indexOf
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
了解前端算法：
  算法：就是解题的方法
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
```

### 16、深拷贝和浅拷贝

```
都是引用数据类型来说的，基本数据类型没有深拷贝和浅拷贝一说
浅拷贝\深拷贝
  浅复制只复制一层对象的属性，而深复制则用递归复制了所有层级
深拷贝

深拷贝 是开辟一块新的内存地址，将原对象的各个属性逐个复制进去，新对象跟原对象不共享内存，对拷贝对象和源对象各自的操作互不影响。

1、$.extend(),设置为true是深拷贝
var x = {
    a: 1,
    b: { f: { g: 1 } },
    c: [ 1, 2, 3 ]
};

var y = $.extend({}, x),          //shallow copy
    z = $.extend(true, {}, x);    //deep copy

y.b.f === x.b.f       // true
z.b.f === x.b.f       // false  clonedeep
2、原生实现
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

3、使用 JSON 全局对象的 parse 和 stringify 方法来实现深复制
    function jsonClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    var clone = jsonClone({ a:1 });


 浅拷贝
 1、
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

2、Object.assign(...)

3、直接赋值
4、slice()
// 当数组里面的值是基本数据类型，比如String，Number，Boolean时，属于深拷贝
// 当数组里面的值是引用数据类型，比如Object，Array时，属于浅拷贝
5、concat()
// 当数组里面的值是基本数据类型，比如String，Number，Boolean时，属于深拷贝
6、使用扩展运算符实现深拷贝
// 当value是基本数据类型，比如String，Number，Boolean时，是可以使用拓展运算符进行深拷贝的
// 当value是引用类型的值，比如Object，Array，引用类型进行深拷贝也只是拷贝了引用地址，所以属于浅拷贝
```

### 17、http 请求

```
指从客户端到服务器端的请求消息
```

### 18、http 请求的方式

```
HTTP请求的方法：
  HTTP1.0定义了三种请求方法： GET, POST 和 HEAD方法。
  HTTP1.1新增了五种请求方法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT 方法
```

### 19、get 请求与 post 请求的区别

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

### 20、http 请求的状态码

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

### 21、网络请求的方式

```
1、原生ajax
2、jq中的ajax
3、jsonp
```

### 22、同源策略

```
是浏览器的一个重要的安全策略，浏览器不允许访问不同源的资源。如果缺少了同源策略，浏览器很容易受到 XSS、 CSFR 等攻击。由 Netscape 公司 1995 年引入浏览器，它是浏览器最核心也最基本的安全功能，现在所有支持 JavaScript 的浏览器都会使用这个策略.
```

### 23、同源

```
同协议、同域名、同端口
```

### 24、跨域

```
访问了不同源的资源就是跨域
```

### 25、跨域解决方案

```
1、nginx代理跨域
2、通过jsonp跨域   只能实现get的跨域请求
3、后台解决跨域
```

### 26、本地存储都有什么及区别

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

### 27、了解 Eventloop（事件循环）吗？

```
js是单线程语言，一次只能完成一个任务，如果同时完成多个任务怎么办？js把任务分为同步和异步任务，把所有的同步放到主线程上去执行，把所有的异步任务放到事件队列里去，当所有的同步任务都执行完之后，去事件队列中看看有没有没有执行的异步任务，如果有把需要先执行的异步任务拉到主线程上去执行，当这个任务执行完后，再去事件队列里看有没有没完成的任务，如果有再把任务拉到主线程去执行，这样就形成一个事件循环。



js他是单线程的，但是它分为同步任务和异步任务，同步任务会放到主线程中去执行，

在ES6中由于增加了promise，所以在异步任务中又分为宏任务和微任务
宏任务：setTimeout、setInterval、requestAnimationFrame
  1、宏任务所处的任务队列就是宏任务队列
  2、第一个宏任务队列中只有一个任务：执行主线程的js代码
  3、宏任务队列可以有多个
  4、当宏任务队列中的任务全部执行完会查看是否有微任务队列，如果有先执行微任务中的所有任务，如果没有就查看是否有宏任务
微任务：promise.then(回调)   process.nexttick(  )
  1、微任务所处的队列就是微任务队列
  2、只有一个微任务队列
  3、在上一个宏任务队列执行完毕后执行，如果有微任务队列就会执行微任务中的所有任务。
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

### 28、说说 jsonp 的原理

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

### 29、前端性能优化的方法？

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

### 30、call() 和 apply() 的区别

```
相同点：都是改变this的指向，改变后的this指向传入的第一个参数。
不同点：传值方式不同
  Call方法：传递参数是一个一个传入的。（call（obj，arg1，arg2，arg3））
  Apply方法：传递参数是以数组形式传入的。（apply（obj，[ ] || arr））
```

### 31、变量的声明提升

```
var有变量声明提升,将变量的声明提升到当前的作用域最开始的位置,但赋值还是在原来位置
函数也存在声明提升.
函数的升明提升优先于变量的声明提升
```

### 32、原生 Ajax 请求的五个步骤

```
1.创建一个XMLHttpRequest异步对象
2.设置请求方式和请求地址
3.用send发送请求
4.监听状态变化
5.接收返回的数据并处理数据
```

### 33、自己实现 bind 函数

```

```

### 34、setTimeout 和 setInterval 的区别

```
  1.setInterval在执行完一次代码之后，经过了那个固定的时间间隔，它还会自动重复执行代码，而setTimeout只执行一次那段代码。
  setTimeout用于延迟执行某方法或功能
  setInterval则一般用于刷新表单，对于一些表单的假实时指定时间刷新同步
  2.
```

### 35、防抖和节流

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

### 36、浏览器的缓存

```
https://www.sohu.com/a/280389359_120047065
```

### 37、jq 常用选择器有哪些

```
基本选择器、层级选择器、基本筛选器、内容选择器、属性选择器
```

### 38、jq 对象和 js 对象怎么进行转换

```
js转jq：
  $()将js对象转为jq对象，
jq转js：
  1、使用[index]的方式可以将jq对象转换为js对象。
  2、使用get（）
```

### 39、什么是 ajax，他的原理是什么，优缺点是什么

```
Ajax是客户端向服务器端发送请求,而无需刷新页面的一种技术
Ajax的核心是XMLHttpRequest。//瑞快斯特
优点：
  1.可以使得页面不重载全部内容的情况下加载局部内容，降低数据传输量
  2.避免用户不断刷新或者跳转页面，提高用户体验
缺点：
  1.对搜索引擎不友好
  2.要实现ajax下的前后退功能成本较大
  3.可能造成请求数的增加
  4.跨域问题限制
Ajax 的原理简单来说通过 XmlHttpRequest 对象来向服务器发异步请求，服务器接受到请求去数据库查询数据并获得数据，然后用 Js/jQ来操作 DOM 而更新页面。 这其中最关键的一步就是从服务器获得请求数据。
```

### 40、防抖和节流

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
