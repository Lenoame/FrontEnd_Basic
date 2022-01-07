# JavaScript / jQuery 입문과 웹 UI개발
## 자바스크립트의 목적과 셀렉터 (Selector)
JavaScript로 웹서버 모바일앱 머신러닝... 요즘 별거 다할 수 있음

(원조) 웹개발할 때 씁니다

웹환경에서 JavaScript의 목적 = HTML 조작과 변경

(안중요) + 데이터다루기 + 수학계산 + 서버와 통신

JS로 HTML을 조작하면 이쁜 웹 UI 만들기 가능

처음 배울거 : HTML 조작

첫번째 프로젝트 Alert창 띄우고 닫기

- 하려면 HTML 조작법부터 배우기

브라우저 새로고침하면 코드가 실행된다

브라우저 새로고침하면 <script> 안의 내용도 읽어줌

코드는 영어만 해석하면 왜 변경되었는지 알 수 있음

. = ~의

```jsx
document.getElementById('hello').innerHTML = '안녕';
// 웹문서 ID hello인 HTML 요소 가져와 내부글자인
```

1. 바꾸고 싶은 HTML 요소의 id 괄호 안에 적고
2. 뭐바꿀지 뒤에 적기

결론 : 빈칸만 잘 채우면 뭐든 원하는대로 변경가능

HTML요소의 색상 사이즈 마진 패딩 등 변경가능하다

= (등호) 의 뜻은 대입이다

‘’ 문자는 따옴표 안에 → 이것은 문자자료형이라고 부름

document.getElementById() 이걸 셀렉터 Selector라고 부름

프로그래밍은 컴퓨터에게 일을 시키는 것이다 (명령)

(중요) 컴퓨터는 정확히 명령해야 알아듣습니다 → 아주 구체적으로 지시해야함

“컴퓨터야 id=hello인 HTML 요소를 ‘안녕’으로 바꿔~”

```jsx
document.getElementById('hello').innerHTML
// innerHTML 부분을 다른 것으로 바꾸면 뭐든 바꿀 수 있다
```

## onclick 속성으로 버튼 기능개발 : Alert 박스 만들기
($)는 jQuery 문법

UI 만드는 법

1. 미리 디자인해놓고 숨김
2. 버튼누르거나 하면 보여줌

```HTML
<button onclick="">button</button>
이 버튼 click하면 이거 코드 실행해주세요
```

## 자바스크립트 function 문법 정확한 사용법 / 에러 체크하기
오늘배울거 : function + 대체 언제 function이 등장해야하는지

function을 쓰면 긴 코드를 깔끔하게 한 단어로 축약가능

초보 때 자주 겪는 흔한 버그

변경할 HTML 요소는 위에

JS로 조작은 밑에서 (정석)

JS 조작을 위에서...? (에러남)

변경할 HTML이 있으면 그거 하단에 JS 코딩해야한다

이유 : HTML을 먼저 읽어야 JS로 조작이 가능

초보 때 자주 겪는 에러메세지 1 : Uncaught TypeError: Cannot set property ‘innerHTML’ of null

innerHTML의 왼쪽에 있는게 null 이라는 에러임

초보 때 자주 겪는 에러메세지 2 : Uncaught TypeError : document.getElementsByid is not a function at ... 함수가 아닌데요~

대문자여야하는데 소문자로 쓴 경우 (오타)

대부분 함수명 오타

숙제 : 닫기버튼에 적은 코드 function으로 축약해보기

## 자바스크립트 function 의 두번째 기능, 구멍 뚫기 (파라미터)
오늘 배울거 : 함수 업그레이드하고 싶으면 파라미터

함수의 파라미터 (일명 구멍)

방금 파라미터라는 문법을 이용해 알림창열기() 함수를 업그레이드한 것이다

1. 함수에 구멍뚫어놓으면
2. 앞으로 함수쓸 때 (구멍)안에 아무거나 입력가능

파라미터의 장점 : 함수하나로 다양한 기능 만들기 가능

초보 : 기능마다 대응하는 함수를 많이 만듬

고수 : 비슷한 함수들은 여러개 만들 필요가 없음

Q. 구멍이 여러개 필요한 경우?

