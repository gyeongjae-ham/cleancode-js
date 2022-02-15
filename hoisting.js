// 호이스팅이란? 런타임 시에 선언과 할당이 분리된 것(선언이 최상단으로 끌어올려 짐)
// 코드를 작성할 때 예측하기 힘들어짐 따라서 var를 사용하지 않는다
// let과 const의 경우에는 괜찮지만 var를 사용했을 경우 선언이 제대로 되어 있지 않을 경우 최상단으로 undefined를 끌어올림
// var 사용 예시

var global = 0;

function outer() {
  console.log(global); // undefined -> 호이스팅 일어나는 곳

  function inner() {
    var global = 10;

    console.log(global); // 10
  }

  inner();

  global = 1;
  console.log(global); // 1
}

// 함수의 경우
// 1
var sum;

sum = function () {
  return 1 + 2;
};

console.log(sum()); // 3 동작함

// 2

var sum;

console.log(typeof sum); // function 동작함 undefined 안 뜨는 이유는 함수도 호이스팅 되기 때문이다

function sum() {
  return 1 + 2;
}

console.log(sum()); // 3 동작함

// 함수를 만들 땐 함수 표현식을 사용하는 걸 추천

const sum = function () {
  return 1 + 2;
};

// 결론: var를 쓰지 않는다, 함수 표현식을 쓰자
