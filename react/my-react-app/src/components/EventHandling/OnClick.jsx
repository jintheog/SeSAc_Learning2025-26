// import React from "react";

// export default function OnClick() {
//   //클릭 이벤트 핸들링 함수
//   //관례적으로 핸들링 함수명은 `handle이벤트명` 으로 작성

//   //매개변수가 없는 함수
//   function handleClick() {
//     alert("클릭!");
//   }

//   //매개변수가 있는 함수
//   function handleParamClick(param) {
//     alert(param);
//   }

//   return (
//     <>
//       {/*카멜 케이스로 이벤트 속성을 작성해야 한다 */}
//       <button
//         className="cursor-pointer border-2 p-2 bg-blue-400 text-white shadow m-1"
//         onClick={() => {
//           handleClick();
//         }}
//       >
//         화살표 함수 클릭
//       </button>
//       ======
//       <button
//         className="cursor-pointer border-2 p-2 bg-emerald-500 text-white shadow m-1"
//         onClick={() => {
//           //인자로 "Hello World"를 전달한 handleParamClick() 함수 실행
//           handleParamClick("Hello World");
//         }}
//       >
//         매개변수가 있는 함수 클릭
//       </button>
//       ======
//       <button
//         className="cursor-pointer border-2 p-2 bg-amber-600 text-white shadow m-1"
//         onClick={handleClick}
//       >
//         함수 참조 클릭
//       </button>
//     </>
//   );
// }

import React from "react";

export default function OnClick() {
  function handleClick(event) {
    console.log("handleClick");
    console.log(event);
  }

  return (
    <div>
      {/**아래 버튼을 클릭(onClick) 했을 때 handleClick() 함수가 실행 되도록 코드를 작성*/}
      <button
        className="cursor-pointer border-2 p-2 bg-emerald-500 text-white shadow m-1"
        onClick={(event) => {
          handleClick(event);
        }}
      >
        클릭
      </button>
    </div>
  );
}
