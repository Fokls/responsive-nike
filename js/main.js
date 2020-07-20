$(window).scroll(function(){
    var scrl = $(window).scrollTop();
    if (scrl < 60) {
        $('.header-1').removeClass('fixedbar');
    }

    else{
        $('.header-1').addClass('fixedbar');
    }
});


var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n){
    showslides(slideIndex += n);
}