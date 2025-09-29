import React from "react";
// props = {
//   user: { name: "홍길동", age: 20 },
//   onClick: handleClick,
// };
export default function Card({ userProps, onClickProps }) {
  return (
    <div>
      {/**button 태그에 onClick 속성에서 onClick 함수를 실행*/}
      <button
        onClick={() => {
          onClickProps(userProps);
        }}
      >
        클릭
      </button>
    </div>
  );
}
