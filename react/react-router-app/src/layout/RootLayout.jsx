import React from "react";
import { Link } from "react-router-dom";
export default function RootLayout() {
  return (
    <div>
      <div className="flex gap-4 p-2 border-2 border-gray-300">
        <Link to="/">홈페이지</Link>
        <Link to="/about">소개페이지</Link>
        <Link to="/profile">사용자 정보 페이지</Link>
      </div>
    </div>
  );
}
