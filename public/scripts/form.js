$('.cost-button').click(function(e) {
    e.preventDefault();
    $('.form-fill-out').fadeIn(10);
    $('html').addClass('no-scroll');
});

$('.fill-out-button').click(function(e) {
    e.preventDefault();
    $('.form-fill-out').fadeOut(1);
    $('.OK').fadeIn(10);
});

$('.cross').click(function(e) {
    e.preventDefault();
    $('.OK').fadeOut(10);
    $('html').removeClass('no-scroll');
});
