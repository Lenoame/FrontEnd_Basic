# JavaScript / jQuery 입문과 웹 UI개발 (코딩애플)
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

## jQuery 쓰는 이유 & 기초내용 빠른 정리
왜 안해본거 숙제로 시키는지 → 내가 배운것만 할 수 있으면 기술자. 개발자가 아님

jQuery 왜 쓰냐면

1. 자바스크립트인데 코드 짧음 if for var function 등
2. 쌩자바스크립트로 못하는 것을 할 수 있음 → 쌩자바스크립트는 요소 하나씩 변경해야한다. jQuery는 코드 한줄로 여러개 변경가능
3. 쉽게 만드는 애니메이션 UI

```jsx
<p class="greeting">안녕하세요</p>
<p class="greeting">안녕하세요</p>
<p class="greeting">안녕하세요</p>

document.getElementsByClassName('greeting')[0].innerHTML = '안녕';
document.getElementsByClassName('greeting')[1].innerHTML = '안녕';
document.getElementsByClassName('greeting')[2].innerHTML = '안녕';
// getElements s가 붙으면 모두 찾아달라는 뜻 -> 그래서 순서를 지정해주어야된다
// 그래서 복수의 class를 가진 것들을 전부 바꾸고 싶을 때는 여러 줄을 써야한다

$('.greeting').html('안녕');
$('.greeting').eq(0).html('안녕'); // 이렇게 인덱싱도 가능
```

```jsx
// 버튼여러개에 이벤트리스너 부착은 jQuery 쓰면 간단. 쌩자바스크립트는 여러줄을 써야한다
<button class="btn">버튼btn</button>
<button class="btn">버튼btn</button>
<button class="btn">버튼btn</button>

document.getElementsByClassName('btn')[0].addEventListner('띄우주셈~~')
document.getElementsByClassName('btn')[1].addEventListner('띄우주셈~~')
document.getElementsByClassName('btn')[2].addEventListner('띄우주셈~~')

$('.btn').on('click', 'h4', function() {
	띄워주셈~~
})
// 위와 같음
// jQuery 이벤트리스너 특 : 이 요소 안에 이 태그(h4)가 있으면 이 함수를 작동시켜주세요
```

## Bootstrap 사용하기와 모달창 UI 개발
부트스트랩 : 프론트엔드 component 모아놓은 라이브러리 (메뉴, 대문, 모달창, 폼 등)

- 복붙식으로 HTML 개발 가능
- 설치 : Get started 버튼 클릭
- 중간에 Starter template 코드 복사 붙여넣기

대문(junbotron) 만들기

복붙식 웹개발 → 필요한 부분 CSS로 수정만 하면 개발 끝

창을 하나 더 띄우는 HTML → 모달창

1. HTML로 미리 디자인해놓고
2. 숨겨놨다가
3. 버튼 눌렀을 때 보여줌
4. 모달창은 보통 HTML 멘 위에 만든다

```css
.black-background {
  display: none;
  /* visibility: hidden; UI에 자국이 남음 */
  /* opacity: 0; 투명도 1로 바꾸면 보이긴 하지만 완전히 요소를 없앨 순 없음 */
}
```

## toggle 함수들 : Nav 메뉴 만들기
쓸만한 jQuery 함수 몇개

.hide()

.show()

.fadeIn() 서서히 보여줌

.fadeOut() 서서히 사라짐

.slideDown() 슬라이드로 나옴

.slideUp()

nav 메뉴 만들기

- 버튼 누르면 서브메뉴 출현!
1. 미리 HTML 만들어놓기
2. 평소에는 안보이게
3. 버튼 누르면 보이게
4. 버튼 다시 누르면 안보이게

.slideToggle(); slideDown/Up을 왔다갔다함

.fadeToggle(); fadeIn/Out을 왔다갔다

.toggle(); hide/show를 왔다갔다 해줌

## if/else 조건문을 배워보자
if 조건문 : 특정 **조건이 맞을 때만** 코드를 실행하고 싶을 때 씁니다

```jsx
if (조건식) { 
	조건식이 참일 때 실행할 코드
} else { 
	참이 아니면 실행할 코드 
}
```

조건식에 들어가는 것들

- >
- <
- >=
- <=
- == (느슨비교)
- === (엄격비교)

