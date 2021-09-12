$("#preload").animate({left: 0},1500,function(){
    $("#loading-area").hide(100);
    $("#left-side").animate({ left: '-50%' }, 1000);
    $("#right-side").animate({right: '-50%'},1000,function(){
    $("#preload").hide()
    })
})

$(document).ready(function () {
    $('.menu').click(function () {
        $('.mobile-menu').toggleClass('active-menu');
//  if($('.mobile-menu').hasClass('active-menu')){
//      $(this).toggle()
//  }
$(this).toggle()
    })
    $('.close').click(function () {
        $('.mobile-menu').toggleClass('active-menu');
        $('.menu').toggle()
    })


    
    $('.menu').css('background', 'none');
    $('.scroll-top').css('opacity','0')

    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $('.menu').css('background','black')
        }  else {
          $('.menu').css('background','none')
        }

        if ($(window).scrollTop() >( $('.main').height()- 200)) {
            $('.scroll-top').css('opacity','1')
        }
        else {
            $('.scroll-top').css('opacity','0')
            
        }
    })





$('#owl1, .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        425:{
            items:2
        },
        600:{
            items:3
        },
       768:{
            items:4
        },
        991.98:{
            items:6
        }
    }
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.count').each(function(){
$(this).prop("Counter",0).animate(
    {
        Counter:$(this).attr("data-finish"),
    },
    {
        duration:Number($(this).attr("data-time")),
        easing:"linear",
        step:function(now){
            $(this).text(Math.ceil(now));
        },
    }
)
})

})