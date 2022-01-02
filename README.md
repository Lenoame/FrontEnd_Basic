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

## Blog 글목록 만들기
class 이름 작명할 땐 의미전달도 중요하다

<h> <p> 도 display: block; 을 가지고 있음. 한 행을 다 차지함

h, p 태그는 기본적으로 margin을 가지고있다

## 셀렉터를 이용해 CSS 코드 양 줄이기
float 관련 문제

<div> 에 margin을 주더라도 글자들이 안밀려난다

margin을 크게 주던가

태그 윗쪽에 가상의  div 박스를 하나 만들고 clear: both;를 주기

float 준 요소 다음에 clear: both; 넣은 <div> 추가하는 것을 추천

navbar 만들 때 <div>  대신 <nav>를 써도 됩니다

기능은 <div>와 똑같다. 하지만 <div> 보다 읽기 쉬울 수 있음

<section>

<footer>

기능은 <div> 와 똑같음

```css
.navbar li {
	display: inline-block;
}

/* css selector 문법 중 공백 : ~안에있는 모든자식태그에 적용 */

.navbar>li {
	display: inline-block;
}

/* selector 문법 > ~ 안에 있는 직계자식(바로 밑에 있는 자식) */
```

보통 넣을 링크가 정해지지 않으면 <a href=”#”></a> 라고 쓴다

text-decoration: none; 링크되는 글자에 밑줄을 제거할 수 있다

방문 후 보라색되는 것도 변경가능 → 구글링 해보기

참고 : 태그에 class 2개 이상 부여하려면? → 띄어쓰기 하고 클래스명 집어넣기

좋은 코드는 누구나 봤을 때 직관적으로 이해할 수 있는 코드

## 배경 이쁘게 넣는 스킬들 & margin collapse
경로에서 ../ 상위폴더로 이동하라는 뜻

배경이미지는 꽉 차지 않으면 반복된다

기본적으로 배경이미지는 왼쪽부터 채워짐

background-position: center 가운데부터 채워주세요

background-attachment 스크롤시 배경위치 조정가능

filter: brightness(%) 높일 수록 밝아짐

(안에 글씨 있으면 글씨에도 필터입혀짐)

배경 여러개 겹치기

background-image: url(), url();

배경에 색 overlay 줄 수도 있음

margin collapse 현상

박스 2개가 위쪽 테두리가 겹칠경우 → margin도 합쳐졌다

해결법 : 싫으면 테두리 안붙게하기 → padding: 1px;

윗박스 margin-bottom과 아래박스 margin-top이 만날 경우 마진이 큰 것으로 적용된다

(숙제) 제목 밑에 이쁘게 글, 버튼 넣어오셈

```css
.main-background {
	width: 100%;
	height: 500px;
	background-image: url(../img/shoes.jpg), url(배경 여러개 겹치기 가능); background 이미지 넣기 / ..은 상위폴더로 이동하라는 뜻
	background-size: cover; 배경이미지는 꽉 차지 않으면 반복된다.
	background-size: cover; 배경짤려도 상관없으니 빈공간 없이 배경으로 꽉 채워라 
	contain : 배경 짤리지 않게 해주세요
	background-repeat: no-repeat; background 조정하기
	background-position: right, center... ; 위치조정
	background-attachment: fixed; 스크롤시 배경 위치 고정 가능
	filter: brightness(70%); 박스에 보정입히기 saturate 채도 / 안에 글씨 있으면 글씨에도 필터입혀짐
	padding: 1px;
}

.main-title {
	color: white;
	font-size: 40px;
	margin-top: 300px;
}

margin collapse 현상
박스 2개가 위쪽 테두리가 겹침 > 이럴 경우 margin도 합쳐짐
- 싫으면 테두리 안붙게하셈 - padding: 1px;
박스 2개 위아래 테두리가 겹침 > 테두리 2개가 만나는 경우 margin도 겹쳐서 큰 마진이 적용됨
```

## position과 좌표 레이아웃 만들기
<body> 기본 margin 있음

