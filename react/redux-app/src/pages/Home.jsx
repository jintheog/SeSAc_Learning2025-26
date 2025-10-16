import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <Link to="/signup" className="">
        회원가입 페이지
      </Link>
      <br />
      <Link to="/login">로그인 페이지</Link>
      <br />
      <Link to="/profile">프로필 페이지</Link>
    </div>
  );
}
