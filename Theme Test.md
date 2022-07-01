---
title: Heading Level 1
aliases: 
tags: 
date created: 2022-07-01 22:24:20
date updated: 2022-07-02 00:42:45
---

# Heading Level 1

I really like using Markdown.  

I think I'll use it to format all of my documents from now on.

This is the first line.    

And this is the second line.

## Heading Level 2

Love**is**bold

A*cat*meow

This is really***very***important text.

~~世界是平坦的。~~ 我们现在知道世界是圆的。

### Heading Level 3

> Dorothy followed her through many of the beautiful rooms in her castle.

> Dorothy followed her through many of the beautiful rooms in her castle.
> 
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
> 
> > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

> #### The quarterly results look great!
> 
> - [ ] Revenue was off the chart.
> 
> - Profits were higher than ever.
>   
>   *Everything* is going according to **plan**.

> [!note]
> Dorothy followed her through many of the beautiful rooms in her castle.
> 
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
> 
> > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

#### Heading Level 4

1. First item  
2. Second item  
3. Third item  
       1. Indented item  
       2. Indented item  
4. Fourth item
- First item  
- Second item  
- Third item  
  - Indented item
  - Indented item
- Fourth item
1. First item
2. Second item
3. Third item
   - Indented item
   - Indented item
4. Fourth item
- [x] Write the press release
- [x] Update the website ✅ 2022-07-02
- [ ] Contact the media

##### Heading Level 5

At the command prompt, type `nano`.

``Use `code` in your Markdown file.``

```javascript
let obj = {
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}

console.log(obj)
```

###### Heading Level 6

---

这是一个链接 [Markdown语法](https://markdown.com.cn)。

这是一个链接 [Markdown 语法](https://markdown.com.cn "最好的 markdown 教程")。

<https://markdown.com.cn>

<fake@example.com>

![美女头像 - Bing images](https://p.qqan.com/up/2020-8/15985907552872999.jpg)

\* Without the backslash, this would be a bullet in an unordered list.

This <mark style="background: #ABF7F7A6;"> **word** </mark> is bold . This <em> word </em> is italic.

| Syntax    | Description | TestText    | Test      | 标题   |
|:--------- |:-----------:| -----------:| --------- | ---- |
| Header    | Title       | Here's this | Test      | 我是内容 |
| Paragraph | Text        | And more    | Test Text |      |

| Syntax    | Description | TestText    | Test | Test | 我加长加长 | Test | Test | Test      |
|:--------- |:-----------:| -----------:| ---- | ---- | ----- | ---- | ---- | --------- |
| Header    | Title       | Here's this |      |      | 中国    |      |      | Test      |
| Paragraph | Text        | And more    |      |      | 中文字   |      |      | Test Text |

:joy:

Here's a sim[^1]ple footnote,[^2] and here's a longer[^3] one.[^4]

---

```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "data": { "url": "data/population.json"},
  "transform": [
    {"filter": "datum.year == 2000"},
    {"calculate": "datum.sex == 2 ? 'Female' : 'Male'", "as": "gender"}
  ],
  "mark": "bar",
  "encoding": {
    "y": {
      "aggregate": "sum", "field": "people", "type": "quantitative",
      "axis": {"title": "population"},
      "stack":  "normalize"
    },
    "x": {"field": "age", "type": "ordinal"},
    "color": {
      "field": "gender", "type": "nominal",
      "scale": {"range": ["#675193", "#ca8861"]}
    }
  }
}
```

$$
\begin{align}
 \frac{\partial J(\theta)}{\partial\theta_j}
 & = -\frac1m\sum_{i=0}^m(y^i - h_\theta(x^i)) \frac{\partial}{\partial\theta_j}(y^i-h_\theta(x^i))\\
 & = -\frac1m\sum_{i=0}^m(y^i-h_\theta(x^i)) \frac{\partial}{\partial\theta_j}(\sum_{j=0}^n\theta_j x^i_j-y^i)\\
 &=-\frac1m\sum_{i=0}^m(y^i -h_\theta(x^i)) x^i_j
\end{align}
$$

```flowchart
st=>start: Improve your l10n process! e=>end: Continue to have fun!:>https://youtu.be/YQryHo1iHb8[blank] op1=>operation: Go to locize.com:>https://locize.com[blank] sub1=>subroutine: Read the awesomeness cond(align-next=no)=>condition: Interested to getting started? io=>inputoutput: Register:>https://www.locize.io/register[blank] sub2=>subroutine: Read about improving your localization workflow or another source:>https://medium.com/@adrai/8-signs-you-should-improve-your-localization-process-3dc075d53998[blank] op2=>operation: Login:>https://www.locize.io/login[blank] cond2=>condition: valid password? cond3=>condition: reset password? op3=>operation: send email sub3=>subroutine: Create a demo project sub4=>subroutine: Start your real project io2=>inputoutput: Subscribe st->op1->sub1->cond cond(yes)->io->op2->cond2 cond2(no)->cond3 cond3(no,bottom)->op2 cond3(yes)->op3 op3(right)->op2 cond2(yes)->sub3 sub3->sub4->io2->e cond(no)->sub2(right)->op1 st@>op1({"stroke":"Red"})@>sub1({"stroke":"Red"})@>cond({"stroke":"Red"})@>io({"stroke":"Red"})@>op2({"stroke":"Red"})@>cond2({"stroke":"Red"})@>sub3({"stroke":"Red"})@>sub4({"stroke":"Red"})@>io2({"stroke":"Red"})@>e({"stroke":"Red","stroke-width":6,"arrow-end":"classic-wide-long"})

```
