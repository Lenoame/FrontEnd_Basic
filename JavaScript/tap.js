// 버튼0(product)을 누르면...
// 0. 버튼0 버튼1 버튼2에 붙은 주황색 제거
// 0. 내용0 내용1 내용2를 안보이게
// 1. 버튼0이 주황색으로 하이라이트 되어야함
// 2. 내용0이 보여야함

// $('.tab-button').eq(0).click(function() {
//   $('tab-button').removeClass('active');
//   $('tab-content').removeClass('show');
// 	$('.tab-button').eq(0).addClass('active');
// 	$('.tab-content').eq(0).addClass('show');
// });

// $('.tab-button').eq(1).click(function() {
//   $('tab-button').removeClass('active');
//   $('tab-content').removeClass('show');
// 	$('.tab-button').eq(1).addClass('active');
// 	$('.tab-content').eq(1).addClass('show');
// });

// $('.tab-button').eq(2).click(function() {
//   $('tab-button').removeClass('active');
//   $('tab-content').removeClass('show');
// 	$('.tab-button').eq(2).addClass('active');
// 	$('.tab-content').eq(2).addClass('show');
// });

// 위 코드와 똑같이 동작한다
// let tabList = document.querySelectorAll('.tab-content .list li')

function openTap(num) {
  $('tab-button').removeClass('active');
  $('tab-content').removeClass('show');
  $('.tab-button').eq(num).addClass('active');
  $('.tab-content').eq(num).addClass('show');
}

// for (let i = 0; i < $('.tab-button').length; i++) {
//   $('.tab-button').eq(i).click(function() {
//     openTap(i);
//   });
// }

$('.list').click(function(e) {
  if(e.target == document.querySelectorAll('.tab-button')) {
    openTap(e.target.dataset.id);
  }
});

$('.black-background').click(function(e) {
  // 만약, 지금 실제로 클릭한게 검은 배경일 때만 모달창을 닫아주세요

  if (e.target == e.currentTarget) {
    $('.black-background').hide();
  }
});

// Array Object
var array = ['BMW', 520];
// console.log(array[1]);

var object = { brand : 'BMW', model : 520 };
// console.log(object.brand);

var data = [ {brand : 'BMW'}, {model : 520} ];

document.getElementById('title').innerHTML = array[0];
document.getElementById('text').innerHTML = data[1].model;