```jsx
if (1 == '1') {
	console.log('안녕')
}
// 참 (느슨비교) (타입이 달라도 참이다)

if (1 === '1') {
	console.log('안녕')
}
// 거짓 (엄격비교) (자료의 타입이 다르기 때문)
```

console.log(’’) 콘솔창에 출력해주세요

조건식을 작성하면 true or false가 남는다

Boolean : 참/거짓을 표현하는 자료형 (true/false) 

```jsx
$('#log-in').on('click', function() {
	if ($('#test-input').val() == '안녕') {
		$('black-background').fadeIn();
	}
});
// input에 입력된 값을 가지고 오고 싶으면 input의 아이디와 .val() 함수를 붙여주면 된다
```

코드 잘짜는 법

- 한국어로 설명부터 하자
- 그걸 번역해서 프로그래밍 언어로 작성

## 폼개발로 배우는 else if, and, or 문법
조건을 차례로 여러개 검사해보고 싶은 경우 : else if

세트로 묶인 if문 특징 : 위에서부터 읽어내려가다가 조건이 맞은 하나만 실행함

그 뒤 if / else는 해석하지 않음

조건식을 여러개 넣기?

```jsx
if (1 == 2 && 2 == 3) {
	// and 논리 연산자
}

if (1 == 2 || 2 == 3) {
	// or 논리 연산자
}
```

and &&

- 왼쪽 오른쪽이 전부 참이면 전체가 참

or ||

- 왼쪽 오른쪽 중에 적어도 하나가 참이면 전체가 참

전송 눌러도 새로고침이 안되면 action=”#” 넣기 → 폼을 전송할 URL

“빈칸 검사기능”

이메일이 빈칸일 경우 안내를 띄우거나 전송을 막는 기능 

```jsx
// 폼이 전송되는 이벤트에 이 기능 실행
// 만약에 이메일 input에 입력된 값이 빈칸인 경우, 폼의 전송을 막음, 안내문 띄움
.on('submit', function() {
	e.preventDefault();
}
```

submit → 전송되는 이벤트

- 이메일 input이 빈칸인 경우 전송이 안되어야 함
- 빈칸이 아니면 전송(새로고침) 되어야 함

## else if 활용 : 폼 전송시 공백체크 기능 만들기
숙제) 이메일 input 공백체크 기능 만들기

```jsx
$('form').on('submit', function(e) {
	if (이메일 input에 입력된 값 == 빈칸) {
		e.preventDefault();
		$('#email-alert').show();
	}
});
```

Q. 비밀번호 입력란도 공백검사하려면?

코드를 짜기 전에 설계를 먼저 해야함

프로그래밍 팁 : 한글로 먼저 작성해보세요 (pseudo code : 의사코드)

```
폼이 전송될 때
	만약에 이메일 input에 입력된 값이 빈칸인 경우,
	폼의 전송을 막음, 안내문을 띄움
	만약에 패스워드 input에 입력된 값이 빈칸인 경우,
	폼의 전송을 막음
```

코드를 해석을 해봐도 모르겠으면 작동시켜보면 된다

form과 관련된 이벤트들

- input(값이 변경될 때 실행)
- change(값이 변경되고 focus 잃을 때 실행)

```jsx
// email input 안에 있는 값이 바꼈을 때 항상 아래 코드를 실행시켜줌
$('#email').on('change', function() {
	$('#email-alert').show();
});

// input에 입력하고 있을 때 안내문을 띄워줌 (한글자만 쓰더라도)
$('#email').on('input', function() {
	$('#email-alert').show();	
});
```

## var let const 변수와 변수의 활용법
var 변수이름 = 저장하고싶은 값

변수는 자료를 임시로 저장하는 공간이다

긴 문자열의 경우 변수이름 하나로 줄일 수 있다

셀렉터로 찾은 요소를 변수에 저장할 수도 있다

자바스크립트는 HTML요소를 찾는데 시간이 오래걸림

같은 셀렉터 여러번 쓰지말고 변수에 담아서 쓰자

```jsx
선언 (변수를 만들거임) → var name;

할당 (값을 집어넣는것) → 할당으로 변수의 값을 자유롭게 변경가능

age = 20;

age = 21;

범위 (변수가 쓰이는 범위, 일반적으로 function 내부)
함수 안에서 변수를 만들면 함수 밖에서 사용 불가능
함수 밖에서 만든 변수는 함수에서 사용이 가능하다

```

