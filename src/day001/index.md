---
title: day01-值和类型
nav:
  title: 开始
  path: /day
group:
  title: 每日更新
  path: /pit
  order: 1
---

对于刚使用 TypeScript 的同学来说，一个常见的错误便是

> \*\*\* only refers to a type, but is being used as a value here. ts(2693)

错误的原因是我们把类型当作值来使用了，先来了解两个基本概念： 值和类型

## 值

### 什么是值

在 JavaScript 中

```js
"Jack"  18  true ......
```

### 声明值

```js
const name = "Jack"
const age = 18;
const p = {
  name: 'Jack',
  age: 18,
}
......
```

## 类型

### 什么是类型

```ts
number;
boolean;
string;
interface People {
  name: string;
  age: number;
}
type Add = (a: number, b: number) => number;
```

## 声明类型

```ts
const name: string = 'Jack';
const age: number = 18;
const p2: People = {
  name: 'Jack',
  age: 19,
};

const add: Add = (a, b) => {
  return a + b;
};
```

## 常见错误

把值和类型混用

### 把类型当作值来使用

```ts
interface Currency {
  unit: 'USD' | 'CNY' | 'EUR';
  value: number;
}

let currency: Currency;

// ⛔️ 'Currency' only refers to a type, but is being used as a value here.ts(2693)
if (currency instanceof Currency) {
  console.log(currency.value);
}
```

## 两个例外

class 和 enum

### class

```ts
class Student {
  constructor(public name: string) {
    this.name = name;
  }
}
const s: Student = new Student('John');
```

### enum

```ts
enum Color {
  red = 0,
  blue = 1,
  green = 2,
}

const c1: Color = Color.blue;
```
