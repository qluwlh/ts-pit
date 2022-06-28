function raise(): never {
  throw new Error('ee');
}
function loop(): number {
  while (true) {}
}

declare const UnitType: unique symbol;
class Unit {
  [UnitType]: void;
  static readonly value = new Unit();
  private constructor() {}
}

function log(value: unknown): Unit {
  console.log('value', value);
  return Unit.value;
}

declare const EmptyType: unique symbol;
class Empty {
  [EmptyType]: void;
  private constructor() {}
}

function raise1(): Empty {
  throw new Error('ee');
}

function loop1(): Empty {
  while (true) {}
}

function log1(value: unknown): void {
  console.log('first', value);
}

let a = 9;
let b = 9n;

let aa = 'aaa';

const aaaa = 'dddd';

type type = 'day' | 'month' | 'year';

let ccc: 'uu' = 'uu';

function get(url: `/${string}`) {}

let sym = Symbol('__');

let c = true;

let bbb = [1, 2, 3];

let ddd = {
  a: 1,
};

interface User {
  name: string;
}

function parse() {}

const user = JSON.parse('}');

user.name;

if (isUser(user)) {
  user.name;
}

function isUser(value: unknown): value is User {
  if (value !== undefined) {
    return true;
  }
  return false;
}

let aqqq = [1, 2, 3];
let bqqq: string[] = [];
bqqq.push('a');
bqqq.push('b');

class ListNode<T> {
  value: number;
}

const bbbb = new Date();

let aaaaa = 'hello';

type ServiceURL = `/${string}`;

function get1(url: ServiceURL) {
  return Promise.resolve({});
}

get('/student');
// Argument of type '"student"' is not assignable to parameter of type '`/${string}`'.ts(2345)
get('student');
type week = 1 | 2 | 3 | 4 | 5 | 6 | 7;

class User11 {
  constructor(public name: string) {
    this.name = name;
  }
}

function parse1(value: string): unknown {
  return JSON.parse(value);
}

function greet(user: User) {
  console.log(`hello ${user.name}`);
}
let user1 = parse1('{"name": "tom"}');
let user2 = parse1('null');

function isUser1(user: unknown): user is User {
  if (user === null || user === undefined) {
    return false;
  }
  return true;
}

if (isUser1(user1)) {
  greet(user1);
}
if (isUser1(user2)) {
  greet(user2);
}

user1 = undefined;
greet(user1);
