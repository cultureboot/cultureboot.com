$(window).load(function () {

    "use strict";

    //------------------------------------------------------------------------
    //						PRELOADER SCRIPT
    //------------------------------------------------------------------------
    $('#preloader').delay(400).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('#preloader .loading-data').fadeOut(); // will first fade out the loading animation


    //------------------------------------------------------------------------
    //						NORMALIZE CAROUSEL HEIGHTS
    //------------------------------------------------------------------------
    $('#carousel-full-header .item').carouselHeights();
    $('#carousel-testimonials .item').carouselHeights();

    //------------------------------------------------------------------------
    //						NAVBAR SLIDE SCRIPT
    //------------------------------------------------------------------------
    $(window).scroll(function () {
        if ($(window).scrollTop() > $("nav").height()) {
            $("nav.navbar-slide").addClass("show-menu");
        } else {
            $("nav.navbar-slide").removeClass("show-menu");
            $(".navbar-slide .navMenuCollapse").collapse({
                toggle: false
            });
            $(".navbar-slide .navMenuCollapse").collapse("hide");
            $(".navbar-slide .navbar-toggle").addClass("collapsed");
        }
    });


    //------------------------------------------------------------------------
    //						NAVBAR HIDE ON CLICK (COLLAPSED) SCRIPT
    //------------------------------------------------------------------------
    $('.nav a').on('click', function () {
        if ($('.navbar-toggle').css('display') != 'none') {
            $(".navbar-toggle").click()
        }
    });

})




$(document).ready(function () {

    "use strict";



    //------------------------------------------------------------------------
    //						ANCHOR SMOOTHSCROLL SETTINGS
    //------------------------------------------------------------------------
    $('a.goto, .navbar .nav a').smoothScroll({
        speed: 1200
    });




    //------------------------------------------------------------------------
    //						FULL HEIGHT SECTION SCRIPT
    //------------------------------------------------------------------------
    $(".screen-height").css("min-height", $(window).height());
    $(window).resize(function () {
        $(".screen-height").css("min-height", $(window).height());
    });




    //------------------------------------------------------------------------
    //                    MAGNIFIC POPUP(LIGHTBOX) SETTINGS
    //------------------------------------------------------------------------
    // $('.portfolio-list li').magnificPopup({
    //     delegate: 'a:not(.btn, .link-item)',
    //     type: 'image',
    //     gallery: {
    //         enabled: true
    //     }
    // });




    //------------------------------------------------------------------------------------------
    //                     INITIALIZATION WOW.JS
    //------------------------------------------------------------------------------------------
    var wow = new WOW();
    wow.init();





    //------------------------------------------------------------------------------------
    //								CONTACT FORM SCRIPT
    //------------------------------------------------------------------------------------

    $('#contact_form').submit(function () {
        // submit the form
        if ($(this).valid()) {
            //$('#contact_submit').button('loading');
            var href ="mailto:info@cultureboot.com";
            href += '?subject=Contact from cultureboot.com';
            href += "&body=Hi,%0D%0A%0D%0A I'm " + $('#contact_name').val() + " (" + $('#contact_email').val() + ") and I'd like to ask you a few questions about CultureBoot.%0D%0A%0D%0A" + $('#contact_message').val();
            window.location.href = href;
        }
        return false;
    });
});

//------------------------------------------------------------------------
//						NORMALIZE CAROUSEL HEIGHTS FUNCTION
//------------------------------------------------------------------------
$.fn.carouselHeights = function () {

    var items = $(this), //grab all slides
        heights = [], //create empty array to store height values
        tallest; //create variable to make note of the tallest slide

    var normalizeHeights = function () {

        items.each(function () { //add heights to array
            heights.push($(this).height());
        });
        tallest = Math.max.apply(null, heights); //cache largest value
        items.each(function () {
            $(this).css('min-height', tallest + 'px');
        });
    };

    normalizeHeights();

    $(window).on('resize orientationchange', function () {
        //reset vars
        tallest = 0;
        heights.length = 0;

        items.each(function () {
            $(this).css('min-height', '0'); //reset min-height
        });
        normalizeHeights(); //run it again
    });

};
