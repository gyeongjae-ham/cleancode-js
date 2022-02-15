typeof "문자열"; // 'string'
typeof true; // 'boolean'
typeof undefined; // 'undefined'
typeof 123; // 'number'
typeof Symbol(); // 'symbol'

// PRIMITIVE VS REFERENCE
// REFERENCE의 경우 typeof로 타입 검사하기 어렵다

function myFunction() {}
typeof myFunction; // 'function'

class myClass {}
typeof myClass; // 'function' 함수와 구분할 수 없음

// REFER 객체로 만들 경우

const str = new String("문자열");
typeof str; // 'object'

// PRIMITIVE 값은 분별해낼 수 있지만 REFERENCE 값은 분별하기 어려움

typeof null; // 'object' 언어적인 오류

// 자바스크립트는 동적인 언어이고 타입마저 동적으로 변한다

// instanceof
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p = {
  name: "poco",
  age: 99,
};

const poco = new Person("poco", 99);

p instanceof Person; // false
poco instanceof Person; // true

//

const arr = [];
const func = function () {};
const date = new Date();

arr instanceof Array; // true
func instanceof Function; // true
date instanceof Date; // true

// but, 최상위가 object라서 분별안될 수도 있음

arr instanceof Object; // true
func instanceof Object; // true
date instanceof Object; // true

// 그래서 이런 방법을 많이 사용함

Object.prototype.toString.call(arr); // '[object Array]'
Object.prototype.toString.call(func); // '[object Function]'
Object.prototype.toString.call(date); // '[object Date]'

// 결론: 동적인 타입을 가지기 때문에 타입 검사가 어렵다
// 구글링을 통해서 검사 방법을 검색해서 써보자
