import React from "react";
import { useEffect, useState } from "react";
export default function Basic() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  // useEffect 훅은 데이터를 생성 하지 않음.
  // 함수 실행 하듯이 실행을 함.
  // 콜백 함수가 내부에 존재 함.

  useEffect(() => {
    // 콜백함수
    // 화면 렌더링과 관련 없는 일을 한다.
    // API 요청하기, 타이머 시작하기 등등
    //의존성 배열이 없으면 데이터를 구분 하지 않고 실행 됨
    // 모든 데이터를 감시
    console.log("의존성 배열이 없는 useEffect");
  });
  useEffect(() => {
    //감시하는 데이터가 없는 대신 렌더링 할때 최초 한번 실행
    console.log("의존성 배열이 있는데 빈 배열인 useEffect");
  }, []);

  useEffect(() => {
    console.log("의존성 배열에 number 상태가 저장");
    //의존성 배열에 저장된 데이터가 변결 될때마다 콜백 함수 실행
  }, [number]);
  useEffect(() => {
    console.log("의존성 배열에 number2 상태가 저장");
  }, [number2]);

  return (
    // <div
    //   onClick={() => {
    //     setNumber(number + 1);
    //   }}
    // >
    //   {number}
    // </div>
    <div>
      {/** onClick 속성의 화살표함수에서 setNumber(number + 1) 실행 */}
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {number}
      </button>
      {/** onClick 속성의 화살표함수에서 setNumber2(number2 + 1) 실행 */}
      <button
        onClick={() => {
          setNumber2(number2 + 1);
        }}
      >
        {number2}
      </button>
    </div>
  );
}
