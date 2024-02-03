---
标题: 5、Vue 面试题
描述: null
封面: null
uid: 20240203221855944
aliases: []
tags:
  - 面试题
cssclasses: null
创建时间: 2023-05-07T17:52:33.000Z
更新时间: 2024-01-22T16:57:28.000Z
---

# 5、Vue 面试题

## 五、Vue 面试题

### 1、说说你对 MVVM 思想的理解

```
MVVM 是一种前端的一种设计思想，vue，angular等框架就是使用的这种设计思想。
MVVM是 Model-View-ViewModel的缩写，即模型-视图-视图模型，
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
让每一个元素有一个唯一的识别身份，主要是为了vue精准的追踪到每一个元素，在diff算法执行时更快的找到对应的节点，提高diff速度，更高效的更新虚拟DOM。

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

### 5、什么是虚拟 DOM

https://www.cnblogs.com/gaosong-shuhong/p/9253959.html

```
虚拟DOM是什么:虚拟 DOM (VDOM)是真实 DOM 在内存中的表示,用JS对象的形式，表示DOM和DOM之间的嵌套关系.Vue在这个Virtual DOM 上实现了一个 diff 算法，当要重新渲染组件的时候，会通过 diff 寻找到要变更的 DOM 节点，再把这个修改更新到浏览器实际的 DOM 节点上，所以使用虚拟DOM性能会比原生 DOM 快很多。

创建虚拟DOM就是为了更好将虚拟的节点渲染到页面视图中，所以虚拟DOM对象的节点与真实DOM的属性一一照应，虚拟DOM性能会比原生 DOM 快很多
```

![12](../../../../../1-%E6%88%91%E7%9A%84%E6%96%87%E4%BB%B6/F%E7%9B%98/5%20%E7%BB%BF%E6%9E%97%E5%AD%A6%E9%99%A2/5%20%E6%AF%95%E4%B8%9A%E4%BF%A1%E6%81%AF/%E9%9D%A2%E8%AF%95%E9%A2%98%E6%80%BB%E7%BB%93/assets/12.png)

![10](../../../../../1-%E6%88%91%E7%9A%84%E6%96%87%E4%BB%B6/F%E7%9B%98/5%20%E7%BB%BF%E6%9E%97%E5%AD%A6%E9%99%A2/5%20%E6%AF%95%E4%B8%9A%E4%BF%A1%E6%81%AF/%E9%9D%A2%E8%AF%95%E9%A2%98%E6%80%BB%E7%BB%93/assets/10.png)

```
patch函数

patch函数的执行分为两个阶段，两次传递的参数都是两个

第一阶段为虚拟dom的第一次渲染，传递的两个参数分别是放真实DOM的container和生成的vnode，此时patch函数的作用是用来将初次生成的真实DOM结构挂载到指定的container上面。

第二阶段传递的两个参数分别为vnode和newVnode，此时patch函数的作用是使用diff算法对比两个参数的差异，进而更新参数变化的DOM节点；

可以发发现h函数和patch函数在cnabbdom中实现vdom到真实DOM的转化起到了至关重要的作用，那么还有一个很重要的环节，patch函数中是怎么样实现对比两个vnode从而实现对真实DOM的更新的呢，这里还要提一下snabbdom的另外一个核心算法，即diff算法。

```

### 6、算法

```
1.diff 算法是虚拟dom生成的必然产物，通过新旧虚拟dom比较，将变化的地方更新到真实的dom上
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
  a）多个数据变化影响一个数据的变化，使用computed，比如购物车计算总价的时候
  b）一个数据变化影响多个数据变化，使用watch，比如说全选与全不选
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
什么是生命周期：vue实例从创建到销毁的过程
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

应用场景：

一般会在created阶段做网络请求,在mounted阶段对第三方插件的初始化。
在beforeDestroy阶段进行清除定时器和一些事件的解绑

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
  3、使用jsonp。 只能解决get请求的跨域请求
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
  vuex、本地存储、事件车、$attrs/$listeners、provide / inject都可以实现。
