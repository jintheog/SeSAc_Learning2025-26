# CSS Review

## Viewport 뷰포트

사용자의화면(뷰) -> 이게 뷰포트 이다
  - 사용자 화면의 너비가 1920px 이고 높이가 1080px 일 경우
    - 100vh = 1920 * 1 이다. 백분율 이기 때문에
    - 50vh = 1920 * 0.5 이다
    - 세로도 마찬가지 : 100 vw = 1080 * 1; 1vw = 1080 * 0.1


## em의 특성은 중첩이 된다
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div style="font-size: 20px">
    부모 div : 폰트 크기 20px
    <div style="font-size: 2em">첫번째 자식 div : 폰트 크기 2em</div>
    <div style="font-size: 2em">em의 특성 : 중첩</div>
    <div style="font-size: 2rem">두번째 자식 div : 폰트 크기 2rem</div>
  </div>
</body>
</html>

```

![alt text](image-1.png)



---

# Flex box layout
- 레이아웃 : 박스를 어떻게 배치 할거냐

## flex box
- 유연한 레이아웃 구현
  - 기존 테이블 구조로 모든 화면에 대응 하기 어려워짐
- 개발자도구 요소에서 display 속성에 flex라고 나와 있음. Flex 박스가 보임

## Flex Container
- `부모 요소`
- 

## Flex Items
- `자식 요소`

플레스 아이템을 조정 하는게 아니라 플렉스 컨테이너의 속성을 주므로 플렉스 아이템을 조정


## 주축이
- 주축이 가로(row)라면 가로로 배치
- 주축이 세로(column)라면 세로로 배치 

블락요소는 줄바꿈이 발생한다.div는 블락요소이다.