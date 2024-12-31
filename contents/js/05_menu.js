$(document).ready(function (){
    $('.tab-menu a').click(function (e) {
        e.preventDefault();


        var aHref = $(this).attr('href');
        console.log(aHref);

        $(this).parent().addClass('on').siblings().removeClass('on');

        $(aHref).addClass('on').siblings().removeClass('on');

    });
});