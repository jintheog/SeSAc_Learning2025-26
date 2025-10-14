//페이지 컴포넌트 불러오기
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Profile from "../pages/Profile";
// React Royter의 createBrowserRouter  불러오기
// createBrowserRouter 함수
// 라우터 설정을 생성하는 함수
// 라우터 : 주소(URL)와 컴포넌트를 매핑
import { createBrowserRouter } from "react-router-dom";

// 레이아웃 컴포넌트 불러오기
// import RootLayout from "../layout/RootLayout";
// import AuthLayout from "../layout/AuthLayout";
// import ProtectedLayout from "../layout/ProtectedLayout";

// 페이지 컴포넌트 불러오기
// import Home from "../pages/RootPages/Home";
// import About from "../pages/RootPages/About";
// import Profile from "../pages/RootPages/Profile";
// import PostList from "../pages/RootPages/PostList";
// import PostDetail from "../pages/RootPages/PostDetail";

// import AuthHome from "../pages/AuthPages/AuthHome";
// import Login from "../pages/AuthPages/Login";
// import Signup from "../pages/AuthPages/Signup";

import PATHS from "../constants/paths"; //경로 상수

import rootRoutes from "./routes/rootRoute"; //RootLayout 관련 경로 배열 불러오기
import authRoutes from "./routes/authRoute";

//404 페이지 처리
import NotFound from "../pages/NotFound";

//라우터 설정 생성
const router = createBrowserRouter([
  // {
  //   path: "/", // 주소(URL)
  //   Component: Home, //주소에 해당되는 컴포넌트
  // },
  // {
  //   path: "/about",
  //   Component: About,
  // },
  // // "/profile"로 접근하면
  // //Profile 컴포넌트를 표시하는 속성 작성
  // {
  //   path: "/profile",
  //   Component: Profile,
  // },
  ...rootRoutes, //스프레드 연산자로 경로 배열을 복사
  ...authRoutes,

  {
    path: "*", // 별표 : 모든것에 매핑(일치)되는 특수 문자
    Component: NotFound,
  },
  // {
  //   path: PATHS["ROOT"]["INDEX"],
  //   Component: RootLayout,
  //   children: [
  //     // 중첩할 자식 경로 객체를 정의하는 배열
  //     {
  //       index: true, // index: true -> 부모 경로의 기본(root) 경로
  //       // 완성되는 path: "/" (부모 경로와 동일)
  //       Component: Home,
  //     },
  //     {
  //       path: PATHS.ROOT.ABOUT,
  //       Component: About,
  //     },
  //     {
  //       path: PATHS.ROOT.POSTS,
  //       Component: PostList,
  //     },
  //     {
  //       path: PATHS.ROOT.POST_DETAIL,
  //       Component: PostDetail,
  //     },
  //     // {
  //     //   path: "profile",
  //     //   Component: Profile,
  //     // },
  //     {
  //       //path 속성은 작성 하지 않음
  //       Component: ProtectedLayout,
  //       // 보호할 경로와 컴포넌트 정의
  //       children: [{ path: PATHS.ROOT.PROFILE, Component: Profile }],
  //     },
  //   ],
  // },

  // AuthLayout 경로 설정
  // {
  //   path: PATHS.AUTH.INDEX,
  //   Component: AuthLayout,
  //   children: [
  //     {
  //       index: true,
  //       Component: AuthHome,
  //     },
  //     //로그인 경로(path)와 Component 설정
  //     {
  //       path: PATHS.AUTH.LOGIN,
  //       Component: Login,
  //     },
  //     //회원가입 경로(path)와 Component 설정
  //     {
  //       path: PATHS.AUTH.SIGNUP,
  //       Component: Signup,
  //     },
  //   ],
  // },
]);

export default router;
