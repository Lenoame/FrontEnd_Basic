// Q. 대학교 신입생인 철수는 369게임을 더럽게 못합니다. 

// (여기서의 369게임은 '3의 배수에서' 박수를 치면 게임입니다)

// 철수는 이 숫자가 3의 배수인지 아닌지 파악하기 넘나 힘든 관계로

// 프로그래밍으로 이 문제를 해결하려고 합니다. 

// 어떤 숫자를 함수 안에 집어넣으면 박수를 쳐야할 지 말아야할 지 판단해주는 함수를 만들려고 하는데

// 어떻게 함수를 만들어야할까요?

// (힌트 : 자바스크립트엔 % 라는 연산자가 있습니다. 용도는 안알랴줌)

// 실행결과 예시 : 

// 삼육구게임(6); 이라고 쓰면 콘솔창에 '박수'라는 글자가 떠야합니다.

// 삼육구게임(11); 이라고 쓰면 콘솔창에 '통과'라는 글자가 떠야합니다.

function game369(num) {
  if (num % 3 == 0) {
    console.log('박수');
  } else {
    console.log('통과')
  }
}

// Q2. 하지만 어림도없이 369게임 업그레이드 버전이 등장했습니다. 

// 369게임 업그레이드 버전은 3의 배수에서 박수를 치는건 맞지만 

// 9의 배수에서는 박수를 두번 쳐야합니다. 

// 역시나 이것도 프로그래밍으로 이 문제를 해결하려고 합니다. 

// 아까 만들었던 369게임() 함수를 어떻게 고치면 될까요? 

// 실행결과 예시 : 

// 삼육구게임(6); 이라고 쓰면 콘솔창에 '박수'라는 글자가 떠야합니다.

// 삼육구게임(11); 이라고 쓰면 콘솔창에 '통과'라는 글자가 떠야합니다.

// 삼육구게임(18); 이라고 쓰면 콘솔창에 '박수x2'라는 글자가 떠야합니다.

function upgrade369game(num) {
  if (num % 9 == 0) {
    console.log('박수x2')
  } else if (num % 3 == 0) {
    console.log('박수')
  } else {
    console.log('통과')
  }
}

// Q. 이자율 계산하기 

// 민준쿤은 은행에 예금을 하러 갔는데 예금 금액에 따라 이율이 달라지는 것을 보고 크게 당황했습니다. 

// 예금액이 5만원 미만이면 이율이 연 15퍼센트,

// 예금액이 5만원 이상이면 이율이 연 20퍼센트라고 합니다. 

// (실은 높은 이율에 당황했습니다)

// 그래서 민준이는 2년 후의 예금액을 자동으로 계산해주는 기계를 자바스크립트로 만들려고하는데 어떻게 코드를 짜면 될까요? 

var deposit = 60000;
var futureDeposit = 0;
var years = 2;

if (deposit < 50000) {
  futureDeposit = deposit * (1.15 ** years);
} else if (deposit >= 50000) {
  futureDeposit = deposit * (1.2 ** years);
}

console.log(futureDeposit);

// Q. 커피 리필을 이상하게 해주는 곳이 있습니다. 최대한 마실 수 있는 커피양을 계산해봅시다.  

// 방금 마신 커피의 3분의 2만 리필해주는 카페가 있습니다. 

// 예를 들면 처음 커피를 90ml 주문하면 첫 리필은 60ml를 해주며, 그 다음 리필은 40ml를 해주는 카페입니다. 

// 횟수제한도 있습니다. 총 2회 리필이 가능합니다.

// 그럼 처음 주문한 커피 양에 따라서 최대한 마실 수 있는 커피를 콘솔창에 계산해주는 코드를 작성해봅시다. 

var firstCoffee = 360;
var drankCoffee = 0;

var refillCoffee = firstCoffee * 2/3; 
drankCoffee = firstCoffee + refillCoffee;

refillCoffee = refillCoffee * 2/3;
drankCoffee = drankCoffee + refillCoffee;

console.log(drankCoffee);


// **Q. Array에서 철수라는 자료를 찾고 싶습니다. (검색 알고리즘)**

// 출석부에 4명의 학생 이름이 들어가있습니다.

// 마음같아선 100개의 이름을 여기에 넣고 싶었지만 4개만 넣었습니다.

// 이 출석부라는 Array에서 내가 원하는 이름이 있는지 없는지 알려주는 함수를 하나 만들고 싶어졌습니다.

// 함수 안에 구멍(파라미터)로 이름을 집어넣으면 그 이름이 출석부에 있는지 없는지 콘솔창에 알려주어야합니다.

