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
  1. 디렉토리 구저
   
  2. 외부 CSS 파일 작성 


















