// Default Case 고려하기

function sum(x, y) {
  x = x || 1;
  y = y || 1;

  return x + y;
}

sum();

// core한 유틸리티나 라이브러리를 만들 때도 다음처럼 기본값을 생각해보자(회의를 통해서 정책적으로 결정하자)
function createElement(type, height, width) {
  const element = document.createElement(type || "div");

  element.style.height = height || 100;
  element.style.width = width || 100;

  return element;
}

createElement();

// switch case 같은 경우에도 에러를 명시적으로 표현하기 위해 default 필요

function registerDay(userInputDay) {
  switch (userInputDay) {
    case "월요일": // some code
    case "화요일": // some code
    case "수요일": // some code
    case "목요일": // some code
    case "금요일": // some code
    case "토요일": // some code
    case "일요일": // some code
    default:
      throw Error("입력값이 유효하지 않습니다.");
  }
}

e.target.value = "월ㄹ요일"; // 이와 같은 오타가 들어왔을 경우
registerDay(e.target.value);
