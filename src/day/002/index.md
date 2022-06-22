---
title: 泛型简介
nav:
  title: 开始
  path: /main
group:
  title: 每日更新
  path: /day
  order: 2
---

## 具体类型

```ts
interface Student {
  name: string;
  age: number;
}
const s: Student = {
  name: 'Tom',
  age: 18,
};
const getStudentName = (s: Student): string => {
  return s.name;
};
```

## 思考

使用具体类型的前提是明确知道需要什么类型，并且想确认传入的确实是那个类型。但是有时我们事先不知道，也不想限制函数只能接受某个类型。

比如说，在 js 中，我们有一个返回输入值的函数

```js
const identity = (value) => value;
```

我们怎么去给他添加类型呢？
