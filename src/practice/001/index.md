---
title: 泛型
nav:
  path: /main
group:
  title: 练习
  path: /practice
  order: 20001
---

### 添加类型

- function reverse

```ts
function reverse(items) {
  const res = [];
  for (let i = items.length - 1; i >= 0; i--) {
    res.push(items[i]);
  }
  return res;
}
```

- Class Queue

```ts
class Queue {
  private data = [];
  push = (item) => this.data.push(item);
  pop = () => this.data.shift();
}
```

```ts
const pick = (obj, keys) => {
  return keys.reduce((res, key) => {
    res[key] = obj[key];
    return res;
  }, {});
};
```
