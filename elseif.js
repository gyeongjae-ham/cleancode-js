// else if 피하기 & else 피하기
// ex

const x = 1;

if (x >= 1) {
  console.log("x는 0과 같거나 크다");
} else if (x > 0) {
  console.log("x는 0보다 크다");
} else {
  console.log("Else");
}

// else if 를 else 후 새로운 if라고 생각해서 최대한 쓰지 않도록 하자
// 많은 else if를 쓸 경우에 switch 문을 사용하자
