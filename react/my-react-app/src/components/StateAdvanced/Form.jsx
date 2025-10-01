import React from "react";
import { useState } from "react";
export default function Form() {
  // 입력 요소를 객체로 관리할 상태
  const [form, setForm] = useState({
    //form이라는 상태는 객체를 갖는다
    username: "",
    age: 0,
    email: "",
  });

  // 입력 요소의 값을 관리할 3개의 상태
  // const [username, setUserame] = useState("");
  // const [age, setAge] = useState(0);
  // const [email, setEmail] = useState("");

  // event 객체 : 발생한 이벤트의 정보를 속성으로 저장한 객체
  function handleChange(event) {
    // event 객체의 target 속성 : 이벤트가 발생한 요소 정보
    const target = event["target"];
    console.log(target);

    // target 객체에서 name속성과 value 속성 꺼내서 출력
    // name : 요소의 name 속성 / value : 요소에 사용자가 입력한 값 (value)
    const { name, value } = target;
    console.log(name, value);

    // name에 따라 적정한 상태 변경 함수를 실행
    // name === "username" 이면, setUsername()
    // name === "age" 이면, setAge()
    // name === "email" 이면, setEmail()
    // if (name === "username") {
    //   setUserame(value);
    // } else if (name === "age") {
    //   setAge(value);
    // } else if (name === "email") {
    //   setEmail(value);
    // }

    //form 객체 상태의 모양
    // {username: "", age:0, email:""}

    const newForm = { ...form, [name]: value };

    //form 상태 변경(업데이트)
    setForm(newForm);
  }

  return (
    <div>
      <form>
        {/* 3개의 input 요소의 값(value)을 상태로 관리 */}
        {/*input 요소의 value 속성은 사용자가 입력한 값 */}
        {/*왼쪽 value: 속성 / 오른쪽 {변수} : 상태 변수*/}
        <input
          className="border-2"
          type="text"
          name="username"
          value={form["username"]}
          // 화상표함수의 매개변수 event를
          onChange={(event) => {
            handleChange(event); // handleChange에 전달한다
          }}
        />
        <input
          className="border-2"
          type="number"
          name="age"
          value={form["age"]}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input
          className="border-2"
          type="email"
          name="email"
          value={form["email"]}
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </form>
    </div>
  );
}
