// 외부 파일(모듈)로 분리할 코드
function add(n1, n2) {
  return n1 + n2;
}

// 함수 add 내보내기
export { add }; //add를 내보내겠다는 뜻

// 빼기
// subtract
function subtract(n1, n2) {
  return n1 - n2;
}

//곱하기
//multiply
function multiply(n1, n2) {
  return n1 * n2;
}
//나누기
//divide
function divide(n1, n2) {
  return n1 / n2;
}

export { subtract, multiply, divide };
