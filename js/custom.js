/*global $ */

$(document).ready(function () {
    /* Initialize the smooth scroll */
    smoothScroll.init({
        speed: 1000, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInCubic' // Easing pattern to use
    });
    /* Initialize WOW animations */
    new WOW().init();
    
    /* Navigation JS : Removes active class from current li and adds the active class to the new current li */
    $("li").click(function() {
         $("li.active").removeClass("active");
         $(this).addClass("active");  
    });
    
    $("#js-rotating").Morphext({
        animation: "flipInY",
        speed: 4000
    });
});
