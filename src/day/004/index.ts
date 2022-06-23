type Not<T> = NonNullable<T>;

const get = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

interface Name {
  alias: string;
  real: string;
}

interface School {
  id: number;
  classes: number[];
  name: Name;
}
const o1: School = {
  id: 1,
  classes: [1, 2, 2],
  name: {
    real: 'real',
    alias: 'alias',
  },
};
const ddd = o1.name;
const b = get(o1, 'name');
