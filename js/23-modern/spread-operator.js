// 펼침 연산자(Spread Operator)
// ... 연산자

const obj1 = {
  name: "홍길동",
  age: 20,
  job: "개발자",
  location: "서울",
  country: "대한민국",
};

//객체 복사
const obj2 = obj1;
console.log(obj1);
console.log(obj2);

obj2["location"] = "대구";
console.log(obj2);
console.log(obj1); //obj1도 "대구"로 바뀌어 버림

// ... 스프레드 연산자를 활용한 복사
const obj3 = { ...obj1 }; // obj1의 속성을 펼쳐서 "새로운 객체"를 생성
console.log(obj3);

obj3["name"] = "고길동"; //obj3의 이름 속성을 바꾸면 obj3만 바뀜
console.log(obj1); //{ name: '홍길동', age: 20, job: '개발자', location: '대구', country: '대한민국' }
console.log(obj3); //{ name: '고길동', age: 20, job: '개발자', location: '대구', country: '대한민국' }

// 객체의 속성을 수정하면서 새로운 객체를 생성

// 새로운 객체를 생성하고, age 속성 수정
obj4 = { ...obj1 };
obj4["age"] = 21;

// 편한 방법
// 객체를 생성하면서 age 속성 수정, planet 속성 추가
obj5 = { ...obj1, age: 21, planet: "지구" };
console.log(obj5);
