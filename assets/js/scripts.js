$(document).ready(function(){
    $(window).scroll(function() {    
        // let top = $(this).offset().top;
        let top = $(window).scrollTop();
        if(top >= 90){
            $("#menu").addClass("bg-secondary-100").addClass("shadow-md");
        }else{
            $("#menu").removeClass("bg-secondary-100").removeClass("shadow-md");
        }
    });
});

