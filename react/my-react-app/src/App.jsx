import React from "react";
import Rule from "./components/JSX/Rule";
import Interpolation from "./components/JSX/Interpolation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyButton from "./components/Component/MyButton";
import MyList from "./components/Component/MyList";
import OnClick from "./components/EventHandling/OnClick";
import OnChange from "./components/EventHandling/OnChange";
import OnSubmit from "./components/EventHandling/onSubmit";
import Parent from "./components/Props/Parent";
// 컴포넌트 함수 외부는 import문을 제외하고는 작성하지 않는다

//파일명과 동일한 함수는 컴포넌트 함수
//

export default function App() {
  return (
    <>
      {/* <Rule></Rule> */}
      {/* <Header></Header> */}
      {/* <Interpolation /> */}
      {/* <MyList /> */}
      {/* <MyButton /> */}
      {/* <OnClick /> */}
      {/* <OnChange /> */}
      {/* <OnSubmit /> */}
      {/* <Footer></Footer> */}
      <Parent />
    </>
  );
}
