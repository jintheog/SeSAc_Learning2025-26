import React from "react";

export default function Profile(props) {
  console.log("Profile props:", props);
  console.log("isAdmin value:", props.isAdmin, "type:", typeof props.isAdmin);

  return (
    <div>
      저는 {props.name}이고, {props.age}세 이며, 관리자 여부는{" "}
      {String(props.isAdmin)} 입니다.
    </div>
  );
}
