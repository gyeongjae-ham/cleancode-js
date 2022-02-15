!null; // true
!!null; // false

null === false; // false...??
!null === true; // true.....??

// null은 수학적으로는 0으로 취급
null + 13; // 13....?

// 변수는 선언했지만 값은 정의하지 않은 경우
let test;

typeof test; // 'undefined'

undefined + 13; // NaN

!undefined; // true...?

undefined == null; // true
undefined === null; // false
!undefined === !null; // true.....?????

// 결론: 혼란한 언어이므로 undefined와 null 중 컨벤션으로 하나로 통일해서 사용하는 것이 권장된다
