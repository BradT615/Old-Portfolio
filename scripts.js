document.cookie = "cookieName=cookieValue; SameSite=strict";
$(document).ready(function () {
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
});