import axios from "axios";
const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];
//create() : axios 객체를 데이터를 생성
// 객체 : 속성(key-value) 구성된 자료형

//아래 axiosInstance 변수로 요청을 보내면
// 기본 주소 : "https://api.themoviedb.org/3"
// 헤더에는 인증 정보(authorization)가 설정되서 요청이 간다
const axiosInstance = axios.create({
  // axios 객체가 가질 속성의 정보
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application.json",
    accept: "application.json",
    Authorization: `Bearer ${API_KEY}`,
  },
  params: {
    language: "ko-KR",
  },
  timeout: 5000,
});
export default axiosInstance;
// axios.get("/post");
// 만들어지는 URL : baseURL 속성 값 + "/posts"
// https://dummyjson.com/posts
