# API (Application Programming Interface)

- 서로 다른 프로그램 간의 대화를 위한 도구(규칙, 인터페이스)

# Web API

- 웹에서 서로 다른 프로그램 간의 대화를 위한 API
- 기본적으로 HTTP 통신 사용

### HTTP hyper text transfer protocol :

- client와 server가 간 통신 규칙
- HTML 문서와 같은 리소스(Resource) 를 서버에서 가져오기 위한 프로토콜
  - 리소스: 웹에서 접근 가능한 모든 것(문서, 이미지, 오디오, 비디오 등)

#### 손님

- 클라이언트 (client)
- 무언가를 요청하는 입장

#### 음식점

- 서버 (server)
- 무언가를 응답하는 입장
- 서버도 무언가를 요청 할 수 있다.

서버와 클라이언트는 고정적이지 않음
상황에 따라서 서버일 수도 있고 클라이언트일 수도 있다.

# 요청(Request)과 응답(Response)

- 요청 : 클라이언트가 서버에 **리소스** 관련 작업을 요청 하는것.
- 응답 : 서버가 클라이언트에 작업 결과를 응답하는 것.
- HTTP 통신은 항상 요청과 응답으로 구성.
- 항상 요청이 먼저

### 웹 브라우저가 아니여도 요청을 보낼 수 있다

- fetch를 통해서
-

# REST(Representational State Transfer) 아키텍쳐

- 웹 기술과 HTTP 기반으로 효과적인 통신을 위한 설계, 아키텍쳐
- 자원(Resource), 행위(Verb), 표현(Representation) 3가지 요소로 구성

  - 자원: 서버에 저장된 데이터(게시글, 사용자, 상품 등)
  - 행위: 자원에 대한 작업(GET, POST, PUT, DELETE 등)
  - 표현: 자원에 대한 표현(JSON, HTML 등)

- 주요 행위(Verb)
  - GET: 자원 조회
  - POST: 자원 생성
  - PUT: 자원 전체 수정
  - PATCH: 자원 일부 수정
  - DELETE: 자원 삭제

# URL(Uniform Resource Locator)

- 웹에서 서버의 위치를 나타내는 주소
- URL의 구성 요소
  - 스키마(Scheme)
  - 도메인 이름(Domain Name)
  - 리소스 경로(Path)
  - 매개변수(Parameters)

# URL 구조

```jsx
<https://www.naver.com/search?query=날씨&location=서울>
```

1. `https://` (스키마, Scheme)

- 통신 방식(규칙)
- `http://` 또는 `https://`

2. `www.naver.com` (도메인 이름, Domain Name)

- 서버 이름
- 예시: google.com, youtube.com

3. `/search` (Path Parameters)

- 특정 리소스의 고유한 경로(식별자)를 표현
- 예시: /search, /posts, /users
- 예시2: /posts/1, /posts/2, /posts/3

4. `?query=날씨&location=서울` (Query Parameters)

- 무엇을 검색 했느냐는 쿼리 파라미터로 나타넨다
- 서버에 전달하는 추가 정보
- 주로, 데이터의 검색, 정렬, 필터링 등을 표현
- `?`로 시작하며 `&`로 구분
- 예시: `?query=날씨&location=서울`
- 예시2: `?sortBy=title&order=asc`
