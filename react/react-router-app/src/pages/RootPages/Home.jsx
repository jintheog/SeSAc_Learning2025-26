//a태그를 대체하는 Link 컴포넌트
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-4xl">홈</h1>
      {/** to 속성 : 어떤 주소로 이동할것인지? */}
      <Link to="/">홈</Link>
      <br></br>
      <Link to="/about">소개</Link>
      <br></br>
      <a href="https://www.naver.com">외부 서비스 이동</a>
      <br />
      <Link to="/profile">사용자 정보</Link>
    </div>
  );
}
