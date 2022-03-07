$(function(){
    $(window).on("scroll", function(){
        if ($(window).scrollTop() > 100){
            $(".navBar").addClass("navBarSecond");
        } else {
            $(".navBar").removeClass("navBarSecond")
        }
    })
})