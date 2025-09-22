// try {
//   const constVar = "상수";
//   constVar = "상수 재할당";
// } catch (error) {
//   console.log(`오류 발생 : ${error}`);
// }

// console.log("오류 발생 이후 코드");

//예외처리

try {
  //try 코드 블록
  // 원래 실행할 코드
  const num = 1;
  num = "name";
  console.log(add);
} catch (error) {
  //catch 코드 블록 : try코드 블록이 오류가 발생할 때 실행할 코드
  //error 매개변수
  //오류의 정보를 저장하고 있는 객체
  console.log(error.name);
  console.log(error.message);
} finally {
  //finally 코드 블록
  //try ~ catch와 상관없이
  //무조건 실행되는 코드
  console.log("무조건 실행되는 코드");
}

function errorFunction() {
  try {
    console.log(number);
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  } finally {
    console.log("무조건 실행되는 코드? 1"); //실행 O
  }
  console.log("무조건 실행되는 코드? 2"); //실행 X
}

const result = errorFunction();
console.log(result);
