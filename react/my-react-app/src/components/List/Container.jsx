import React from "react";
import User from "./User";
export default function Container() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // r객체 원소를 저장한 배열
  const userArray = [
    { id: 1, name: "우영" },
    { id: 2, name: "길동" },
    { id: 3, name: "고죠" },
    { id: 4, name: "료맨" },
    { id: 5, name: "짱구" },
  ];
  return (
    <div>
      {/**array 배열을 map() 메서드로 반복 */}
      {array.map((element) => {
        //원소 (element) 를 li 태그에 감싸서 반환(return)
        // 원소 element는 보간법 { }을 사용해서 표현
        return <li>{element}</li>;
      })}
      <hr />
      {/**실제 표현 */}
      {/* <li>{array[0]}</li>
      <li>{array[1]}</li>
      <li>{array[2]}</li>
      <li>{array[3]}</li>
      <li>{array[4]}</li>
      <li>{array[5]}</li>
      <li>{array[6]}</li>
      <li>{array[7]}</li> */}

      {/**userArray를 map()을 활용해서 반복 */}
      {userArray.map((userElement) => {
        //user 원소의 형태
        // {id: 1 , name: 우영}
        // User 컴포넌트에 속성 이름 user에 변수 userElement를 지정(전달) 한다
        // props 활용
        return (
          // <li>
          //   {user["id"]} - {user["name"]}
          // </li>
          // userElement = {id: ... , name: ...}
          // id는 고유한(2개 이상 존재하지 않는) 속성 / name은 고유하지 않은 속성

          //반복의 대상이 되는 요소에 key  라고 하는 이름의 속성과 값을 설정을 해야 한다
          // key 에 설정되는 값은 고유한 값(객체의 속성) 이어야한다
          // 반복 렌더링에서 key 속성의 역할은
          // 동일하게 반복 생성된 컴포넌트를 구별(식별) 하기 위한 속성
          <User key={userElement["id"]} user={userElement}></User>
        );

        {
          /**맵을 안썼을 때의 표현 */
        }
        // <User key={1} user={user[0]}></User>
        // <User key={2} user={user[1]}></User>
        // <User key={3} user={user[2]}></User>
        // <User key={4} user={user[3]}></User>
        // <User key={5} user={user[4]}></User>
      })}
    </div>
  );
}
