---
title: Props
---

## 什么是 Props

Props 是你可以在组件上注册的一些自定义 attribute。当一个值传递给一个 prop attribute 的时候，它就变成了那个组件实例的一个 property。对于一个给定的 prop，你可以在组件内部像 `this.message` 这样访问它的值。一个组件的 `data` property 必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝。

## 静态和动态 Props

在模板中，你可以用 `v-bind` 指令将一个动态的值绑定到一个 prop 上：

```tsx
<blog-post
  v-bind:id="post.id"
  v-bind:title="post.title"
></blog-post>
```

在这个例子中，`id` 和 `title` 都是 props。当一个 prop 的值传递给一个组件的时候，它就变成了那个组件实例的一个 property。这里，`post.id` 的值将会传递给 `blog-post` 组件实例的一个名为 `id` 的 property。

你也可以用一个字符串字面量来传递一个静态的值：

```tsx

<blog-post id="1"></blog-post>
```

## 单向数据流

所有的 prop 都使得其父子 prop 之间形成了一个**单向下行绑定**：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。

## Prop 验证

在组件中，你可以为 props 指定验证要求。如果传入的数据不符合要求，Vue 会发出警告。这在开发过程中非常有用，但是在生产环境中会被忽略。

### 类型检查

你可以为 props 指定类型，这样 Vue 就会在控制台给出警告，如果传入的数据类型不对：

```tsx
props: {
  // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
  propA: Number,
  // 多个可能的类型
  propB: [String, Number],
  // 必填的字符串
  propC: {
    type: String,
    required: true
  },
  // 数字，有默认值
  propD: {
    type: Number,
    default: 100
  },
  // 数组／对象的默认值应当由一个工厂函数返回
  propE: {
    type: Object,
    default: function () {
      return { message: 'hello' }
    }
  },
  // 自定义验证函数
  propF: {
    validator: function (value) {
      return value > 10
    }
  }
}
```

### 验证 Prop

当一个 prop 传入一个组件时，它就变成了那个组件实例的一个 property。这意味着你可以在这个组件内部像 `this.propName` 这样访问它，就像访问 `data` 一样。同样，你也可以在模板中使用 `this.propName`。Vue 会在组件实例创建时，将 `props` 的值转换为 `data` 并且使其响应式。这意味着当父组件的数据变化时，将传导给子组件，从而影响子组件的输出。

## 声明 Prop的几种方式

### 1. 在组件的 props 选项中声明

```tsx
Vue.component('child', {
  // 声明 props
  props: ['message'],
  // 就像 data 一样，prop 可以用在模板内
  // 同样也可以在 vm 实例中像 “this.message” 这样使用
  template: '<span>{{ message }}</span>'
})
```

### 2. 在组件的 props 选项中声明

```tsx
Vue.component('child', {
  // 声明 props
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    message: String,
    // 多个可能的类型
    message: [String, Number],
    // 必填的字符串
    message: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    message: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    message: {
      type: Object,
      // 对象或数组且一定要从一个工厂函数获取默认值
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    message: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  },
  template: '<span>{{ message }}</span>'
})
```

### 3. 在`setup`中声明

```tsx
defineProps({
  // 基础类型检查
  // （给出 `null` 和 `undefined` 值则会跳过任何类型检查）
  propA: Number,
  // 多种可能的类型
  propB: [String, Number],
  // 必传，且为 String 类型
  propC: {
    type: String,
    required: true
  },
  // Number 类型的默认值
  propD: {
    type: Number,
    default: 100
  },
  // 对象类型的默认值
  propE: {
    type: Object,
    // 对象或数组的默认值
    // 必须从一个工厂函数返回。
    // 该函数接收组件所接收到的原始 prop 作为参数。
    default(rawProps) {
      return { message: 'hello' }
    }
  },
  // 自定义类型校验函数
  propF: {
    validator(value) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].includes(value)
    }
  },
  // 函数类型的默认值
  propG: {
    type: Function,
    // 不像对象或数组的默认，这不是一个工厂函数。这会是一个用来作为默认值的函数
    default() {
      return 'Default function'
    }
  }
})
```

### 4. 在`setup tsx`中声明

```tsx
const props = defineProps<{
  foo: string
  bar?: number
}>()
```