전역변수 : 전역에서 쓸 수 있는 변수

최신 자바스크립트 문법 (ES6)

```jsx
// 범위가 function
// 재선언 가능
var age = 20;

// 범위가 {}
// 재선언이 불가능한 변수를 만들 때
let age = 20;

// 범위가 {}
// 재할당이 불가능한 변수를 만들 때
const age = 20;
```

var 변수 : 재선언 가능, 범위가 function

let 변수 : 재선언이 불가능한 변수를 만들 때 사용 → 코드가 길어지면 변수를 중복해서 선언할 수 있는데 그것을 방지해줌, 범위가 {}

const 변수 : 재선언, 재할당 불가능, 범위가 {}

프론트 환경에서는 const는 거의 안쓰고 백엔드에서 많이 쓴다

## 애니메이션 UI 1 : jQuery Animate 함수
JS 이용 : 사용자의 키입력, 마우스입력 체크가능

CSS 속성을 서서히 변경하고 싶을 때 jQuery animate() 함수를 쓴다

JS에서 - 는 뺄셈기호이기 때문에 camelCase로 쓴다

CSS를 여러개 넣고 싶을 때는 , 로 구분

jQuery animate( {CSS속성}, 동작속도(ms) );

속도를 지정해줄 수 있음

애니메이션 UI

UI를 미리 만들어두고 감춘 뒤 서서히 동작시키면 된다

```jsx
// Show Menu 버튼을 누르면, 저 메뉴가 왼쪽에서 슬그머니 등장하게 해주세요
$('#show-menu').on('click', function() {
	$('.left-menu').animate({marginLeft: '0px'});
});
```

## 애니메이션 UI 2 : Slide Down 모달창 만들기 & 애니메이션 필수 팁
애니메이션 만드는 방법

1. 시작화면/최종화면 만들기
2. 자바스크립트로 트리거하기
3. 스무스한 동작은 animate 함수 사용

jQuery 함수들 순서대로 실행하기 스킬 (함수 연결하면 끝)

요즘 스타일 애니메이션 개발 방법

1. 시작화면/최종화면 만들기
2. 자바스크립트로 트리거하기
3. 스무스한 동작은 animate CSS 속성 씀 transition 쓴다

```css
transition: all 1s; 
모든 CSS 속성이 변경될 때 1초에 걸쳐서 서서히 변경됨
```

프로의 애니메이션 개발 팁 1

margin

width

position

left

right

height

애니메이션 금지 (버벅일 수 있음)

transform : translate() 좌표이동 시 많이 사용 X Y Z 축

transform : rotate()

transform : scale()

이걸 쓰자

프로의 애니메이션 개발 팁 2

.jQuery .css(); 함수보다 .addClass(); 함수가 더 좋음

addClass(); class를 부착하는 거임

JS에서는 CSS를 짜지 말자

최종화면에 필요한 CSS는 class에 묶어서 작성한 다음에 클래스를 뗏다 붙였다 하는 식으로 만들기

그래야 복잡한 애니메이션을 만들어도 관리가 쉽다

## 정규식으로 이메일 형식 검증해보기
정규식 → 문자를 검사할 때 쓰는 정규식

```jsx
/asd/.test('abcdefg');
```

이 문자에 이 문자가 들어가있나요?

검사 후 boolean 형태로 반환해줌

ture / false 가 남으면 결과에 따라 변하는 if 조건문으로 코드를 만들 수 있다

(보통 외우지 않고 찾아서 씁니다)

```jsx
/[A-z]/.test('s');
```

대시 기호는 여기부터 저기까지 라는 범위를 나타낼 수 있음

[찾을 문자의 범위]

[A-z] [ㄱ-ㅎ]

/\S/ (특수문자 포함 모든 문자) 

/\S@/.test(’t@’) → 문자 끝에 @가 오는지 검사하고 싶으면 이렇게 쓴다

간단한 이메일 정규식 작성하기

/\S+@\S+\.\S/;이메일을 체크할 수 있는 정규식

\S 특수문자 포함 모든 문자 1개

\S+ 뒤에도 계속 찾아주세요

\ (특수 문법기호들 escape 처리)

## Carousel (이미지 슬라이드) 직접 만들기 1 : UI와 버튼기능
Carousel (이미지 슬라이드 UI)

vw = viewport width

화면의 폭에 몇퍼센트를 차지할건지 정하는 단위

