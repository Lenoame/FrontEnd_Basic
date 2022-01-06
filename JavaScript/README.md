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