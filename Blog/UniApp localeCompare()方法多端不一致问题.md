---
title: UniApp localeCompare()方法多端不一致问题
---
## String.prototype.localeCompare()方法

- 用于比较两个字符串，返回一个数字，表示比较结果。
  - 该方法的返回值如下：
    - 如果字符串在字母表中应该排在字符串参数之前，则该方法返回一个负数。
    - 如果字符串等于字符串参数，则该方法返回 0。
    - 如果字符串在字母表中应该排在字符串参数之后，则该方法返回一个正数。
  - 语法：`str.localeCompare(compareString[, locales[, options]])`
  - 参数：
    - compareString：必需。一个字符串，用来比较 str。
    - locales：可选。一个字符串或字符串数组，包含用来比较的语言环境。
    - options：可选。一个对象，包含以下属性：
      - usage：一个字符串，指定比较字符串的用途。可能的值有 "sort"、"search" 或 "match"。默认为 "sort"。
      - sensitivity：一个字符串，指定比较时大小写和重音的敏感性。可能的值有 "base"、"accent"、"case"、"variant"。默认为 "variant"。
      - ignorePunctuation：一个布尔值，指定是否忽略标点符号。默认为 false。
      - numeric：一个布尔值，指定是否按照数字顺序比较字符串。默认为 false。
      - caseFirst：一个字符串，指定是否区分大小写。可能的值有 "upper"、"lower" 或 "false"。默认为 "false"。
  - 返回值：一个数字，表示比较结果。

### 示例

```js
var str1 = "ab";
var str2 = "cd";
var str3 = "ab";
var str4 = "AB";
// 这里需要注意的是，并不是所有解释器都执行相同的排序规则以及返回的结果
console.log(str1.localeCompare(str2)); // -1
console.log(str2.localeCompare(str1)); // 1
console.log(str1.localeCompare(str3)); // 0
console.log(str1.localeCompare(str4)); // 1
console.log(str1.localeCompare(str4, "en", { sensitivity: "base" })); // 0
```

### 注意

- 浏览器支持情况：[Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/?search=localeCompare)
- 并不是所有的浏览器都执行相同的排序规则以及返回的结果，因此不要依赖于 localeCompare() 的返回值来排序数组
- 该方法不支持比较 Unicode 扩展字符（非基本多文种平面字符）

## 起因

- 一维数组转通讯录树

```js
['张三','李四','王五'] => {
  'A': ['张三'],
  'L': ['李四'],
  'W': ['王五']
}
```

## 问题

- 问题一：在uniapp中使用String.localeCompare方法进行字符串比较时，发现在APP端和小程序的结果不一致。
- 问题二：~~在uniapp中数组元素String.localeCompare方法是Undefined(未复现)~~

### CODE

```js
// 在APP端和小程序的结果不一致
'张'.localeCompare('李') // MP => 1, APP => -2094
```

## 解决

- APP端使用pinyin.js进行拼音转换，再进行比较

完整代码 [[一维数组转通讯录树]]

```js
// 添加
// #ifdef APP-PLUS
let py = pinyin(v[key], { // 李世民 => [['l'],['s'],['m']]
  style: 'FIRST_LETTER',
})
// L === L
if (py[0][0].toUpperCase() == items) {
  curr.child.push(v)
}
// #endif

// 排序
// #ifdef APP-PLUS
pinyin(a[key], {
  style: 'FIRST_LETTER',
})[0][0].localeCompare(
  pinyin(b[key], {
    style: 'FIRST_LETTER',
  })[0][0],
)
// #endif
// #ifdef MP
a[key].localeCompare(b[key])
// #endif
```

## 完整代码

```javascript
// npm i pinyin
import pinyin from 'pinyin'
function pySegSort(arr, key) {
  if (arr.length == 0) return
  if (!String.prototype.localeCompare) return null
  let letters = '*ABCDEFGHJKLMNOPQRSTWXYZ'.split('')
  let zh = '阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀'.split('')
  let segs = [] // 存放数据
  let res = {}
  let curr = {} // 当前数据
  let re = /[^\u4e00-\u9fa5]/ //中文正则
  let pattern = new RegExp(
    "[`\\-~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？12345678990]",
  ) //特殊符号

  letters.filter((items, i) => {
    curr = {
      initial: '', //字母
      child: [], //数据
    }
    arr.map((v, index) => {
      // 特殊字符
      if (pattern.test(v[key][0])) {
        if (items == '*') {
          curr.child.push(v)
        }
      }
      // 判断首个字是否是中文
      if (re.test(v[key][0])) {
        // 英文
        if (v[key][0].toUpperCase() == items) {
          curr.child.push(v)
        }
      } else {
        // 中文
        // #ifdef MP
        if (
          (!zh[i - 1] || `${zh[i - 1]}`.localeCompare(v[key]) <= 0) &&
          v[key].localeCompare(`${zh[i]}`) == -1
        ) {
          curr.child.push(v)
        }
        // #endif
        // #ifdef APP-PLUS
        let py = pinyin(v[key], {
          style: 'FIRST_LETTER',
        })
        if (py[0][0].toUpperCase() == items) {
          curr.child.push(v)
        }
        // #endif
      }
    })

    if (curr.child.length) {
      curr.initial = letters[i]
      segs.push(curr)
      curr.child.sort((a, b) => {
        let result
        // #ifdef MP
        result = a[key].localeCompare(b[key])
        // #endif
        // #ifdef APP-PLUS
        result = pinyin(a[key], {
          style: 'FIRST_LETTER',
        })[0][0].localeCompare(
          pinyin(b[key], {
            style: 'FIRST_LETTER',
          })[0][0],
        )
        // #endif
        return result
      })
    }
  })
  res.segs = Array.from(new Set(segs)) //去重
  return res
},
```

### 参考

- [String.prototype.localeCompare()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
