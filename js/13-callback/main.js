// 배열 고차 메서드
// 배열 원소에 콜백 함수를 순차적으로 적용하는 메서드
// 배열의 반복문을 함수화

let numbers3 = [1, 2, 3, 4, 5];

//인덱스 반복문의 문제
// 1. 조건식 실수
// 2. 인덱스를 통해서 원소에 접근
for (let index = 0; index <= numbers3.length - 1; index++) {}

//for...of
// 1. 조건식이 없음
// 2. 원소에 바로 직접 접근
// for of 의 문제점
// 1. 내부 로직 관리의 어려움
// for (let element of array) {
//   // 내부 로직
// }

// 배열 고차메서드
// 1. 문법이 간결.
// 2. 콜백함수로 반복작업을 유연하게 제어
//numbers3.forEach(콜백함수);

// 각 원소에 + 1을 한 결과를 출력
const numbers4 = [1, 2, 3, 4, 5];

numbers4.forEach((element) => {
  //배열의 원소에 반복적으로 수행할 로직 코드
  console.log(element + 1);
});
console.log("======================================");
//각 원소 중 2로 나눴을 때 나머지가 0인 원소만 출력
numbers4.forEach((element) => {
  if (element % 2 === 0) {
    console.log(element);
  }
});
