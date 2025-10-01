import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";
// 무엇을 할거야?
// 컴포넌트가 첫 렌더링 될때 DummyJSON 으로 데이터를 요청(axios를 써서)

export default function RequestData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // axios를 사용해서 DummyJSON Products 데이터를 요청
    // await를 사용하기 위해서는 async function이 필요
    async function getProducts() {
      const response = await axios("https://dummyjson.com/products");
      const data = response["data"];
      console.log(data);
      // 응답 데이터에서 필요한 속성을 상태(state)로 변경해야 한다
      setProducts(data["products"]);
    }
    // 데이터 요청 함수 호출 (실행)
    getProducts();
  }, []); // 빈 의존성 배열: 컴포넌트가 첫 렌더링될 때만 콜백함수 실행

  return (
    <div>
      {/** products : 배열 */}
      {/** map : 반복 메서드 */}
      {/** product : 반복되는 배열의 원소 */}
      {products.map((product) => {
        // 매개변수 product를 Product 컴포넌트에 Props로 전달
        // 속성명 : product / 값 : 매개변수 product
        return <Product product={product}></Product>;
      })}
    </div>
  );
}