3개의 이미지를 담는 div 박스는 300vw

각각의 이미지는 100vw로 만들기

넘치는 애들은 숨겨주세요

Carousel을 전부 싸매는 div에 overflow: hidden

애니메이션 구현하는 법

1. jQuery animate()
2. CSS transition
3. 자바스크립트 Trigger
4. 애니메이션 넣기

늘리거나 줄였을 때 웹페이지 반응이 느리면 background-image(URL)로 넣기

float가 이상하게 보이는 것은 transition문제

transform속성만 1초에 걸쳐서 변하게 해주세요

```jsx
.slide-container {
	width: 300vw;
	transition: transform 1s;
}
```

## Carousel (이미지 슬라이드) 직접만들기 2 : Next 버튼 만들기
position: absoulute; 쓰려면 상위요소에 position: relative;를 써야한다

Next 버튼을 누르면?

- 지금 사진1이 보이면 사진2를 보여줌
- 지금 사진2가 보이면 사진3을 보여줌

지금 몇 번째 사진을 보고있는지 저장용

사진 1을 보고있을 때 Next 버튼을 누르면..

1. 사진 2 보여주기
2. 지금 보이는 사진(변수)을 2로 바꾸기

현재 몇번째 사진을 보고있는지 변수로 저장하는 패턴

확장성 있는 코드로 다시 개발

```css
지금보이는사진 = 지금보이는사진 + 1;

```

지금 있는 변수에 1을 더해주세요

변수를 글자 사이에 넣으면?

‘글자’ + ‘글자’ = ‘글자글자’

‘글자’ + 1 = ‘글자1’

지금보이는사진 = 2 이면 -200vw 움직임 (아까 if 쓰던거랑 똑같이 동작함)

```jsx
var nowViewPicture = 1;

$('.slide-next').click(function() {
	$('.slide-container').css('transform', 'translateX(-' + nowViewPicture + '00vw)');
	nowViewPicture = nowViewPicture + 1;
}
```

지금보이는사진이 3이면 Next 버튼 기능 제한 (아니면 1을 더하지 말든가)

## 스크롤 애니메이션 : 스크롤시 변하는 Navbar 만들기
스크롤을 하면 메뉴가 작아지고 배경이 투명하다가 검정색으로 바뀌고 정렬되는 애니메이션 만들기

1. 시작화면 제작 : 투명한 Nav
2. 스크롤바를 내리면 불투명 Nav

```jsx
background-color: transparent; 배경 투명하게
position: fixed; 고정시키기
```

window → 보이는 div박스(viewport)

= viewport가 scroll 되었을 때... 코드를 실행해주세요

css 함수보다는 클래스를 부착하는 것이 더 좋은 방법이다

스크롤바를 내리자마자 동작하네? → 스크롤 ‘요만큼’ 내렸을 때 동작

스크롤바를 100px 내렸을 때 동작하게 하려면?

```jsx
$(window).scorollTop();
위에서부터 몇 px 스크롤되었는지 알려줌

if ($(window).scrollTop() > 100 ) {
	$('.nav-menu').addClass('nav-black');
}
```

## 탭기능 만들기
탭 버튼 기능 만들기

1. 버튼을 누르면 누른 느낌나게 디자인해주고
2. 해당하는 탭의 내용이 보임

tab-content에 다 display: none; 을 주고 show를 부착하면 원하는 내용을 보여줄 수 있음

active를 부착하면 버튼을 주황색으로 표시해줌

첫번째 버튼을 누르면 첫번째 버튼 하이라이트 + 첫째 내용을 보여주면 되겠군

JavaScript 파일 첨부

```html
<script src="tab.js"></script>
```

팁 : 뭐든 일단 하나만 먼저 개발하면 쉽다

- 첫째 버튼의 기능만 먼저 개발해보자

```jsx
// .eq()는 몇 번째 있는 클래스를 지정할 수 있는 함수
$('.tab-button').eq(0).click(function() {
	$('.tab-button').eq(0).addClass('active');
	$('.tab-content').eq(0).addClass('show');
});
```

1. 다른 버튼에 붙은 주황색 제거하는 기능 추가해야...
2. 다른 탭내용들 숨기는 기능도 추가해야

