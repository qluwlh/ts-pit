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

const num = identity<number>(10);
const str = identity<string>('10');

const addOne = (value: number) => value + 1;

addOne(identity('1'));

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

const a = {
  code: 0,
  msg: '',
  data: {},
};

interface CommonResponse<T> {
  code: number;
  msg: '';
  data: T;
}

interface GetStudentResponseData {
  name: string;
  age: number;
}

interface GetSchoolResponseData {
  id: number;
}

type GetStudentResponse = CommonResponse<GetStudentResponseData>;
type GetSchoolResponse = CommonResponse<GetSchoolResponseData>;
