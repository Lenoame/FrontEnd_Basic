# FrontEnd_Basic
## HTML 기초와 개발환경 셋팅
HTML

웹페이지 만들 때 쓰는 언어

HyperText Markup Language

Markup Language : 자료들이 어떻게 생겼나 구조를 표현하기 위한 언어

개발환경 셋팅

1. 코드 에디터 설치
2. 작업용 폴더 아무데나 만들기
3. 설치한 에디터 오픈 후 방금 만든 작업용 폴더 열기
4. index.html 파일 만들기
5. html 기본 템플릿 작성

웹페이지니까 웹브라우저로 열어도 됩니다

## HTML 기본 태그로 글 작성해보기
html 에서는 글만 대충 적으면 안됩니다

html안에서 글을 적을 때는 <p> </p> 안에다가 적어야 함

글제목은 <h1></h1> 안에 적어야 한다

본문은 <p></p>안에 적어야 한다

이미지는 <img src=”이미지 경로”> 이렇게 적어야함

src같은 경우 속성이라고 함

이미지 파일 하나 아무거나 준비하고 작업폴더 안에 넣어두기

버튼은 <button> 버튼이름</button> 이렇게 해야한다

링크는 <a href=”주소”>링크</a> 

리스트는 <ul><li>리스트</li></ul> 

p : paragraph

h : heading

a : anchor

ul : unordered list

li : list item

ol : oredered list

HTML은 자료의 본문을 자료가 어디에 어떻게 배치되어있나 표현하는 언어

태그 안에다가 적는 이유는 어떤 자료인지 표기하기 위해서

태그 안에다가 잘 집어넣는 문서를 웹표준을 잘 지키는 문서라고 얘기함

1. 웹페이지 만들 때 모든 요소는 태그 안에 넣어야 한다
2. 일부 태그는 속성 기입 가능
3. 태그 안에 태그도 가끔 집어넣을 수 있다

## 기본적인 웹페이지 스타일링
HTML 꾸미는 법

style 속성으로 꾸밉니다

스타일명 : 값;

이미지 가운데 정렬하는 방법

display : block;

margin-left : auto;

margin-right : auto;

글자 스타일링 방법

사이즈는 font-size: 16px;

폰트 종류는 font-family: ‘gulim’;

폰트 색상은 color : red; 혹은 칼라 코드를 적음 #111111 6자리

자간 조절은 letter-spacing : 1px; 이런 식

글자 정렬은 text-align : center;

control + space bar 누르면 에디터 자동완성이 열림

px대신 vw로 했을 경우는 현재 브라우저 창의 너비에 맞게 정해진다

%단위는 내 부모 사이즈에 비례

<부모>

<자식>

이런 식으로 나뉨

Q. 일부 글자만 스타일링 어떻게?

<span> 글자를 감쌀 수 있는 별 의미 없는 태그. 글자 일부만 스타일링 하고 싶을 때 사용

Q. 글자 굴게?

font-weight : 100~900

<strong></strong> 이런 식으로 사용

Q. style에 넣을 수 있는 스타일명들 다 외워야하나요?

A. 필요하면 검색하기. 자주쓰는건 외워두기

## CSS 파일 만들고 첨부하는 법
Cascading Style Sheet : 스타일 보관파일

style이 너무 길면 .css로 뺄 수 있다

CSS파일에 스타일 보관하기

1. 일단 <link>로 CSS 파일연결
2. css파일에 style 작성
3. html 파일에서 작명한거 사용

```html
<link href="css/main.css" rel="stylesheet">
<!--css/main.css는 전문용어로 상대경로라고 한다-->
```

class=”스타일 이름”

- CSS파일에 style 보관하고 class 작명
- html 파일에선 class=”작명한거”

Q. 제목도 스타일도 CSS파일 이용해서 class로 축약해보기

- 클래스명은 점찍고 작명하시오 (.profile)
- 이름 중복은 피합시다

모든 p태그 스타일

