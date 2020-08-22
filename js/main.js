$(function() {
    // nav slide
    $("nav .navbar-toggler").click(function() {
        $("nav .collapse").slideToggle();
    });

    // add activ class on navbar link
    $("nav ul li .nav-link").click(function() {
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
    });

    // calculate section padding on navpar height
    $(".padding-nav-top").css("paddingTop", $(".up").innerHeight());

    // create owl carousel

    $(".services-carousel").owlCarousel({
        loop: true,
        rtl: true,
        nav: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            650: {
                items: 2,
            },
            1000: {
                items: 3,
                nav: true
            }
        }
    });
});