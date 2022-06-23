---
title: 泛型约束
nav:
  title: 开始
  path: /main
group:
  title: 每日更新
  path: /day
  order: 3
---

## 泛型回顾

- 泛型不是一个具体的类型，而是一个类型构造器

- 泛型可以帮助我们声明我们不限制的类型，可以帮助我们复用类型

- 泛型可以自动推断，只需要在无法推断的情况下进行标注

## 问题

### 举个 🌰

```ts
interface Student {
  id: number;
  name: string;
  age: string;
  friends: Student[];
  teachers: [];
}
```

我们现在有一个 Student 的类型，我们需要一个学生的基本信息 id、name、age, 我们怎么去定义这个类型？

- 重新定义一个

```ts
interface StudentBase {
  id: number;
  name: string;
  age: string;
}
```

这样定义出来了，如果我们的 id 换成 string 了，是不是都得改一遍

- 我们引用一份

```ts
interface StudentBase {
  id: Student['id'];
  name: Student['name'];
  age: Student['age'];
}
```

感觉写起来还是有些重复,我们会想在我们在 js 中一个常用的函数

```js
const pick = (obj, keys) => {
  return keys.reduce((res, key) => {
    res[key] = obj[key];
    return res;
  }, {});
};
```

那我们有没有一种办法来像 pick 函数一样来选取类型呢

- Pick
  之前说泛型是类型构造器，那个我们先来实现一个

```ts
type MyPick<T, K> = {
  // ⛔️ Type 'P' cannot be used to index type 'T'.ts(2536)
  [P in K]: T[P];
};
```

我们来看这个错误

> Type 'P' cannot be used to index type 'T'.ts(2536)

P 不能当作 T 的 index 来使用，我们怎么去解决呢？

## 泛型约束

我们给 K 添加一个上限，我们把 K 约束在 T 的 key 里面，关键字**extends**，这样我们再去使用 T[K]的时候就 ok 了。

> K extends keyof T

- Pick 实现

```ts
// From T, pick a set of properties whose keys are in the union K
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

现在我们再去取 StudentBase 的类型

```ts
type StudentBase = Pick<Student, 'id' | 'name' | 'age'>;
```

是不是感觉好很多

### 再举个 🌰

我们有一个 People 的类型

```ts
interface People {
  name: string;
}
```

有一个打印 name 的函数

```ts
const logName = (people) => {
  return people.name;
};
```

我们给它添加类型

```ts
const logName = (people: People) => {
  console.log('people.name', people.name);
  return people;
};
```

到现在一切都很 OK，我们增加了以下两种角色

```ts
interface Student1 extends People {
  age: number;
}

interface Teacher1 extends People {
  id: number;
}
```

我们也去调用这个函数

```ts
const s1: Student1 = {
  name: 's1',
  age: 2,
};
const s11 = logName(s1);
```

因为 Student1 是 People 的子类型，所以是没问题的，但是 s11 返回来的类型却仍然是 People，这个当然不是我们想要的

所以 logName 的参数类型我们不想局限在 People 类型，我们的想法是只要是能有 name 属性的类型的都是符合我们要求的

也就是说我们既不想限制具体的类型，但是又要对类型的属性有些约束。

前者我们通过泛型来解决，后者我们通过约束来解决。

- 修改我们的代码

```ts
const logName = <T extends People>(people: T) => {
  console.log('people.name', people.name);
  return people;
};
```

这样再去使用的时候,s11 和 t11 都还是返回它原来的类型

```ts
const s1: Student1 = {
  name: 's1',
  age: 2,
};
const t1: Teacher1 = {
  name: 't1',
  id: 345,
};
const s11 = logName(s1);
const t11 = logName(t1);
```

## 小结

有时候我们说这个是泛型 T，那个也是泛型 T，这还不够，我们还想表达“类型 U 至少应为 T”，即为 U 设置一个上限。这个时候我们需要给泛型添加约束
