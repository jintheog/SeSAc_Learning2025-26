import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

export default function MovieList() {
  // 리액트의 상태(state) : 화면을 결정한다. 화면에 보여질 데이터를 관리한다
  // movies : 상태 데이터를 저장하고 있는 변수
  // setMovies : 상태 데이터를 반꾸는 함수
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // const movieID = 2;
      const config = {
        method: "GET",
        // url: `${BASE_URL}/movie/${movieID}`,
        url: `${BASE_URL}/movie/2`,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          language: "ko-KR",
          page: 1,
        },
      };

      const res = await axios(config);
      // setMovies(res["data"]["results"]);
      setMovies(res["data"]);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>영화 목록</h1>
      {/* <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul> */}
      {movies.title}
    </div>
  );
}
