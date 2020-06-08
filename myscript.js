// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();


$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    console.log("Scroll : ");
    console.log(st);
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
    {
        console.log("math abs less than delta");
        return;
    }
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        console.log("scrolled down and are past the navbar");
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        console.log("scroll up");
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}