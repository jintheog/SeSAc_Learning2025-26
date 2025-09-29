import React from "react";

export default function OnClick() {
  //클릭 이벤트 핸들링 함수
  //관례적으로 핸들링 함수명은 `handle이벤트명` 으로 작성
  function handleClick() {
    alert("클릭!");
  }

  return (
    <>
      {/*카멜 케이스로 이벤트 속성을 작성해야 한다 */}
      <button
        className="cursor-pointer border-2 p-2 bg-blue-400 text-white shadow m-1"
        onClick={() => {
          handleClick();
        }}
      >
        화살표 함수 클릭
      </button>
      <button
        className="cursor-pointer border-2 p-2 bg-amber-600 text-white shadow m-1"
        onClick={handleClick}
      >
        함수 참조 클릭
      </button>
    </>
  );
}
