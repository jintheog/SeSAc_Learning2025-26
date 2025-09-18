// 반복문이 없는 코드
// 변수 number를 선언하고, 0을 할당
// 변수 number를 3번 출력 === 변수 number가 3미만 일때 까지
// 1씩 증가하면서
let number = 0;

console.log(number); //반복 실행할 코드
number = number + 1; // 증감식

console.log(number); //반복 실행할 코드
number = number + 1; // 증감식

console.log(number); //반복 실행할 코드
number = number + 1; // 증감식

// for(초기화문; 조건식; 증감문)
for (let number2 = 0; number2 < 3; number2 += 1) {
  console.log(number2);
}

//내가 어떤 코드를 5번 반복

for (let i = 0; i < 5; i++) {
  console.log(`${i + 1} 번 실행`);
}

//숫자를 0번 5까지 출력
for (let i = 0; i < 5; i++) {
  console.log(i);
  //0
  //1
  //2
  //3
  //4
}

//안녕
