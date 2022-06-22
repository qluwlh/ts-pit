---
title: 值和类型
nav:
  title: 开始
  path: /main
group:
  title: 每日更新
  path: /day
  order: 1
---

对于刚使用 TypeScript 的同学来说，一个常见的错误便是

> \*\*\* only refers to a type, but is being used as a value here. ts(2693)

在 TypeScript 中，多数时候，我们要表达的是值或者类型，这个错误的原因是我们把类型当作值来使用了。

先来了解两个基本概念： **值和类型**

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

## 命名空间

在 TypeScript 中，类型和值位于不同的命名空间中。TypeScript 可以自动推断使用的是值还是类型

```ts
// 值
let age = 18;
function add() {}

//类型
type age = number;
interface add {
  (): void;
}

//自动推断
if (age > 19) {
  let tom: age = 20;
}
```

## 常见错误

值和类型错用

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

## 两个特殊

class 和 enum, 他们既在类型命名空间中生成类型，也在值命名空间中生成值

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

### 自己实现

```ts
interface Student {
  name: string;
}

function Student(name: string): Student {
  return { name };
}

const student: Student = Student('Tom');
```
