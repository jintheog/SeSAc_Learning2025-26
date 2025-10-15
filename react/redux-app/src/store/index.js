//전역 상태 스토어 설정
import { configureStore } from "@reduxjs/toolkit"; // configureStore 함수 : 리듀서를 받아서 스토어를 생성하는 함수

//리듀서 불러오기
import counterReducer from "./counterSlice";

//스토어 생성 함수
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
