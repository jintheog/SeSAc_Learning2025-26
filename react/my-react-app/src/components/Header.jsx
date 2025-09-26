import React from "react";
import Interpolation from "./JSX/Interpolation";

// App 컴포넌트는 Header 컴포넌트와 Interpolation 컴포넌트를 포함한다
// App 컴포넌트 Header 컴포넌트와 Interpolation 컴포넌트가 중첩됐다.
export default function Header() {
  return (
    <div>
      Header
      <Interpolation></Interpolation>
    </div>
  );
}