```jsx
$('.tab-button').eq(0).click(function() {
  $('tab-button').removeClass('active');
  $('tab-content').removeClass('show');
	$('.tab-button').eq(0).addClass('active');
	$('.tab-content').eq(0).addClass('show');
});

$('.tab-button').eq(1).click(function() {
  $('tab-button').removeClass('active');
  $('tab-content').removeClass('show');
	$('.tab-button').eq(1).addClass('active');
	$('.tab-content').eq(1).addClass('show');
});

$('.tab-button').eq(2).click(function() {
  $('tab-button').removeClass('active');
  $('tab-content').removeClass('show');
	$('.tab-button').eq(2).addClass('active');
	$('.tab-content').eq(2).addClass('show');
});

for (let i = 0; i < 3; i++) {
  $('.tab-button').eq(i).click(function() {
    $('tab-button').removeClass('active');
    $('tab-content').removeClass('show');
    $('.tab-button').eq(i).addClass('active');
    $('.tab-content').eq(i).addClass('show');
  });
}
```

코드가 유사해보임

코드를 반복해주는 반복문 사용

```jsx
for (var i = 0; i < 3; i++) {
	console.log('안녕')
}
```

{중괄호} 내의 코드를 3번 반복해주세요~~

for 반복문의 원리

반복문을 돌 때마다 i에 1을 더해주세요

i = 0 / 반복문 1회 실행 / i에 1을 더함

i = 1 / 반복문 1회 실행 / i에 1을 더함

i = 2 / 반복문 1회 실행 / i에 1을 더함

i = 3 / i < 3을 만족하지 않아서 멈춤

반복문에서는 var 말고 let을 쓰자

for 반복문 안에 이벤트리스너 안에 i 변수가 있으면 let으로 바꿔야 잘 동작한다

반복문을 써도 확장성있는 코드가 아직 아니다

탭 4개면 4라고 수정해야되기 때문

```jsx
for (let i = 0; i < 지금 html tab-button의 개수; i++) {
  $('.tab-button').eq(i).click(function() {
    $('tab-button').removeClass('active');
    $('tab-content').removeClass('show');
    $('.tab-button').eq(i).addClass('active');
    $('.tab-content').eq(i).addClass('show');
  });
}
```

## 이벤트 버블링과 이벤트 함수
기능을 하나 추가할 것임 : 배경을 누르고 모달창이 닫히는 기능

이벤트 버블링

이벤트가 상위요소로 퍼지는 현상 → 이메일 인풋을 클릭하면 밖에 있는 부모요소로 전부 퍼지는 현상(상위요소도 다 클릭했다고 인지함)

검은배경을 누르면 모달창이 닫히는 기능

```jsx
$('.black-background').click(function() {
  $('.black-background').hide();
});
// 모달창 내 다른 요소를 눌러도 닫히는 버그가 있다
```

코드를 잘 짜긴 잘 짰는데 이벤트 버블링 현상때메 그렇다 → 매우 자주 동작하기 때문에 그렇다

이벤트 버블링 때문에 모달창 내 다른 요소를 눌러도 닫힘

이벤트리스너 안에서 쓸 수 있는 이벤트 함수

```jsx
e.target; // 지금 실제로 클릭한 요소
e.currentTarget; // 지금 이벤트리스너가 달린 곳
$(this); // == e.currentTarget
e.preventDefault(); // 기본동작 막기
```

e.currentTarget == $(this)

console.log(e.target);

e.target은 <p></p> 같은 HTML 태그가 나와요

```jsx
$('.black-background').click(function(e) {
	if (e.target == e.currentTarget) {
		$('.black-background').hide();
	}
});
```

```jsx
$('.black-background').click(function(e) {
  // 만약, 지금 실제로 클릭한게 검은 배경일 때만 모달창을 닫아주세요

  if (e.target == $('.black-background')) {
    $('.black-background').hide();
  }
});
// black-background를 클릭해도 안 닫힌다
// 셀렉터로 찾은 것은 안됨
// e.target은 생 JS 문법이고 $()은 jQuery 문법 
```

위 두 코드는 약간 다르다

e.target과 jQuery Object는 다르다

자바스크립트는 자바스크립트로 찾은 것만 비교가 되고

제이쿼리는 제이쿼리로 찾은 것만 같다고 할 수 있음

```jsx
// 두 개가 똑같이 작동한다
$('.black-background').click(function() {
	if (e.target == this) {
		$('.black-background').hide();
	}
});

$('.black-background').click(function(e) {
	if (e.target == e.currentTarget) {
		$('.black-background').hide();
	}
});
```

