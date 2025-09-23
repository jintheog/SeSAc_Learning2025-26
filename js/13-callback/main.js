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
console.log("======================================");

//각 원소에 + 1 을 한 결과를 모아서 새로운 배열

// 빈 새로운 배열
const newArray = [];

numbers4.forEach((element) => {
  //새로운 배열에 + 1을 저장
  newArray.push(element + 1);
});

console.log(newArray);
console.log("======================================");

//map() 활용
const newArray2 = numbers4.map((element) => {
  //반환값: 원소 + 1
  return element + 1;
});
console.log(newArray2);

//map()을 활용해서 원소 * 2를 한 데이터를 모은 새로운 배열 생성
const newArray3 = numbers4.map((element) => {
  return element * 2;
});
console.log(newArray3);

const numbers5 = [1, 2, 3, 4, 5, 6];

//원소 중 짝수만 모아서 반환
//map() + 내부 로직 조건문(if)
console.log(
  numbers5.map((element) => {
    if (element % 2 === 0) {
      return true;
    }
  })
);
//[ undefined, true, undefined, true, undefined, true ]
console.log("===================");
//filter
console.log(
  numbers5.filter((element) => {
    if (element % 2 === 0) {
      return true;
    }
  })
);
// [ 2, 4, 6 ]

//
