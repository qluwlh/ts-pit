---
title: 泛型误区
nav:
  title: 开始
  path: /main
group:
  title: 每日更新
  path: /day
  order: 4
---

## 泛型回顾

- 泛型不是一个具体的类型，而是一个类型构造器

- 泛型可以帮助我们声明我们不限制的类型，可以帮助我们复用类型

- 泛型可以自动推断，只需要在无法推断的情况下进行标注

- 有时候我们说这个是泛型 T，那个也是泛型 T，这还不够，我们还想表达“类型 U 至少应为 T”，即为 U 设置一个上限。这个时候我们需要给泛型添加约束

## 误区

### 作用不大的时候

### 类型擦除

### 当作值来用