이벤트 버블링이 일어나고 있는 것을 항상 신경쓰기

if, e.target 등으로 버블링 때문에 일어나는 버그 대처가능

## 탭기능 다시만들기 : 이벤트 버블링 응용과 dataset
함수로 축약할 때 확인해야할 점 → 함수안의 변수는 정의해주셈

```jsx
function openTap(num) {
  $('tab-button').removeClass('active');
  $('tab-content').removeClass('show');
  $('.tab-button').eq(num).addClass('active');
  $('.tab-content').eq(num).addClass('show');
}

for (let i = 0; i < $('.tab-button').length; i++) {
  $('.tab-button').eq(i).click(function() {
    openTap(i);
  });
}
```

이벤트리스너를 총 3개 사용했는데 1개 써도 가능

이벤트리스너 적게 사용하면 메모리 절약가능

<ul>에 이벤트리스너 달아서 탭기능 만들기

e.target을 쓰려면 함수에 파라미터 추가해주기

e.target출력하면 <어쩌구> 나옴

HTML에 몰래 정보심기

data-작명=”값”

```jsx
<div class="container mt-5">
	<ul class="list">
		<li id="product" class="tab-button" data-id="0">Products</li>
		<li class="tab-button active" data-id="1">Information</li>
		<li class="tab-button" data-id="2">Shipping</li>
	</ul>
```

```jsx
$('.list').click(function(e) {
  // 만약 내가 실제 누른 요소가 버튼 0이면 0번째 탭 열어주셈...
  if(e.target == document.querySelectorAll('.tab-button')[0]) {
    openTap(0);
  }
  if(e.target == document.querySelectorAll('.tab-button')[1]) {
    openTap(1);
  }
  if(e.target == document.querySelectorAll('.tab-button')[2]) {
    openTap(2);
  }
});

$('.list').click(function(e) {
	openTap(내가누른버튼에숨겨져있던숫자)
});
```

```jsx
$('.list').click(function(e) {
  if(e.target == document.querySelectorAll('.tab-button')) {
    openTap(e.target.dataset.id);
  }
});
```

정보 꺼내려면 HTML요소.dataset.작명

위에 있는 코드의 아이디에 적힌 숫자를 출력해준다

```jsx
$('list').data('id', '2');
```

jQuery문법으로 HTML에 몰래 정보저장하는 법

오늘의 교훈

1. 이벤트리스너 절약도 가능
2. HTML안에 몰래 정보저장 가능

## Array 와 Object 자료형 기초
자료형 정리

- 문자
- 숫자
- array
- object

array & object

- 여러가지 자료를 한 곳에 저장하고 싶을 때 사용

Array

- [대괄호]로 생성
- 자료들을 콤마로 구분
- [숫자]으로 자료 출력

```jsx
var array = ['BMW', 520];
console.log(array[1]);
```

Object

- {중괄호}로 생성
- 자료들을 콤마로 구분
- 자료 왼쪽에 이름써야함
- key : value 로 구성된다
- 마침표로 자료뽑음
- key는 자료의 이름일 뿐 실제 자료는 value이다
- 자료로 배열, 오브젝트도 들어갈 수 있다
- 오브젝트는 순서개념이 없다. 이름만 있음.

```jsx
var object = { brand : 'BMW', model : 520 };
console.log(object.brand);
```

array 내의 상품 데이터를 꺼내 HTML에 넣어보자 (데이터바인딩)

```jsx
<h4 id="title">상품제목</h4>
	<p id="text">상품내용</p>
	<div style="margin-bottom: 500px"></div>

// 배열 데이터바인딩
var array = ['BMW', 520];
document.getElementById('title').innerHTML = array[0];

// 오브젝트 데이터바인딩
var object = { brand : 'BMW', model : 520 };
document.getElementById('text').innerHTML = object.model;

// 배열 안에 오브젝트가 있을 경우
var data = [ {brand : 'BMW'}, {model : 520} ];
document.getElementById('text').innerHTML = data[1].model;
```

## 인터랙티브 form 만들기 : input과 change 이벤트
다이나믹한 form UI

셔츠를 고르면 셔츠 사이즈를 고르는 select 폼 보여주기

