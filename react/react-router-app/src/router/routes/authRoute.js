import AuthLayout from "../../layout/AuthLayout";
import AuthHome from "../../pages/AuthPages/AuthHome";
import Login from "../../pages/AuthPages/Login";
import Signup from "../../pages/AuthPages/Signup";
import PATHS from "../../constants/paths"; //경로 상수
const authRoutes = [
  {
    path: PATHS.AUTH.INDEX,
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: AuthHome,
      },
      //로그인 경로(path)와 Component 설정
      {
        path: PATHS.AUTH.LOGIN,
        Component: Login,
      },
      //회원가입 경로(path)와 Component 설정
      {
        path: PATHS.AUTH.SIGNUP,
        Component: Signup,
      },
    ],
  },
];

export default authRoutes;
