
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

    //var firstSlide = $('.img-box .slide').first();

    //var firstSlide = $('.img-box .slide:first-child');

    var b1 =$('.b1 .img-box .slide').first();
    var b2 =$('.b2 .img-box .slide').first();
    var b3 =$('.b3 .img-box .slide').first();



    //2번 슬라이드
    //var nextSlide = firstSlide.next();

    var nextSlide1 = b1.next();
    var nextSlide2 = b2.next();
    var nextSlide3 = b3.next();

    //세개 넣어보세요



    nextSlide1.hide().addClass('active').fadeIn(800, function () {
       

        //1번 슬라이드를 맨뒤로 이동!
        //$('.slide').append(firstSlide);
        //$('.img-box').append(firstSlide);

        $('.b1 .img-box').append(b1);

        //첫 번째 슬라이드의 z-index 제거!
        //firstSlide.removeClass('active');

        b1.removeClass('active');
    });


    nextSlide2.hide().addClass('active').fadeIn(800,function(){

        $('.b2 .img-box').append(b2);

        b2.removeClass('active');
    });


    nextSlide3.hide().addClass('active').fadeIn(800,function(){

        $('.b3 .img-box').append(b3);

        b3.removeClass('active');
    });



}
