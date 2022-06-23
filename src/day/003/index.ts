interface Student {
  id: number;
  name: string;
  age: string;
  friends: Student[];
  teachers: [];
}

interface StudentBase {
  id: Student['id'];
  name: Student['name'];
  age: Student['age'];
}

type StudentBase1 = Pick<Student, 'id' | 'name' | 'age'>;

const pick = (obj, keys) => {
  return keys.reduce((res, key) => {
    res[key] = obj[key];
    return res;
  }, {});
};

type MyPick<T, K> = {
  [P in K]: T[P];
};

/**
 * From T, pick a set of properties whose keys are in the union K
 */
type MyPick2<T, K extends keyof T> = {
  [P in K]: T[P];
};

interface People {
  name: string;
}

interface Student1 extends People {
  age: number;
}

interface Teacher1 extends People {
  id: number;
}

const logName = <T extends People>(people: T) => {
  console.log('people.name', people.name);
  return people;
};

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
