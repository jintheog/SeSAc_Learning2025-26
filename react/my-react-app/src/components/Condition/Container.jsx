import React from "react";
import LoginStatus from "./LoginStatus";
import AdminLink from "./AdminLink";
// AdminLink 컴포넌트를 불러와서
// LoginStatus 컴포넌트 아래에 배치
export default function Container() {
  return (
    <div>
      {/**첫번째 컴포넌트에는 key가 isLogin 속성에 true 전달 */}
      {/** userName 속성에 "홍길동" 전달 */}
      {/* <LoginStatus isLogin={true} userName="고죠 사토루"></LoginStatus> */}
      {/**첫번째 컴포넌트에는 key가 isLogin 속성에 false 전달 */}
      {/** userName 속성에 "김철수" 전달 */}
      {/* <LoginStatus isLogin={false} userName="료맨 스쿠나"></LoginStatus> */}

      {/**isAdmin 속성에 값 true 전달 */}
      <AdminLink isAdmin={true} />
      {/**isAdmin 속성에 값 true 전달 */}
      <AdminLink isAdmin={false} />
    </div>
  );
}