body태그에 margin: 0px; 주면 여백없는 웹사이트 만들 수 있다

class명 중복 피하려면 접두어 많이 활용하기

좌표속성으로 배치 가능 → top: 100px

position 부여하면

1. 좌표이동가능
2. 공중에 뜸

relative - 내 원래 위치가 기준

absolute - 부모태그가 기준 (relative 가진 부모)

fixed - 현재 화면이 기준

position: relative; 내 원래 위치를 기준으로 이동하세요~

bottom left right top 으로 위치 조정

position: static; 좌표이동 X

position: fixed; 현재 화면이 기준

현재화면을 기준으로 고정되는 요소가 필요하면 사용하기 → 상단 메뉴 or 구매버튼

position: absolute; 내 부모 태그 중에 position: relative 가진 부모 기준

참고 : position: absolute 준 요소 가운데 정렬 하려면

left: 0; right: 0; margin: auto;

적절한 width주기

## position 숙제 & 반응형 width & box-sizing
오늘 배울 내용 1

z-index

공중에 떠있는 애들이 많으면.. 누가 맨 앞에 올 것인가

z-index가 높을수록 앞에 온다

오늘 배울 내용 2

max-width

가변적인 요소로 만들고 싶으면 %단위로 설정해주면 된다

부모 요소 크기에 따라 %단위로 조정할 수 있다

현재 창의 width는 곧 <body>의 width

반응형 웹페이지를 만들고 싶으면 %를 사용한다

width %의 문제는 PC 사이즈에서 너무 크다 → max-width와 함께 쓰기

min-width도 있고 max-height 등을 사용하여 최대 최소 크기를 설정할 수 있다

(중요) width는 content(글작성) 영역의 너비를 의미함

border와 padding은 width와 상관없다

박스에 width: 600px; 줘도 padding: 50px;을 주면 실제 보이는 width는 700px이다

(해결책) content부분만 width로 설정하지 말고 padding, border 포함하라고 시키면 됩니다

box-sizing: border-box; 이러면 padding, border가 포함된다

box-sizing: content-box; 이러면 padding, border가 포함이 안된다

```css
div {
	box-sizing: border-box;
}
이렇게 해놓고 개발시작하면 편하다
```

숙련자일수록 CSS 파일 맨 위에 써놓는 코드가 많다 → 호환성 이슈 해결책부터 첨부하는 경우가 많음

(참고) 브라우저마다 디자인이 다르게 보일 수 있다

<button> <input> 이런 태그는 크롬과 파이어폭스 기본 디자인이 다르다

<small> <main> 이런 태그는 일부 IE 브라우저에서 이상하게 보인다

검색 키워드 : normalize.css → 호환성 문제를 해결해주는 CSS 파일을 링크해두면 작업하기 편해짐

CSS Normalize 링크 :  https://github.com/necolas/normalize.css/blob/master/normalize.css

## form & input
<form action=”경로”>

작성한 내용이 어떤 서버경로로 전달될지

<input type=”text”> 일반 글자 입력할 때 

<input type=”password”> 패스워드 입력할 때

<input type=”email”> 이메일 입력할 때

<input type=”date”> 날짜 입력할 때

<input type=”checkbox”> 체크박스 생성

<input type=”radio”> 라디오 버튼 생성

<input type=”text” value=”값을 미리 채워넣을 수 있음”>

<input placeholder=”배경글자”> 추천하고 싶은 글자 넣어둘 수 있음

<input name=”인풋이름”> 서버개발시 필요하다 → 이 이름으로 서버 데이터베이스에 저장됨

<!-- 선택박스 만들기 -->
<select>
<option></option>
</select>
<textarea>큰 인풋 만들기</textarea>

<textarea rows=”10”> 사이트 로딩했을 때 얼마나 큰 사이즈로 인풋박스를 보여줄 것인지

크게 외울 필요가 없음 → 필요할 때 구글 찾아보기

전송버튼 만들기

<input type="submit">
<button type="submit">전송</button>

