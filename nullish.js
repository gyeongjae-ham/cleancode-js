// null 병합 연산자
// 아래와 같은 코드에서 type, height, width가 falsy 값이면 default 값을 가지게 되는데
// 이 부분을 null과 undefined일 경우에만 default 값을 가지도록 하고 싶으면 ??을 사용하면 된다
function createElement(type, height, width) {
  const element = document.createElement(type || "div");

  element.style.height = height || 100;
  element.style.width = width || 100;

  return element;
}

createElement();
