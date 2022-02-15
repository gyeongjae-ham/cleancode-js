// 임시변수 제거하기

// ex) 임시변수를 사용하는 예시

function getElements() {
  const result = {};

  result.title = document.querySelector(".title");
  result.text = document.querySelector(".text");
  result.value = document.querySelector(".value");

  return result;
}

// 함수를 잘게 쪼개거나 하는 경우에는 문제가 없겠지만
// 함수가 길어지거나 하면 다른 개발자와 협업 과정에서 변수가 조작될 위험이 존재한다

// ex) refactor

function getElements() {
  return {
    title: document.querySelector(".title"),
    text: document.querySelector(".text"),
    value: document.querySelector(".value"),
  };
}

// 또 다른 예시

function getDateTime(targetData) {
  let month = targetData.getMonth();
  let day = targetData.getDay();
  let hour = targetData.Hours();

  month = month >= 10 ? month : "0" + month;
  day = day >= 10 ? day : "0" + day;
  hour = hour >= 10 ? hour : "0" + hour;

  return {
    month,
    day,
    hour,
  };
}

// 이런 함수의 경우 추가적인 요구사항이 들어왔을 때 대처할 방법이
// 1. 새로운 함수를 선언한다, 2. 기존 함수를 수정한다(이 경우 이 함수를 사용중인 모든 코드를 살펴봐야 하는 단점과 에러 없이 짤 가능성이 낮아진다)
// refactor

function getDateTime(targetData) {
  const month = targetData.getMonth();
  const day = targetData.getDay();
  const hour = targetData.Hours();

  return {
    month: month >= 10 ? month : "0" + month,
    day: day >= 10 ? day : "0" + day,
    hour: hour >= 10 ? hour : "0" + hour,
  };
}

// 추가 기능 구현 예시
function getDateTime() {
  const currentDateTime = getDateTime(new Date());

  return {
    month: currentDateTime.month + "달 전",
    day: currentDateTime.day + "일 전",
    hour: currentDateTime.hour + "시간 전",
  };
}

// 결론: 임시 변수는 굉장히 안좋다
// 디버깅이 어렵고, 명령형으로 가득한 코드가 된다
// 해결책: 함수를 나누고, 바로 return하는 방법, 고차함수 사용 (map, filter, reduce 등), 선언형 코드 작성
