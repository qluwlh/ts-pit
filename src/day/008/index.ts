function raise(): never {
  throw new Error('ddd');
}

function loop() {
  while (true) {}
}

type Day = 1 | 2 | 3 | 4;

function parseDay(day: Day): string {
  switch (day) {
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
      return 'three';
    case 4:
      return 'four';
    default:
      return day;
  }
}

type B = number & never;

type People33 = {
  name: number;
  age: number;
};

type Student33 = Omit<People33, 'name'> & {
  name: string;
};

const d: Student33 = {
  name: 'Join',
  age: 999,
};
