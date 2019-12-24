
//input mask

$('.phoneidcl').inputmask('+380(99) 999-99-99',{ "oncomplete": function(){
        $(".disbutt").prop("disabled", false);
    }, "onincomplete": function(){ $(".disbutt").prop("disabled", true); } });

//modal window

$(document).ready(function() {
    $('.popup-link').magnificPopup();
});

//mobile menu (header)

$(function(){
    $('.toggle-menu').on('click',function(){
        $('.mobile-menu').toggleClass('show');
        $( ".toggle-menu" ).toggleClass( "menu-on");
    });
});

$(document).ready(function() {
    $('.mobile-menu').click(function () {
        $('.mobile-menu').removeClass('show');
        $('.toggle-menu').removeClass('menu-on');
    });

    $(document).ready(function() {
        $('.nav-link-new').click(function () {
            $('.mobile-menu').removeClass('show');
            $('.toggle-menu').removeClass('menu-on');
        });

        $('.cls').click(function () {
            $('.mobile-menu').removeClass('show');
            $('.toggle-menu').removeClass('menu-on');
        });
    });
});



//slider for "office"

$('.office-slider').slick({
    dots: false,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
    infinite: true,
});

//slider for "soffits"

$('.soffits-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
    responsive: [
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 3,
            }
        },

        {
            breakpoint: 701,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 577,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },

        {
            breakpoint: 371,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }
    ]
});

//slider for "reviews"

$('.reviews-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 2
            }
        },

        {
            breakpoint: 585,
            settings: {
                slidesToShow: 1
            }
        },
    ]
});

//slider for "certificates"

$('.certificates-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    centerMode: true,
    centerPadding: '0px',
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
    responsive: [
        {
            breakpoint: 993,
            settings: {
                centerPadding: '0px',
                slidesToShow: 3,
            }
        },

        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2
            }
        },

        {
            breakpoint: 577,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },

        {
            breakpoint: 420,
            // centerMode: false,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }
    ]
});

//scroll

$('.nav-link-new').mPageScroll2id();

//video popup

// $(document).ready(function() {
//     $('.popup-youtube').magnificPopup({
//         // disableOn: 700,
//         type: 'iframe',
//         mainClass: 'mfp-fade',
//         removalDelay: 160,
//         preloader: false,
//
//         fixedContentPos: false
//     });
// });



