$(document).ready(function(){
    $(window).scroll(function() {    
        let top = $(window).scrollTop();
        if(top >= 90){
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
