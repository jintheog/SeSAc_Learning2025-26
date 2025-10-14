//RootLayout과 RooyLayout에 중첩된 페이지 경로 배열을 정의
import RootLayout from "../../layout/RootLayout";
import Home from "../../pages/RootPages/Home";
import About from "../../pages/RootPages/About";
import Profile from "../../pages/RootPages/Profile";
import PostList from "../../pages/RootPages/PostList";
import PostDetail from "../../pages/RootPages/PostDetail";
import ProtectedLayout from "../../layout/ProtectedLayout";

import PATHS from "../../constants/paths"; //경로 상수

const rootRoutes = [
  {
    path: PATHS["ROOT"]["INDEX"],
    Component: RootLayout,
    children: [
      {
        index: true,

        Component: Home,
      },
      {
        path: PATHS.ROOT.ABOUT,
        Component: About,
      },
      {
        path: PATHS.ROOT.POSTS,
        Component: PostList,
      },
      {
        path: PATHS.ROOT.POST_DETAIL,
        Component: PostDetail,
      },

      {
        //path 속성은 작성 하지 않음
        Component: ProtectedLayout,
        // 보호할 경로와 컴포넌트 정의
        children: [{ path: PATHS.ROOT.PROFILE, Component: Profile }],
      },
    ],
  },
];

// 경로 배열 내보내기
export default rootRoutes;
