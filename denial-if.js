// 부정 조건문 지양하기
/**
 * 1. 생각을 한번 더 해야한다.
 * 2. 뒤집을 경우에도 또 생각해야 한다.
 * 3. 프로그래밍 언어 자체로 if 문이 처음부터 오고 true부터 실행시킨다.
 */

/**
 * - 부정 조건 예외
 *
 * 1. Early Return
 * 2. Form Validation
 * 3. 보안 혹은 검사하는 로직일 경우
 */

// 지양해야 하는 이유 NaN 같은 경우
// isNaN(3)의 경우 NaN이 아니므로 false 하지만 코드 실행하려면 true 값이 필요하므로 뒤집고 다시 return
if (!isNaN(3)) {
  return "false";
}

// 차라리 함수를 따로 하나 만드는게 생각하기 편해짐
// ex

function isNumber(num) {
  return !Number.isNaN(num) && typeof num === "number";
}

if (isNumber(3)) {
  console.log("숫자입니다");
}

// 아래처럼 부정 조건을 지양하자
// 굳이 조건을 뒤집지 말자

const isCondition = true;
const isNotCondition = false;

if (!isCondition) {
  console.log("거짓인 경우에만 실행");
}

if (isNotCondition) {
  console.log("거짓인 경우에만 실행");
}
