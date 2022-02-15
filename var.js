// var를 지양하자
// ES2015 부터 좋은 기능 예인 let, const가 도입됨
// var는 함수 스코프, let과 const는 블록 스코프와 TDZ라는 속성을 가짐
// TDZ = Temporal Dead Zone
// -> 안전하게 코드를 작성할 수 있음

var name = "test1";
var name = "test2";
var name = "test3";
// 재선언할 수 있기 때문에 코드가 길어졌을 경우 에러를 찾기 힘듦

let name1 = "test4";
name1 = "test5";
// let은 변수 선언은 한번이지만 변수 값은 바꿀 수 있다

const name2 = "test6";
// const는 변수와 값을 변경할 수 없다
