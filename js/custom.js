/*global $ */

$(document).ready(function () {
    
    /* Navigation JS : Removes active class from current li and adds the active class to the new current li */
    $("li").click(function() {
         $("li.active").removeClass("active");
         $(this).addClass("active");  
    });
    
    
});
