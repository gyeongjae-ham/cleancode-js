// is Not A Number -> 숫자가 아니다

typeof 123 === "number"; // true
isNaN(123); // isNaN은 숫자가 아닌게 맞다 아니다로 판별되기 때문에 헷갈릴 수 있다(느슨한 검사)

// 때문에 Number를 붙여서 검사하는 걸 권장한다(엄격한 검사)
Number.isNaN(123);
