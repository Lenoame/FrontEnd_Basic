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
for (let i = 0; i < 3; i++) {
  $('.tab-button').eq(i).click(function() {
    $('tab-button').removeClass('active');
    $('tab-content').removeClass('show');
    $('.tab-button').eq(i).addClass('active');
    $('.tab-content').eq(i).addClass('show');
  });
}
