$(document).ready(function(){
    $(window).scroll(function() {    
        let top = $(window).scrollTop();
        if(top >= 50){
            $("#menu").css({
                backgroundColor: "rgba(254, 245, 237, 1)", //bg-secondary-100
                boxShadow:"6px 6px 20px rgba(0, 0, 0, 0.1)",
                transition: "0.3s"
            });
        }else{
            $("#menu").css({
                backgroundColor: "rgba(255, 255, 255, 1)",
                boxShadow:"none",
                transition: "0.3s"
            });
        }
    });
});

// Slider for testimonial
$(document).ready(function() {
    // $(' owl-theme').addClass('owl-theme');
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 1500,
        responsive:{
            0:{
                items:1
            },
            900:{
                items:1
            },
            1300:{
                items:2
            },
            1600:{
                items:2
            }
        }
    })
});