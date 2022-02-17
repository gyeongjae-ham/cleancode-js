// 과도한 숏코딩을 주의하자
// 삼항연산자를 사용하는 케이스를 정해서 그 경우에만 사용하도록 하자
// ex

function example() {
  return condition1
    ? value1
    : condition2
    ? value2
    : condition3
    ? value3
    : value4;
}

function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}
