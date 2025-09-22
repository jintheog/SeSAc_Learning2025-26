//모듈을 불러오기
// import / from

// from : 어디서 불러올 것이냐
// import : 무엇을 불러올 것이냐
import { add, subtract, multiply, divide, PI } from "./math.js";
// 여러개 내보내기/불러오기는 모듈의 사용할 모듈들만 불러오기가 가능
// 일부 불러오기 : 트리 셰이킹
// 사용하지 않는 코드를 제거함으로써 최적화를 할 수 있다.
//  - 프로덕션 환경을 위한 파일을 생성(빌드)할 때 사용하지 않은 코드는 제거하는 기술
console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));
console.log(PI);

// 하나만 불러오기 (default export)
// 내가 불러온 함수의 이름을 결정

// 대표성을 뛴다는 특징
import Add from "./calculator.js";

console.log(Add(1, 2));

//계산기.js에서 add라는 이름으로 내보냈고 불러올때 Add라고 함수 이름을 바꿈.
// 하나만 내보낼때는
