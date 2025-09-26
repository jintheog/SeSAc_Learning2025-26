// 23-modern/short-property

let name = "홍길동";
let age = 20;

//객체
const user = {
  name: name, // name: "홍길동"
  age: age, // age: 20
};

console.log(user);

// 단축 프로퍼티
// 변수명을 key로 사용할 때
// 변수명과 key가 동일할 때
const user2 = {
  name, // name: name
  age, // age: age
  location,
};
console.log(user2);