```html
<form class="container my-5">
	<div class="form-group">
		<p>상품선택</p>
			<select class="form-control" id="option1">
        <option>모자</option>
        <option>셔츠</option>
      </select>

		<p class="mt-4">사이즈선택</p>
			<select class="form-control" id="option1">
				<option>95</option>
        <option>100</option>
        <option>105</option>
      </select>
  </div>
</form>
```

간략한 form event 설명

input 값이 바뀔 때마다 이벤트가 발동된다

```jsx
$('어떤인풋').on('input', function() {
	
});

$('어떤인풋').on('change', function() {
	// select 값을 바꾸면 내부 코드를 실행해주세요	
});
```

<select>는 focus랑 상관없음

input 이벤트 : input 값이 바뀔 때

change 이벤트 : input 값이 바뀌고 focus 잃을 때

모자를 고르면 셔츠 사이즈를 고르는 select 폼 숨기기

```jsx
$('#option1').on('change', function() {
	// 만약에 사용자가 선택한 값이 셔츠인 경우에 밑에 UI를 보여줌
	if($('#option1').val() == '셔츠') {
		$('.size-select').show();
	} else {
		$('.size-select').hide();
});
```

## 인터랙티브 form 만들기 2 : HTML을 동적으로 생성하기
여태까지 했던 짓 → UI를 미리 만들어놓고 특정 상황에서 보여줌

지금 할짓 → HTML을 자바스크립트로 짜서 넣기

JavaScript로 HTML을 만들고 집어넣는 법 : 문자 자료형 안에 담으면 됩니다

신 자바스크립트 문법 `문자 자료형`은 내부에 엔터키 가능

셔츠를 선택하면 <option> 세개를 만들어서 집어넣음

```jsx
$('#option1').on('change', function() {
	// 만약에 사용자가 선택한 값이 셔츠인 경우에 밑에 UI를 보여줌
		if($('#option1').val() == '셔츠') {
			// 템플릿을 만들고
			$('#option2').html('');
      var template = `<option>95</option>
      <option>100</option>
      <option>105</option>`;
      $('#option2').append(template);
    } else if ($('#option1').val() == '바지'){
      $('#option2').html('');
      var template = `<option>28</option>
      <option>30</option>
      <option>32</option>`;
      $('#option2').append(template);
		}
});
```

```jsx
if ($('#option1').val() == '바지'){
	$('#option2').html('');
}
// option2에 있는 html을 전부 빈칸으로 만들어줘야 중복적으로 추가가 되지 않는다
```

## 인터랙티브 form 만들기 3 : forEach 반복문을 사용해보자
바지사이즈 <option>이 매우 많으면?

- 일단 데이터를 정리

```jsx
var size = [26, 28, 30, 32, 34, 36];
$('#option1').on('change', function() {
	if ($('#option1').val() == '바지') {
		for (var i = 0; i < 6; i++) {
			var template = `<option>26</option>`;
			$('#option2').append(template);
		}
	}
});
```

반복문으로 26, 28, 30 ... option을 생성하려면?

반복문이 돌 때 26, 28, 30 ... 이 되는 변수? 를 넣자

```jsx
var template = `<option>${변수}</option>`;
// 최신 자바스크립트 문법
```

```jsx
var size = [26, 28, 30, 32, 34, 36];

$('#option1').on('change', function() {
	if($('#option1').val() == '바지') {
		for (var i = 0; i < 6; i++) {
			var template = `<option>${size[i]}}</option>`;
			$('#option2').append(template);
		}
	}
});
```

일반 따옴표 중간에 변수 넣기 : ‘문자’ + 변수 + ‘문자’

array.forEach() 로 반복하기

```jsx
var size = [26, 28, 30, 32, 34, 36];

$('#option1').on('change', function() {
	if($('#option1').val() == '바지') {
		// 배열 안에 있는 요소를 반복해준다
		size.forEach(function(i) {
			// 왼쪽 array 자료 갯수만큼 반복해주셈. 6번 반복해줌.
			// i값은 사이즈 안에 있는 하나하나의 데이터
			var template = `<option>${i}</option>`;
			$('#option2').append(template);
		});
	}
});
```

왼쪽 array 자료 갯수만큼 반복해주셈

1. 반복문을 이용해 HTML 생성하기
2. forEach()로 반복하기

반복문의 용도

1. 그냥 코드 반복
2. [Array] {Object} 안에 있는 자료 출력