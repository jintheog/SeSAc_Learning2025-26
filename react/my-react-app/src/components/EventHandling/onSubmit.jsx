import React from "react";

// submit 이벤트는 form 태그에만 발생 한다
export default function onSubmit() {
  return (
    <>
      <form action="">
        <input type="text" name="email" className="border-2" />
        <input type="password" name="password" className="border-2" />
        <input type="submit" value="제출" className="border-2" />
      </form>
    </>
  );
}
