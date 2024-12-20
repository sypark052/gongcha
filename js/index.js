//header .nav-js

$(document).ready(function(){
    $('.gnb > li').hover(function(){

        $(this).find('.lnb').stop().fadeIn();
    }, function(){

        $('.lnb').stop().fadeOut();
    });
});

//index article .new-js

$(document).ready(function(){
    $('.new-list ul li:last').prependTo('.new-list ul');

    var liw = $('.new-list ul li').width();
    console.log('li 하나의 크기:' + liw);

    $('.new-list ul').css('margin-left',-liw);

    //다음 버튼 클릭
    $('.next a').click(function(e){
        e.preventDefault();// a태그 기본기능 막기

        $('.new-list ul').animate({
            marginLeft: '-=' + liw
        },800,function(){

            $('.new-list ul li').first().appendTo('.new-list ul');
            $('.new-list ul').css('margin-left',-liw);
        });      
    });

    //이전 버튼 클릭
    $('.prev').click(function(e){
        e.preventDefault();

        $('.new-list ul').animate({
            marginLeft: '+=' + liw
        },800,function(){

            $('.new-list ul li:last').prependTo('.new-list ul');
            $('.new-list ul').css('margin-left',-liw);
        });

    });
    
});

//index article .best-menu-js

$(function(){
    $('.tea3 .caption').css('display','block');

    $('.btn-prev a').click(function(e){
        e.preventDefault();

        slide(0);   
        change();                         
    });

    $('.btn-next a').click(function(e){
        e.preventDefault();

        slide(1);
        change();                    
    });
});

//캡션변경 함수
function change() {
    $('.tea3').find('.caption').delay(300).fadeIn(600).end().siblings().find('.caption').
    fadeOut(600);
}

//슬라이드 함수
var stat = 0;

function slide(direction) {

    if (stat === 1) return false;
    stat = 1;

    if(direction) {
        //alert('다음음료');
        $('.viewer li').first().insertAfter($('.viewer li').last());
    } else {
        //alert('이전음료');
        $('.viewer li').last().insertBefore($('.viewer li').first());
    }

    var viewer = document.querySelector('.viewer');
    var box = viewer.querySelectorAll('li');

    console.log(box);
    for (var i = 0; i < box.length; i++) {
        //클래스 재부여!
        box[i].setAttribute('class', 'tea' + (i + 1));
    }

    setTimeout(function () {
        stat = 0;
    }, 500);

}



