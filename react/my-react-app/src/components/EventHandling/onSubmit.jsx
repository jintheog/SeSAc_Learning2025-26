import React from "react";

// submit 이벤트는 form 태그에만 발생 한다
export default function OnSubmit() {
  // submit 이벤트 핸들러 함수
  // 핸들러 함수 이름 규칙: handle이벤트명
  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      event
      // ["target"]["value"]
    );
  }
  return (
    <>
      {/**form 태그의 onSubmit 속성에서 handleSubmit 함수를 호출하는 코드를 작성 */}
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input type="text" name="email" className="border-2" />
        <input type="password" name="password" className="border-2" />
        <input
          type="submit"
          value="제출"
          className="border-2 border-b-cyan-500"
        />
      </form>
    </>
  );
}
