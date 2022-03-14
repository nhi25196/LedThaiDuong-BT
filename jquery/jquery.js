// zoomsl;
$(function() {
    $(".example").imagezoomsl({

        // shows the magnifying glass container
        cursorshade: true,

        // cursor type
        magnifycursor: 'grab',

        // background color of the magnifying glass container
        cursorshadecolor: 'green',

        // opacity of the magnifying glass container
        cursorshadeopacity: 0.3,

        // border styles
        cursorshadeborder: '1px solid green',

        // z-index property
        zindex: '',

        // zoom step
        stepzoom: 0.5,

        // zoom range  
        zoomrange: [2, 2],

        // start zoom level
        zoomstart: 2,

        // disables the scrolling of the document with the mouse wheel when the cursor is over the image
        disablewheel: true

    });
});

//scroll to top
$(document).ready(function() {

    // hide #back-top first
    $("#back-top").hide();

    // fade in #back-top
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});