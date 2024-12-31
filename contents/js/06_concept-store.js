
$(document).ready(function () {

    var autoCall; 
    autoCall = setInterval(fadeSlide, 3000);

    $('.img-box').mouseover(function () {
        
        clearInterval(autoCall);
    }).mouseout(function () {
        
        autoCall = setInterval(fadeSlide, 3000);
    });

});

//fadeSlide 함수 만들기
function fadeSlide() {
    //1번 슬라이드
    var firstSlide = $('.img-box .slide').first();

    //2번 슬라이드
    var nextSlide = firstSlide.next();

    nextSlide.hide().addClass('active').fadeIn(800, function () {
       
        //1번 슬라이드를 맨뒤로 이동!

        $('.img-box').append(firstSlide);

        //첫 번째 슬라이드의 z-index 제거!
        firstSlide.removeClass('active');
    });

}
