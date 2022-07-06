const a1 = [1, 2, 3, 4];

const a2 = [1, 23, 'dd'];
a2[100] = 100;

type Tuple1 = [string, number];
type MaybeError = [Error | null, number];

const p11: Tuple1 = ['tom', 19];
const p12: Tuple1 = ['jack', 18];

type P = {
  name: string;
  age: number;
};
const p111: P = {
  name: 'John',
  age: 18,
};
p111.age;

function add1111(name: string, age: number): string {
  return 4;
}

type AddParamsType = Parameters<typeof add>;

type one = AddParamsType[1];
