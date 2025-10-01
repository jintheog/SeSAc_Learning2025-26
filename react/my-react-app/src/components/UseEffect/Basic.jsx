import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export default function Basic() {
  const [number, setNumber] = useState(0);
  // useEffect 훅은 데이터를 생성 하지 않음.
  // 함수 실행 하듯이 실행을 함.
  // 콜백 함수가 내부에 존재 함.

  useEffect(() => {
    // 콜백함수
    // 화면 렌더링과 관련 없는 일을 한다.
    // API 요청하기, 타이머 시작하기 등등
    //의존성 배열이 없으면 데이터를 구분 하지 않고 실행 됨
    console.log("의존성 배열이 없는 useEffect");
  });
  useEffect(() => {
    console.log("의존성 배열이 있는데 빈 배열인 useEffect");
  }, []);

  return (
    <div
      onClick={() => {
        setNumber(number + 1);
      }}
    >
      {number}
    </div>
  );
}
