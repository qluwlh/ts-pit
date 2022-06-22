interface Student {
  name: string;
  age: number;
}
const s: Student = {
  name: 'Tom',
  age: 18,
};

const getStudentName = (s: Student): string => {
  return s.name;
};

getStudentName(s);

const identity = <T>(value: T): T => value;
identity(10);

const addTen = (value: number): number => {
  return value + 10;
};

addTen(identity(10));

interface Res<T> {
  code: number;
  msg: string;
  data: T;
}

type ListStudentsData = {
  name: string;
};
type ListStudentsRes = Res<ListStudentsData>;

type A = Promise<number>;

const listStudents = async (): Promise<ListStudentsRes> => {};
