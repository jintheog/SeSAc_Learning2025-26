import React from "react";

export default function Profile(props) {
  console.log("Profile props:", props);
  console.log("isAdmin value:", props.isAdmin, "type:", typeof props.isAdmin);

  // user 객체가 있으면 user 객체의 속성을 사용하고, 없으면 개별 props를 사용
  const name = props.user ? props.user.name : props.name;
  const age = props.user ? props.user.age : props.age;
  const isAdmin = props.user ? props.user.isAdmin : props.isAdmin;

  return (
    <div>
      저는 {name}이고, {age}세 이며, 관리자 여부는 {String(isAdmin)} 입니다.
    </div>
  );
}