class 말고 다르게 스타일 넣는 법

#special = id

.class vs #id 어떤걸로 스타일 넣어야 하나 → class 추천

id는 보통 사용하지 않음. 자바스크립트 개발할 때 사용하고 스타일을 할 때는 거의 사용하지 않음

CSS selector 

class selector

id selector

tag selector

로 나뉜다

Q. 스타일이 겹칠 경우 우선순위에 따라 정해짐

id > class > tag 순으로 우선순위가 높다

id가 가장 우선순위가 높음

## 웹레이아웃의 기초 : div를 이용한 네모네모 박스 디자인
네모 박스를 넣고 싶으면 <div></div> 태그 사용

division이라는 뜻

margin (상하좌우 여백)

top left right bottom

padding (상하좌우 안쪽 여백)

margin과 똑같이 사용 가능

border (테두리) border의 두께, 종류, 색을 지정해주기

border-radius (테두리 둥글게)

<div> <p> <h> 특장

display : block 기본으로 가지고 있다

가로행을 전부 차지하고 싶을 때 준다

<div> 안 글자는 대충 적지 말고 다른태그안에 넣어주기

부모태그에 스타일을 줘도 잘 된다

왜냐면 일부 스타일은 자동으로 부모 → 자식 inherit(상속) 됩니다

inherit 지원하는 스타일은 정해져 있음

font-size font-family color 등

박스에 그림자 스타일을 주려면 

```CSS
box-shadow: x좌표 y좌표 (blur-radius : 블러 효과) (spread-radius : 확산효과) (color)
```

none : 그림자 효과 없애기

initial : 기본값

inherit : 부모 요소를 상속받기

를 사용하면 된다

## 호환성 좋은 float
float 이용한 레이아웃 만들기

레이아웃을 만들기 전에 전체를 감싸는 container 박스 만들어두면 유용하다

보통 wrapper 박스 or container 박스라고 함

헤더부분 만들기

```css
/* width 를 % 로 주면 부모 태그의 요소 기준으로 해준다*/
.header {
	width: 100%;
}
```

모든 <div>는 display: block 을 가진다 (가로행을 전부 차지한다)

float : left 요소를 붕 띄워서 왼쪽정렬

clear : both float 다음에 오는 요소에게 주면 float로 발생하는 이상한 현상 해결가능

float 쓰고 나서 다음에 오는 요소는 clear 주는게 좋다

가로배치하는 법만 알면 원하는 레이아웃 전부 만들 수 있음

## 귀찮은 inline-block
박스 가로로 배치할 수 있는 다른 방법

주석 : 이 코드는 읽지 말아주세요

ctrl + /

맥은 command + /

협업할 때 주석 넣어주는게 중요함

inline-block 사용해서 가로로 배치해보자

display: block (한 행을 전부 차지)

display: inline-block (내 크기만큼 차지)

inline-block 사용하면 박스사이 공백제거가 귀찮음

inline-block 사용시 공백제거 방법

1. 박스사이 주석기호 사용
2. 부모태그에 font-size: 0px; 자식태그에 폰트사이즈 다시 설정하면 글씨가 보임

참고 : 부모 태그로부터 inherit 되는 스타일은 중요도가 가장 낮음

inline-block 박스 안에 글쓰면 안에다 공백 못씀 글씨 쓰면 이상해짐

해결법 : vertical-align: top; 을 스타일에 적용

vertical-align 상하정렬을 위로 보낼건지 밑으로 보낼건지 설정하는 것

top or bottom

공책에 글씨 적을 때 baseline이 존재하는 것이 html에도 적용됨

baseline 이 옆에 존재하면 display : inline-block 요소들이 baseline 위에 오려고 한다

display : inline-block은 자기 크기만큼 자리차지한다

- 공백제거 필요
- 주변에 글이 있으면 가끔 이상해진다

팁 <div> 박스부터 배치하고 내용채우기 시작하면 쉽다