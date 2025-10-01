import React from "react";
import { useEffect } from "react";
export default function Basic() {
  // useEffect 훅은 데이터를 생성 하지 않음.
  // 함수 실행 하듯이 실행을 함.
  // 콜백 함수가 내부에 존재 함.

  useEffect(() => {
    //콜백함수
  });
  return <div>Basic</div>;
}
