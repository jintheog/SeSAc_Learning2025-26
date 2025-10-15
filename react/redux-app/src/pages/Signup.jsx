import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// signup 액션 : 회원가입 비동기 네트워크 처리를 하는 액션
// resetIsSignup 액션 : isSignup 상태를 초기화(false) 액션
import { signup, resetIsSignup } from "../store/authSlice";

import { useNavigate } from "react-router-dom";

export default function Signup() {
  return <div>Signup</div>;
}
