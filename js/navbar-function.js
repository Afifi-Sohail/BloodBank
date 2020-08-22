// navbar function
$("nav ul li .nav-link,.contact-us ul li a,.carousel-item a").click(function(e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $("#" + $(this).data("scroll")).offset().top - 100
    }, 1000);
});