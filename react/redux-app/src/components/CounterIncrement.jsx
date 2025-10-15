// counter 전역 상태 count의 값을 1 증가 시키는 버튼 컴포넌트

// counterSlice 에서 increment (상태 count + 1) 액션 생성자 함수
// increment : 액션 생성자 함수 -> 액션을 생성한다
import { increment } from "../store/counterSlice";

// useDispatch() 훅: dispatch 함수를 생성하는 훅
// dispatch 함수: 액션(action, 상태 변경 요청서)를 스토어로 보내는 함수
import { useDispatch } from "react-redux";
export default function CounterIncrement() {
  //dispatch 함수 생성성성
  const dispatch = useDispatch();

  function clickHandler() {
    //const action = increment();
    //console.log(action);
    /**
     * payload: undefined
     * type: "counter/increment"
     *
     */
  }
  return (
    <div>
      <button
        onClick={() => {
          clickHandler();
        }}
      >
        1 증가
      </button>
    </div>
  );
}
