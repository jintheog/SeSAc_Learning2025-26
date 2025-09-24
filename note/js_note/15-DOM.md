# DOM

- HTML을 JS의 객체처럼 표현 한것

  - html은 프로그래밍 언어가 아니라서 프로그래밍 언어의 객체 처럼 표현할 수 있는 방법이 필요

- HTML 문서를 **트리 구조의 객체**로 표현하고, JavaScript로 HTML 문서 제어를 지원하는 API
- JavaScript는 DOM API를 통해 문서의 내용, 구조, 스타일, 이벤트를 동적으로 변경

# 노드 선택(Select)

- 선택자를 활용하여 DOM에서 요소 노드 선택

`querySelector(selector)`

- **선택자**와 **일치하는 첫 번째 노드** 반환

`querySelectorAll(selector)`

- 선택자(selector)와 일치하는 모든 노드를 저장한 NodeList(배열과 유사한) 반환
- forEach()로 반복 가능

```jsx
// 태그 이름 선택자
const element = document.querySelector("p");

// 클래스 이름 선택자
const element = document.querySelector(".class-name");

// 아이디 이름 선택자
const element = document.querySelector("#id-name");
```

# 노드조작 (manipulate)

## 주의사항: 텍스트 수정 시, 자식 노드가 모두 제거되므로 주의
