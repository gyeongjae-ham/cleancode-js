/**
 * 경계 다루기(min - max)
 */
function genRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 상수
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

genRandomNumber(MIN_NUMBER, MAX_NUMBER);

// 최소, 최대값(포함되는지 vs 안되는지) 컨벤션을 정하는 게 좋다
// 이상, 이하 vs 초과, 미만
