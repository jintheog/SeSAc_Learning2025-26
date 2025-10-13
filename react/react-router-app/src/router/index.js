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

// 페이지 컴포넌트 불러오기
import Home from "../pages/RootPages/Home";
import About from "../pages/RootPages/About";
import Profile from "../pages/RootPages/Profile";

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
  {
    path: "/",
    Component: RootLayout,
    children: [
      // 중첩할 자식 경로 객체를 정의하는 배열
      {
        index: true, // index: true -> 부모 경로의 기본(root) 경로
        // 완성되는 path: "/" (부모 경로와 동일)
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "profile",
        Component: Profile,
      },
    ],
  },
]);

export default router;
