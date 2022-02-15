// 동등 연산자(==), 엄격한 동등 연산자(===)
// 동등 연산자의 경우 형변환이 일어난다

1 == "1"; // true
1 == true; // true

1 === "1"; // false
1 === true; // false

// 동등 연산자를 사용하는 건 위험하기 때문에 엄격한 동등 연산자를 사용하자
// 값을 비교할 경우에도 형변환을 직접해서 비교하자

Number(ticketNumb.value) === 0;
// 또는
ticketNumb.valueAsNumber === 0;
