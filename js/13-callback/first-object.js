//함수 선언식
function 함수명() {}

//일급객체
// 1. 변수에 할당

//함수 표현식: 함수명이 없고, 대신에 변수에 할당

const functionExpression = function () {};

// 화살표 함수: 함수명이 없고, 대신에 변수에 할당
const functionArrow = () => {};

//일급객체
//2. 함수의 반환값으로 사용할 수 있다.
function calculator(operator) {
  //화살표 함수를 할당받은 변수 add
  // 1. 변수에 할당이 가능하다

  const add = (n1, n2) => {
    return n1 + n2;
  };
  if (operator === "더하기") {
    return (n1, n2) => {
      return n1 + n2;
    };
  }
  if (operator === "빼기") {
    return (n1, n2) => {
      return n1 - n2;
    };
  }
}

const add = calculator("더하기");
const sub = calculator("빼기");
console.log(add(1, 2));
console.log(sub(1, 2));

//일급 객체
//3. 함수의 인자로 전달
function calculator2(operatorFunction, n1, n2) {
  //연산 함수를 수행
  const result = operatorFunction(n1, n2);

  //연산 함수의 결과를 출력
  console.log(`연산 결과 :  ${result}`);
}

calculator2(
  (a, b) => {
    return a + b;
  },
  1,
  2
);



