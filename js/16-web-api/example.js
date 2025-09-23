import axios from "axios";

//도메인주소
const BASE_URL = "https://dummyjson.com";
//async 화살표 함수
const testRoute = async () => {
  /*
fetch('https://dummyjson.com/test')
.then(res => res.json())
.then(data => console.log);
*/
  const data = await axios.get(`${BASE_URL}/test`);
  console.log(data["data"]);
};
// testRoute();

async function getAllProducts() {
  const response = await axios.get(`${BASE_URL}/products`);
  const data = response["data"];
  const products = data["products"];
  console.log(products);
}
// getAllProducts();

// const : 변수를 재할당할 수 없도록 선언 (상수처럼 쓰이지만 객체/배열은 내용 변경 가능)
// async : 비동기 함수임을 표시 → 함수 안에서 await 사용 가능
// (n) : 함수의 매개변수 (parameter). 호출할 때 전달받은 값이 n에 들어옴
// => : 화살표 함수 문법. function 키워드 대신 사용
const getProductById = async (n) => {
  // axios.get(...) : axios 라이브러리의 GET 요청 메서드를 사용 해서
  // await : Promise(비동기 작업)이 끝날 때까지 기다렸다가 결과를 반환 후 res 에 저장
  const res = await axios.get(`${BASE_URL}/products/${n}`);
  // res 객체 안의 "data" 프로퍼티를 꺼내서 data에 저장
  const data = res["data"];
  console.log(data); //출력 : res : 전체 응답 객체 출력 (status, headers, data 등 포함)
};

getProductById(20);