// 어떻게 만들면 될까요?

// **(제한조건) 어디서 찾아온 find, indexOf 이런 함수들 사용 금지**

// **실행결과 예시 :**

// 이름찾기('철수'); 라고 쓰면 콘솔창에 '있어요'라는 글자가 떠야합니다.

// 이름찾기('명수'); 라고 쓰면 콘솔창에 아무 글자도 뜨지 않아야합니다.

// 빨리 이름찾기라는 함수를 만들어봅시다.

var 출석부 = ['흥민', '영희', '철수', '재석'];

function find_Name(name) {
	for(var i = 0; i < 출석부.length; i++) {
		if(name == 출석부(i)) {
			console.log('있어요');
		}
	}
}

find_Name('철수');



// **Q. 갑자기 구구단을 콘솔창에 출력하고 싶습니다.**

// 초등학생인 철수는 구구단을 외우기 넘나 힘든 관계로

// 자바스크립트를 이용해 콘솔창에 2단부터 9단까지 출력해주는 코드를 짜기로 합니다.

// 2 x 2 = 4 뭐 이런식으로 출력되게하면 예쁘겠지만 귀찮은 관계로

// 4라는 곱셈 결과만 출력해주기로 합니다.

// **콘솔창 출력결과 :**

// 2

// 4

// 6

// 8

// 10

// ...

// 3

// 6

// 9

// 12

// 15

// ...

// 이렇게 차례로 2단, 3단... 그리고 9단의 마지막 81 까지... 결과만 출력되게 만들고 싶습니다.

// 어떻게 자바스크립트 코드를 짜면 될까요?

for(var i = 1; i < 10; i++) {
	for(var j = 1; i < 10; j++) {
		console.log(i * j);
	}
}



// **Q. 하반기 실적을 채우기 위해 영업직원을 갈궈야합니다.**

// 당신은 영업부서 부장님입니다.

// 부장님은 관리하는 영업직 직원들의 **7~11월** 판매 실적이 처참한 나머지

// 마지막 **12월에는 남은 하반기 실적을 다 채우기 위해** 직원들을 갈구기로 했습니다.

// 하지만 직원마다 목표실적이 다 다르고, 7~11월 판매 실적이 다 다르기 때문에... 고민끝에

// **(1) 7~11월 실적**과 **(2) 평균 월 목표 판매량**을 입력하면 개인의 12월 목표 실적을 계산해주는 프로그램(함수)을 만들기로 합니다. 어떻게 만들면 될까요?

// (여기서의 평균은 7~12월 6개월간의 평균으로 합시다)

// **조건 :**

// 함수의 첫 파라미터 자리엔 7~11월의 (5개월 간의) **판매실적어레이** (뭐 대충 [12, 5, 3, 6, 25] 이런 array)

// 둘째 파라미터 자리엔 이 직원이 **목표로하고 있는 평균 월별 판매량**이 들어가야합니다. (대충 30 이런거)

// 그리고 연산 결과(마지막 12월에 채워야할 목표실적)를 콘솔창에 출력해주어야합니다.

// **이해 안될 때 한번 살펴보는 실행 예시:**

// 철수라는 직원의 목표 판매 실적은 월 평균 35개 입니다.

// 그런데 7~11월의 실적은 [10, 20, 30, 40, 50] 이라고 합니다.

// ```jsx
// 목표량계산기( [10, 20, 30, 40, 50] , 35 )
// ```

// 그래서 이렇게 목표량계산기안에 집어넣었을 경우

// "12월엔 60개를 팔아야합니다" 라는 말이 콘솔창에 출력되어야합니다.

// (12월에 60개를 팔아야 7~12월 평균 월별 판매량이 60이 되니까요)

// 흥민이라는 직원의 목표 판매 실적은 월 평균 10개 입니다.

// 그런데 7~11월의 실적은 [11, 6, 2, 3, 5] 입니다.

// ```jsx
// 목표량계산기( [11, 6, 2, 3, 5] , 10 )
// ```

// 그러니 이렇게 목표량계산기안에 집어넣었을 경우

// "12월엔 33개를 팔아야합니다" 라는 말이 콘솔창에 출력되어야합니다.

// (12월에 33개를 팔아야 7~12월 평균 월별 판매량이 10이 되니까요)


function 목표량계산기(판매실적어레이, 평균월별판매량) {
	var sum = 0;

	for(var i = 0; i < 5; i++) {
		sum += 판매실적어레이[i];
	}

	var result = 평균월별판매량 * 6 - sum ;
	console.log(result);
}