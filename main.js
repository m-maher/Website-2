
//Button Up

$(document).ready(function(){
    $("#btnUp").click(function(){
        $("body").animate({scrollTop:'0'},1000);        
    })
})


// Loading

$(document).ready(function(){
$("body").css("overflow","hidden");
  $("#loading .spinner").fadeOut(2000,function(){
    $("#loading").fadeOut(1000,function(){
      $("body").css("overflow","auto");
    })
  })
})

// Navbar

$(window).scroll(function(){
    
    var windowScroll = $(window).scrollTop();

    if(windowScroll > 200){
        $(".navbar").css('backgroundColor','#fff').
        css('border','none').css('padding','10px').
        css('box-shadow','3px 3px 10px #888888');
        $(".navbar a").css('color','#000'); 
        $(".navbar img").attr('src','images/logo-dark.png');
        $(".navbar-nav a i").css('color','#000'); 
        $("#btnUp").css("display","block");       
    }
    else{
        $(".navbar").css("backgroundColor","transparent").
        css('border-bottom','solid 1px #868e96').
        css('padding','20px').css('box-shadow','none');   
        $(".navbar a").css('color','#fff'); 
        $(".navbar img").attr('src','images/logo-light.png');               
        $(".navbar-nav a i").css('color','#fff');
        $("#btnUp").css("display","none");
    }
})

$(".navbar-toggler").click(function(){
    $(".navbar").css('backgroundColor', 'rgb(255,255,255)');
    $(".navbar a").css('color','#000'); 
    $(".navbar img").attr('src','images/logo-dark.png');
})

//Navbar links

$(".navbar li a").click(function(){

    var h = $(this).attr("href")  ;
    var off = $(h).offset().top;
    $("body,html").animate({scrollTop:off},1000)  
   
})

//Home

$(document).ready(function(){
    $(".slider").slick({
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false
    });
});

$('.next').click(function(){
    $(".slider").slick('slickNext');
});

$('.prev').click(function(){
    $(".slider").slick('slickPrev');
});

//Counter

$(window).scroll(startCounter);
    function startCounter() {
        if ($(window).scrollTop() > 3700) {
                $(window).off("scroll", startCounter);
            $('.Count').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }
    }

// Google Map

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

// WOW js

new WOW().init();

// Typed js

var typed = new Typed(".element", {
    strings: ["","websites","apps","softwares"],
    smartBackspace: true ,
    typeSpeed:50,
    loop:true
});

