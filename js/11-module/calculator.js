// import { multiply } from "./math";

// function add(n1, n2) {
//   return n1 + n2;
// }

//하나만 내보내기

//export default add; //default라는 키워드를 쓴 순간 1개만 내보내기 할 수 있다.

// 가장 기본적인 형태의 하나 내보내기 (default export) 방식
// 여러개의 함수 (메서드) 가 정의된 객체를 생성해서 내보내기
// default 내보내기는 보통 1개박에 내보내지 못하기 때문에 보통 객체를 내보낸다

//객체란 중괄호로 표현되는 속성의 모음
const calcObject = {
  // add 함수
  add: function (n1, n2) {
    return n1 + n2;
  },

  // subtract 함수
  subtract: (n1, n2) => {
    return n1 - n2;
  },

  // multiply 화살표 함수
  multiplyArrow: (n1, n2) => {
    return n1 * n2;
  },
};
// 하나만 내보내기 (default export) 코드 작성

export default calcObject;
