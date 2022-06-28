const log = (target: unknown) => {
  console.log('target', target);
};

class People1<T> {
  constructor(public name: T) {
    this.name = name;
  }
}

const p1 = new People1(1);
if (p1 instanceof People1<number>) {
  console.log('p1', p1);
}

function reverse(items) {
  const res = [];
  for (let i = items.length - 1; i >= 0; i--) {
    res.push(items[i]);
  }
  return res;
}
class Queue {
  private data = [];
  push = (item) => this.data.push(item);
  pop = () => this.data.shift();
}

const pick = (obj, keys) => {
  return keys.reduce((res, key) => {
    res[key] = obj[key];
    return res;
  }, {});
};
