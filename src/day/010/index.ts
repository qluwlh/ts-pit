function isWeekend(value: DayOfWeek) {
  return value === DayOfWeek.Saturday || value === DayOfWeek.Sunday;
}

function isWeekday(value: DayOfWeek) {
  return value >= DayOfWeek.Monday && value <= DayOfWeek.Friday;
}

const Monday = 0;
const Tuesday = 1;
const Wednesday = 2;
const Thursday = 3;
const Friday = 4;
const Saturday = 5;
const Sunday = 6;

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

isWeekend(DayOfWeek.Friday);

function parseDayOfWeek(value: string): DayOfWeek | null {
  switch (value) {
    case 'monday':
      return DayOfWeek.Monday;
    default:
      return null;
  }
}

function isNotNull<T>(value: T | null): value is T {
  return value !== null;
}
const res = parseDayOfWeek('ddd');
if (isNotNull(res)) {
  res + 1;
}

type MyStudent = {
  age: number;
};

function getStudent(id: number): MyStudent | null {
  return { age: 18 };
}

getStudent(0)?.age;

type Some<A> = { _tag: 'Some'; value: A };
type None = { _tag: 'None' };

type Option<A> = Some<A> | None;

const some = <T>(value: T): Option<T> => {
  return { _tag: 'Some', value };
};

const none: Option<never> = { _tag: 'None' };

function isNone<T>(value: Option<T>): value is None {
  return value._tag === 'None';
}
const od = some(1);

const map =
  <A, B>(f: (v: A) => B) =>
  (value: Option<A>): Option<B> => {
    if (isNone(value)) {
      return none;
    } else {
      return some(f(value.value));
    }
  };

const add1 = (a: number) => {
  return a + 1;
};

map(add1)(map(add1)(map(add1)(none)));
