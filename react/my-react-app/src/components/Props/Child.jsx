import React from "react";

// 1. Child 컴포넌트를 불러오기
// 2. Child 컴포넌트를 Parent 내부에 배치

// 함수의 첫 번째 매개변수는 props 객체가 들어온다
export default function Child(props) {
  console.log(props);
  return (
    <div>
      <h1>{props["name"]}</h1>
      <h2>{props["age"]}</h2>
    </div>
  );
}
