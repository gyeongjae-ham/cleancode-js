// 전역변수를 사용하지 말라
var global = "전역";

if (global === "전역") {
  var global = "지역";

  console.log(global); // '지역'으로 출력됨
}

console.log(global); // '지역'으로 출력되면서 전역 변수가 오염된 것을 확인할 수 있음

// var는 함수 단위 스코프이기 때문에 if 문의 경우 함수가 아니므로 전역 변수가 변경됨

let global1 = "전역";

if (global1 === "전역") {
  let global1 = "지역";

  console.log(global1); // '지역'으로 출력됨
}

console.log(global1); // '전역'으로 출력 블록 단위 스코프이므로
