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
import RootLayout from "../layout/RootLayout";
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
]);

export default router;
