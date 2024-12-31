
$(document).ready(function(){
            
    $('.tab-menu a').click(function(e){
        e.preventDefault();

        
     $('.txt-box').hide();
     $('.txt-box').delay(400).fadeIn(800);

     $('.img-box').fadeIn(1000);

        var aHref = $(this).attr('href');
        console.log(aHref);

        $(this).parent().addClass('on').siblings().
        removeClass('on');

        $(aHref).addClass('on').siblings().removeClass('on');

    });

});