import React from "react";
// Child 컴포넌트를 불러와서
// <div> 태그 사이에 Child 컴포넌트를 배치
import Child from "./Child";
export default function Parent() {
  return (
    <div>
      <Child key="value 1">
        <div>
          <h1>나는 길동</h1>
          <h2>I'm 20살</h2>
        </div>
      </Child>
      <Child>
        <div>
          <p>나루토</p>
          <p>나선환</p>
        </div>
      </Child>
      <Child>
        <div>
          <p>고죠 사토루</p>
          <h1>무량공처</h1>
          <strong>아카 혁</strong>
        </div>
      </Child>
    </div>
  );
}
