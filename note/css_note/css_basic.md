# CSS Cascading Style Sheets
- html 보다는 좀더 프로그래밍 언어에 가까운거 같음. e.g. 변수명이 있음

### HTML과 CSS의 역할 구분
- HTML : 웹 페이지의 구조와 내용을 정의
- CSS : 웹 페이지의 스타일을 정의

## 기본 구조
- 선택자, 속성, 값

```css
선택자 {
  속성 : 값;
}
```

선택자 (selector)
- 스타일을 적용할 HTML 요소를 선택한다
- 요소를 선택 하는 여러가지 방법중 하나
```css
/* h1 태그를 선택 */
h1 {
}

/* class가 "title"인 요소를 선택 */
.title {
}

/* id가 "header"인 요소를 선택 */
#header {
}

```

## 속성(property)과 값(value)
- 속성 : 스타일(글자 색, 크기, 너비, 높이등)의 종류
- 값 : 스타일의 구체적인 값

```css
p {
  color: red; /* 빨간색 */
  font-size: 16px; /* 16픽셀 크기 */
  background-color: yellow; /* 노란색 배경 */
}

```

## CSS 적용 방법
### 인라인 스타일 (inline style) **안쓰는 것이 가장 좋다**
- html 요소의 `style` 속성에 직점 CSS를 작성하는 방법
- 해당 요소에만 스타일이 적용된다 
```css
<p style="color: blue; font-size: 20px;">
  이 텍스트는 파란색이며, 크기는 20px입니다.
</p>

/** e.g. */
<h1 style="color: red">빨</h1>
```
- 늘어나면 가독성이 떨어진다


### 내부 스타일 시트(internal style sheet)
- html 문서의 `<head>` 내부에 `<style>` 태그를 사용하여 CSS 코드를 작성 하는 방법

```css
<!DOCTYPE html>
<html lang="ko">
  <head>
    <style>
      h1 {
        color: blue;
        text-align: center;
      }
      h2 {
      color: orange;
    }
      p {
        color: gray;
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <h1>웹사이트 제목</h1>
    <p>이것은 스타일이 적용된 문단입니다.</p>
    <h2>주</h2>
  </body>
</html>
```

### 외부 스타일 시트 (external style sheet)
- 외부 CSS 파일을 만들어 html 문서에 연결하는 방법
  1. 디렉토리 구조
  
   📁 leanring/
└── 📁 css/
    └── 📁 css-import/
        └── 🌐 index.html
        └── 🎨 styles.css

  2. 외부 CSS 파일 작성 
```css
/* styles.css 파일 */
h1 {
  color: blue;
  text-align: center;
}

p {
  color: gray;
  font-size: 16px;
  line-height: 1.5;
}

.highlight {
  background-color: yellow;
  padding: 5px;
}

```
3. HTML 문서에서 외부 CSS 불러오기
```css
<!DOCTYPE html>
<html lang="ko">
  <head>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>웹사이트 제목</h1>
    <p>이것은 외부 CSS가 적용된 문단입니다.</p>
    <p class="highlight">이것은 강조된 문단입니다.</p>
  </body>
</html>

```

#### e.g.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS-basic</title>
  <link rel="stylesheet" href="./styles.css"> <!--상대경로 ./ 로 시작 해 주는것이 좋다-->
</head>
<body>
  <!-- HTML 문서 외부 css 파일 연결 (link 태그를 써서 연결)-->
  <h3>노</h3>
</body>
</html>
```
![alt text](image.png)

```css
h3 {
  color: yellow;
}
```



## 브라우저 개발자 도구
### element (요소) 메뉴
- html 구조를 확인할 수 있다
- 요소를 선택하여 해당 요소의 css를 확인할 수 있다
  
### styles(스타일) 패널
- 선택된 요소에 적용된 css 규칙을 확인할 수 있다 
- 실시간으로 css 값을 수정하여 결과를 미리 볼 수 있다
- 체크박스를 해제하여 특정 스타일을 임시로 비활성화할 수 있다

### Computed(계산된 스타일) 패널
- 요소에 최종적으로 적용된 모든 CSS값을 확인할 수 있다
- 상속받은 스타일과 직접 적용된 스타일을 구분하여 볼 수 있다


