```

### 12、你都封装过什么组件

```
组件的分类：功能性组件、内容性组件、页面组件
功能性组件：图片轮播、tabbar、tab切换、loading、分页效果等。
页面组件：首页、我的、购物车等
内容性组件：商品列表、商品详情等
```

### 13、什么是路由

```
  路由：就是一组映射关系，在前端路由这里，就一条路径对应一个组件。

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
1.router是VueRouter的一个对象（路由实例），通过Vue.use(VueRouter)和VueRouter构造函数得到一个router的实例对象，这个对象中是一个全局的对象，他包含了所有的路由许多关键的对象和属性。
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
  是路由的默认模式，兼容性比较好，地址栏 URL 中的 # 符号，hash 虽然出现在 URL >中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。但是页面刷新的时候，会向服务器端请求数据。

history模式
  HTML5新增的,兼容性略差， 改变URL而不刷新页面，地址栏没有#号，在项目打包的时候如果使用history模式，前端的URL必须和实际向后端发起请求的URL一致，需要后台配置支持，否则刷新的时候就会出现404错误
```

### 19、路由组件有那些及如何使选中路由高亮显示

```
router-link  router-view
通过linkActiveClass属性设置类名
```

### 20、对 keep-alive 的理解

```
用来缓存组件的，不希望组件被重新渲染影响使用体验,  keep-alive生命周期钩子函数activated 和 deactivated,主要用于保留组件状态或避免重新渲染,在组件切换过程中将状态保留在内存中，防止重复渲染DOM，减少加载时间及性能消耗，提高用户体验性.

项目中可以使用keep-alive进行缓存组件，实现记住访问过的位置。
```

### 21、说说你对 vuex 的理解

```
vuex的概念：Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。
vuex的应用场景：组件嵌套太多，组件数据传递不太方便的时候，可以使用vuex,比如购物车、用户信息等一些共享数据。

五个状态分别是：state、getters、 mutations、actions、modules。

state：存储共享状态（数据），在根实例中注册了store 后，用 this.$store.state 来访问store里面的状态，存放数据方式为响应式。
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


Vue 组件中 data 为什么必须是函数
vue组件中data值不能为对象，因为对象是引用类型，组件可能会被多个实例同时引用。
如果data值为对象，将导致多个实例共享一个对象，其中一个组件改变data属性值，其它实例也会受到影响。

```

### 24、混入

```
混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。
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

https://www.jianshu.com/p/4f3f79a0d7ce
```

### 28、什么是 restful API

```
答：是一个api的标准，无状态请求。请求的路由地址是固定的，如果是tp5则先路由配置中把资源路由配置好。标准有：.post .put .delete

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
表示用户的唯一身份的识别。
1、Token的引入：Token是在客户端频繁向服务端请求数据，服务端频繁的去数据库查询用户名和密码并进行对比，判断用户名和密码正确与否，并作出相应提示，在这样的背景下，Token便应运而生。

2、Token的定义：Token是服务端生成的一串字符串，以作客户端进行请求的一个令牌，当第一次登录后，服务器生成一个Token便将此Token返回给客户端，以后客户端只需带上这个Token前来请求数据即可，无需再次带上用户名和密码。

3、使用Token的目的：Token的目的是为了减轻服务器的压力，减少频繁的查询数据库，使服务器更加健壮。

https://blog.csdn.net/qq_38129062/article/details/89350244
```

### 32、vueX 数据是临时存储的

```
https://www.cnblogs.com/wang-sai-sai/p/11076833.html

Vuex 解决了多视图之间的数据共享问题。但是运用过程中又带来了一个新的问题是，Vuex 的状态存储并不能持久化。也就是说当你存储在 Vuex 中的 store 里的数据，只要一刷新页面，数据就丢失了。

引入vuex-persist 插件，它就是为 Vuex 持久化存储而生的一个插件。不需要你手动存取 storage ，而是直接将状态保存至 cookie 或者 localStorage 中
```
