const people = {
  name: 'John',
  age: 9,
};

type People111 = typeof people;

const bbbcb: People111 = {
  name: 'John',
  age: 10,
};

let DDDD = 'ddfdsfsd';

function isNumber(value: any): value is number {
  return true;
}

function adddd(a: number, b: number) {
  return a + b;
}

interface Person4 {
  name: string;
  add?: () => number;
}

let ff: Person4 = {
  name: 'John',
};

ff.add?.();

location.href;

const bbbDDD = Number(DDDD);

type D = 0 | 1 | 2;

function ttt(value: D): string {
  switch (value) {
    case 0:
      value;
      return '1';
    case 1:
      value;
      return '1';
  }
}
