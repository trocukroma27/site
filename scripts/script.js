$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
function slowScroll(id){
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
    var offset = 50;
    $('html, body').animate({
        scrollTop: $(id).offset().top - offset
    }, 500);
    return false
}
