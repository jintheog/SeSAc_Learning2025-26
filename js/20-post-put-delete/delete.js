import axios from "axios";

async function deletePost() {
  const config = {
    // axios 요청 설정 객체

    method: "delete",

    url: "https://dummyjson.com/products/1",
  };

  const response = await axios(config);
  const data = response["data"];
  console.log(data);
}

deletePost();