input 스타일을 할 때 input[속성명=속성값] 으로 스타일을 주면 더 세세한 요소에 스타일을 줄 수 있다

```css
input [type=text] {
	padding: 10px;
	font-size: 20px;
	border: 1px solid black;
	border-radius: 5px;
}
```

## form & input 숙제 : Contact Us 섹션 만들기
selector에서 콤마쓰면 중복선택가능

```css
div, input, textarea {
    box-sizing: border-box;
}
```

CSS 초보 특징 : 그때그때 class 새로 만들어서 쓴다

CSS 고수 특징 : 만들어둔 class 재활용함

장점 1. 개발시간 단축. 2. CSS 양이 줄어든다 3. 디자인에 통일감을 준다

어떻게 class 만들어야 재사용이 가능할지 고민하기

재사용했는데 스타일이 더 필요하면 공백넣고 class 명 추가하기

<input> 옆에 글씨를 넣으려면 의미없는 태그 <span>을 많이 사용한다

<span> 태그 보다는 <label> 태그가 더 좋음

```html
<input id="sub" type="checkbox">
<label for="sub">Subscribe</label>
```

label의 for과 input의 id가 같으면 label의 글자를 누르면 input과 똑같이 동작시켜준다

혹은 input 제목으로 label을 사용하기도 한다

오늘 새로 배운 것들

1. 셀렉터에 콤마쓰면 여러 개 동시 선택가능하다
2. 재사용가능하게 class 만들기 -> 그럼 금방금방 실력 향상된다
3. <label> 유용하다

## 쓸데 많은 Table 레이아웃과 vertical-align 속성
장바구니 페이지를 만들 때 표를 가끔 사용함

표 만들땐 <table>

가로줄 먼저 그리고 세로줄을 그리면 된다

가로 행은 <tr> : table row

세로 열 만들 땐 <td> : table data

```html
<table>
	<tr>
		<td></td>
		<td></td>
	</tr>
</table>
```

제목용 세로 열 만들 땐 <th>

테두리가 없는 이유는 스타일링을 안했기 때문이다

제목 행은 <thead> 안에

일반 행은 <tbody> 안에 넣으면 좋다

기능상 차이는 없다

<table> 은 기본적으로 틈이 존재한다. 없애려면 border-collapse: collapse; 해주기

```css
table {
	border-collapse: collapse;
}
```

vertical-align: top/middle/bottom  셀 안의 요소 상하정렬

vertical-align 세로정렬할 때 씁니다만...

1. inline/inline-block 요소 간의 세로정렬할 때 vertical-align 씁니다

super : 윗첨자(제곱)

sub : 아랫첨자

1. table 안에서 세로정렬할 때 vertical-align 씁니다 (top/middle/bottom 가능)

display : inline; 항상 옆으로 채워지는 폭과 너비가 없는 요소

(참고) 일반 <div>로 표 만들기

```html
<div style="display: table">
	<div style="display: table-row">
		<div style="display: table-cell"></div>
		<div style="display: table-cell"></div>
	</div>
</div>
```

## Cart 페이지 만들기
새로배울 내용 : nth-child 셀렉터 문법

일부 브라우저에서 table의 border-radius 안 먹을 수 있음 (border-collapse와 함께하면)

td 폭조정시 유의사항

셀은 글자가 찌부되지 않도록 최소폭을 갖고 있음

표는 하나만 셀 하나만 스타일을 줘도 모든 행이 공통 스타일이 된다

```css
.cell-long {
    width: 700px;
}
td에게는 최대한 이만큼 차지해보세요
```

nth-child() 셀렉터

```css
.cart-table th:nth-child(2) {
    width: 400px;
}
cart-table 클래스 안에 있는 th중에 2번째로 나오는 요소만 스타일링 해주세요
```

nth-child(n) 셀렉터 → n번째 등장하는 요소만 스타일링할 때.

td 하나로 합치기 → colspan=”5” -> "이 td는 옆의 셀 5개를 합쳐주세요"

```html
<td colspan="5">
```
