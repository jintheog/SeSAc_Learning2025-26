import Signup from "../pages/AuthPages/Signup";

// 경로 문자열을 관리 상수 각체
const PATHS = {
  // Root Layout의 중첩된 경로
  ROOT: {
    // Root Layout의 기본(진입) 경로
    INDEX: "/",
    ABOUT: "/about",
    POSTS: "/posts",
    POST_DETAIL: "/posts/:postId",
    //경로 파라미터를 처리한 메서드(함수)
    //외부에서 postId를 전달 받아서
    //동적으로 경로 파라미터를 적용한 주소 생성
    getPostDetail: (postId) => `/posts/${postId}`,
    PROFILE: "/profile",
  },

  //AuthLayout의 중첩된 경로
  AUTH: {
    INDEX: "/auth",
    LOGIN: "/auth/login",
    SIGNUP: "auth/signup",
  },
};

export default PATHS;
