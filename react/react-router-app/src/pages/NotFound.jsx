import React from "react";
import { Link } from "react-router-dom";
import PATHS from "../constants/paths";
export default function NotFound() {
  return (
    <div>
      페이지를 찾을 수 없습니다. 404 error
      <Link to={PATHS.ROOT.INDEX} className="border-2 p-1">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
