---
title: 泛型简介
nav:
  title: 开始
  path: /main
group:
  title: 每日更新
  path: /day
  order: 2
---

## 具体类型

```ts
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
```

## 思考

使用具体类型的前提是明确知道需要什么类型，并且想确认传入的确实是那个类型。但是有时我们事先不知道，也不想限制函数只能接受某个类型。

比如说，在 js 中，我们有一个返回输入值的函数

```js
const identity = (value) => value;
```

我们怎么去给他添加类型呢？

### 尝试

既然我们想要任意类型，那我用 any 行不行

```ts
const identity = (value: any) => value;
identity(4);
identity('ddd');
```

可以，调用的时候没有问题了，然后我们再来看，我们定义一个传参为 number 的函数

```ts
const addOne = (value: number) => value + 1;
addOne(identity('1'));
```

我们使用 identity 时，传参为 any,那么返回值也为 any, 这样我们在去使用的时候就失去了类型检查，可能就会造成结果与我们的期望不符的情况

## 泛型

那我们在声明的时候不需要关心类型，那我可不可以在使用的再去声明具体的类型？

想一下我们的函数，在声明的时候使用的是形参，只有再调用的时候才传入实参。

那类型可不可以有这种效果呢？答案就是泛型

### 再看 identity

我们再看这个 identity

```ts
const identity = <T>(value: T): T => value;
```

我们把 any 换掉，现在是一个类型构造器而不是一个具体的类型，在使用的时候再去声明 T 的具体类型

```ts
const num = identity<number>(10);
const str = identity<string>('10');
```

这样我们返回的类型就是我们声明的类型了，类型没有丢失

```ts
const addOne = (value: number) => value + 1;

// ⛔️ Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
addOne(identity('1'));
```

可以看到再去使用的时候就会有错误提示了

### 复用

我们的接口返回来的数据很多为这种形式

```ts
{
  code: 0,
  msg: '',
  data: {},
}
```

我们怎么去定义它的类型呢,我们可以想到，code 和 msg 都可以用具体的类型去声明，而 data 我们限制，所以我们可以去这样声明

```ts
interface CommonResponse<T> {
  code: number;
  msg: '';
  data: T;
}

interface GetStudentResponseData {
  name: string;
  age: number;
}
type GetStudentResponse = CommonResponse<GetStudentResponseData>;

interface GetSchoolResponseData {
  id: number;
}
type GetSchoolResponse = CommonResponse<GetSchoolResponseData>;
```

这样我们就可以只传入 data 的类型就可以了，我们通过泛型达到了类型的复用

### 泛型推断

另外，由于 TypeScript 有类型推断，我们在使用的时候，有时不需要显式的声明，只有在编译器确定不了的情况下再告诉他类型就好了。比如之前的我们可以这样用，也推荐这样去使用。

```ts
const num = identity(10);
const str = identity('10');
```

### 手动声明

```ts
interface Student {
  name: string;
  age: number;
}
const mockService = () =>
  Promise.resolve<Student[]>([
    { name: 's1', age: 8 },
    { name: 's2', age: 7 },
  ]);
function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    mockService().then((res) => {
      // ⛔️ Argument of type 'Student[]' is not assignable to parameter of type 'SetStateAction<never[]>'.
      //    Type 'Student[]' is not assignable to type 'never[]'.
      //    Type 'Student' is not assignable to type 'never'.ts
      setStudents(res);
    });
  }, []);
}
```

因为我们的 students 初始值为[],推断初始类型为 never[]，而 res 的类型为 Student[]，所以会报错。

像这种编译器无法推断的情况，这个时候需要你显式的声明。

```ts
const [students, setStudents] = useState<Student[]>([]);
```

类似的还有初始值为 null 的情况，我们也需要去手动声明。

```ts
const [studentInfo, setStudentInfo] = useState<Student | null>(null);
```

## 小结

- 泛型不是一个具体的类型，而是一个类型构造器

- 泛型可以帮助我们声明我们不限制的类型，可以帮助我们复用类型

- 泛型可以自动推断，只需要在无法推断的情况下进行标注
