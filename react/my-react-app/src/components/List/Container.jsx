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
      {userArray.map((user) => {
        return (
          <li>
            {user["id"]} - {user["name"]}
          </li>
        );
      })}
    </div>
  );
}
