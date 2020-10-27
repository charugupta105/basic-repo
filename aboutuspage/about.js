'use strict';

$(document).ready(function () {
    $(window).bind('scroll', function (e) {
        parallaxScroll();
    });
});

function parallaxScroll() {
    const scrolled = $(window).scrollTop();
    $('.d1').css('top', (350 - (scrolled * .5)) + 'px');
    $('.d3').css('top', (400 - (scrolled * .5)) + 'px');
    $('.d4').css('top', (0 - (scrolled * .5)) + 'px');
    $('.d6').css('top', (0 - (scrolled * .5)) + 'px');
    $('.video').css('top', (0 - (scrolled * .5)) + 'px');
}
// $('#scene').parallax();