1. 콤마로 구분
2. 자유작명
3. 당연히 구멍타고 들어온 데이터는 어디에 넣어줄지도 표시

코드 따라치는건 공부가 아니고 복붙이다...

오늘의 숙제 : Alert창 2개 만들기

방법 1. Alert box용 HTML 두개 만들기 (하드코딩)

방법 2. JS를 쓰면... HTML 변경이 쉬움 → 버튼1을 누르면 기존 alert box 띄워주는데 띄우기 전에 내부 글자를 “아이디 입력하셈” 으로 변경, “비번 입력하셈”으로 변경

## 자바스크립트 이벤트리스너 addEvenetListener & UI 재사용하기
버튼1을 누르면

1. 제목을 “아이디입력하셈” 바꾸고
2. Alert 박스 띄움

버튼2를 누르면

1. 제목을 “비번입력하셈” 바꾸고
2. Alert 박스 띄우기

코드를 못 짜겠으면 한글부터 짜고 JS로 번역 연습하기

참고 : 셀렉터는 여러개 있음

getElementsByClassName(’’)[인덱스] → class 명이 (’’) 인 것을 모두 찾아라

class명이 여러개일 경우 인덱싱을 해주면 된다

참고 : 파라미터를 쓰면 비슷한 함수 여러개 필요없음

오늘 배울거 : EventListener

여기 JS한글자 안쓰고도 기능개발 가능

```jsx
document.getElementById('close').addEventListener('click', function () {
		
	})
// getElementById가 클릭되면 옆에 있는 함수를 실행해주세요
```

아직 배운게 많이 없어서 이해는 나중에

위 코드의 click은 Event라고 부름

Event는 여러가지가 있습니다

- click
- keydown
- scroll
- mouseover 등

## jQuery 설치와 기초 셀렉터 정리
JS 코드양을 줄일 수 있는 방법 발명 → jQuery 라고 이름지음

jQuery를 사용하면 코드가 절반정도로 줄어듬

jQuery 같은건 라이브러리라고 부릅니다

근데 요즘에는 jQuery를 잘 안씀 → React가 HTML조작을 약간 더 잘함

- 앱처럼 스무스하게 동작하는 앱
- HTML 재활용 편리 등 장점이 있음
- React 없으면 jQuery가 왕
- jQuery로 개발된 사이트가 많음
- 그래서 안 배울 수는 없다

jQuery 설치 : jQuery 파일 받아서 첨부만 함

- 구글에서 jquery 어쩌구.js 다운받아서
- <script src=”js파일경로”></script>
- jQuery cdn 검색
- <script> 어쩌구 그대로 복붙

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="   crossorigin="anonymous"></script>
다른 사이트가 호스팅해주는 js파일 가져오는 것
```

버전

- uncomporessed : 그냥 원본 파일
- minified : 공백 제거 버전 (용량 줄어듬)
- slim : 기능 많이 빠진 라이트버전
- slim minified...

jQuery 설치 위치 (중요)

- jQuery 파일 첨부한 곳 밑에서부터 jQuery 문법 이용가능
- <head> 태그에도 넣어도 되지만 HTML은 읽어들일 때 위에서부터 한줄씩 읽음
- 이런 외부 js 파일 발견하면 잠깐 멈추고 파일 다운받아온다
- 웹 구성요소들은 <body>에 있음 (이거 먼저 해석되는게 좋음)
- <body> 끝나기 전에 넣는 것이 제일 좋음 (그냥 모든 JS들은 다 여기 넣기)

```jsx
document.getElementById('test').innerHTML = '???';
$('#test')
document.querySelector('#test')
// 둘이 같은 의미
```

jQuery로 HTML 변경하는 법

- $(’CSS셀렉터’).어쩌구()
- 쌩자바스크립트에서 쓰던건 안된다 (jQuery와 호환이 되지 않는다)
- .html() 안에 있는 모든 html
- .text() 안에 있는 모든 글자
- 출력만 해보고 싶을 때는 그냥 괄호안에 아무것도 안씀
- .css(이걸, 이렇게) 스타일 속성 바꾸는 것
- .attr(이걸, 이렇게) 속성 바꾸기 attribute