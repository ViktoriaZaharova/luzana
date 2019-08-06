$(function () {

    $('.search .input-group-btn').click(function () {
        $('.search').animate({
            width: '285px'
        }, 500);
        $('.search label input').animate({
            paddingLeft: '16px'
        }, 500);
        $('.search label .btn-close').animate({
            opacity: '1'
        }, 500);
        $('.search .input-group-btn .btn').animate({
            opacity: '1'
        }, 500);
    });

    $('.search label .btn-close').click(function () {
        $('.search').animate({
            width: '0px'
        }, 500);
        $('.search label input').animate({
            paddingLeft: '0px'
        }, 500);
        $('.search label .btn-close').animate({
            opacity: '0'
        }, 500);
        $('.search .input-group-btn .btn').animate({
            opacity: '0'
        }, 500);
    });


    $('#slider').owlCarousel({
        // autoplay: true,
        loop: true,
        items: 1,
        smartSpeed: 700,
        navText: ['<img src="img/arrows-right.png">', '<img src="img/arrows-right.png">'],
        dots: false,
        nav: true,
        startPosition: 'URLHash',
        URLhashListener: true
    });


    $('.blog-carousel').owlCarousel({
        // autoplay: true,
        loop: true,
        items: 6,
        smartSpeed: 700,
        navText: ['<img src="img/arrows-right.png">', '<img src="img/arrows-right.png">'],
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1320: {
                items: 4
            },
            1620: {
                items: 5
            },
            1900: {
                items: 6
            }
        }
    });

    var swiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        slidesPerGroup: 1,
        spaceBetween: 20,
        centeredSlides: true,
        initialSlide: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1199: {
                direction: 'horizontal',
                slidesPerView: 5,
                spaceBetween: 0
            },
            500: {
                direction: 'horizontal',
                slidesPerView: 3,
                spaceBetween: 0
            }
        }

    });



    $('.image-zoom').loupe({
        width: 170,
        height: 170,
        loupe: 'loupe',
        margin: 0
    });


    $('.adv-item-right .adv-item-text').css('height', '').equalHeights();
    $('.blog-min-items .block-text h6').css('height', '').equalHeights();

    // filter
    $('.controls .filter').click(function (e) {

        var value = $(this).attr('data-filter');

        if (value == 'cart-news') {
            $('.blog-carousel .carousel-item').show('500');

        } else {
            $('.blog-carousel .carousel-item').not("." + value).hide('500');
            $('.blog-carousel .carousel-item').filter("." + value).show('500');
        }
        return false;

    });

    $('.bookmarks > .icon-bookmarks').tooltip();
    $('.comparison > .icon-comparison').tooltip();

    $('#accordion .panel-heading').click(function () {
        $(this).toggleClass('in').next().slideToggle().parents("#accordion .panel").addClass("active-panel");
        $('#accordion .panel-heading').not(this).removeClass('in').next().slideUp().parents("#accordion .panel").removeClass("active-panel");
    });

    $('.sidebar-menu .btn-sidebar').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        // $('.sidebar-menu .btn-sidebar').not(this).removeClass('in').next().slideUp();
      });

    $('.sidebar-menu .dropdown-menu .drop-menu2').click(function () {
        $(this).toggleClass('in').find('.menu-hover-list2').slideToggle();
        // $('.sidebar-menu .btn-sidebar').not(this).removeClass('in').next().slideUp();
    });

    $('.filter-menu-title').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        // $('.sidebar-menu .btn-sidebar').not(this).removeClass('in').next().slideUp();
    });

    $('.slider-range').slider({
        range: true,
        min: 0,
        max: 12500,
        values: [ 0, 0 ],
        classes: {
            "ui-slider-handle": "ui-corner-all"
        },
        slide: function (event, ui) {
            //Поле минимального значения
            $(".dec1").val(ui.values[0]);
            //Поле максимального значения
            $(".dec2").val(ui.values[1]);
        }
    });

    $(".dec1").val($(".slider-range").slider("value"));
    $(".dec2").val($(".slider-range").slider("value"));


    $("#menu").mmenu({
        "extensions": [
            "position-front",
            "pagedim-black",
            "multiline"
        ],
        backButton: {
            close: true
        },
        navbar: {
            title: false
        },
        "navbars": [
            {
                "position": "top",
                "content": [
                    "close",
                    ".mobile-header"
                ]
            }
        ]
    });


});

// button top
$("body").on("click", ".btn-top", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});


// mobile carousel
function postsCarousel() {
    var checkWidth = $(window).width();
    var owlPost = $(".collage-carousel");
    if (checkWidth > 768) {
        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }
        owlPost.removeClass('owl-carousel');
    } else if (checkWidth < 768) {
        owlPost.addClass('owl-carousel');
        owlPost.owlCarousel({
            items: 1,
            slideSpeed: 700,
            dots: false,
            loop: true,
            nav: true,
            navText: ['<img src="img/arrows-right.png">', '<img src="img/arrows-right.png">']
        });
    }
}

postsCarousel();
$(window).resize(postsCarousel);


function postsCarousel2() {
    var checkWidth2 = $(window).width();
    var owlPost2 = $(".controls");
    if (checkWidth2 > 768) {
        if (typeof owlPost2.data('owl.carousel') != 'undefined') {
            owlPost2.data('owl.carousel').destroy();
        }
        owlPost2.removeClass('owl-carousel');
    } else if (checkWidth2 < 768) {
        owlPost2.addClass('owl-carousel');
        owlPost2.owlCarousel({
            items: 1,
            slideSpeed: 700,
            dots: false,
            loop: true,
            nav: true,
            navText: ['<img src="img/arrows-mobile.png">', '<img src="img/arrows-mobile.png">']
        });
    }
}

postsCarousel2();
$(window).resize(postsCarousel2);

function postsCarousel3() {
    var checkWidth3 = $(window).width();
    var owlPost3 = $(".latest-blog-wrapper");
    if (checkWidth3 > 768) {
        if (typeof owlPost3.data('owl.carousel') != 'undefined') {
            owlPost3.data('owl.carousel').destroy();
        }
        owlPost3.removeClass('owl-carousel');
    } else if (checkWidth3 < 768) {
        owlPost3.addClass('owl-carousel');
        owlPost3.owlCarousel({
            items: 1,
            slideSpeed: 700,
            dots: false,
            loop: true,
            nav: true,
            navText: ['<img src="img/arrows-right.png">', '<img src="img/arrows-right.png">']
        });
    }
}

postsCarousel3();
$(window).resize(postsCarousel3);

$('.form-currency .dropdown-menu li .currency-select').click(function () {
    $('.form-currency .dropdown-menu li .currency-select').removeClass('select-active');
    $(this).addClass('select-active');
    return false;
});

$('.language .dropdown-menu li .currency-select').click(function () {
    $('.language .dropdown-menu li .currency-select').removeClass('select-active');
    $(this).addClass('select-active');
    return false;
});


$('.contacts-form button:submit').click(function () {
    var send = true;
    $('.contacts-form input[name="name"]').each(function () {
        if ($(this).val() == '') {
            $(this).data('placeholder', $(this).attr('placeholder'));
            $(this).attr('placeholder', 'Заполните обязательное поле').addClass('has-error');
            send = false;
        } else {
            $('input').blur(function () {
                $(this).attr('placeholder', $(this).data('placeholder')).removeClass('has-error');
            });
        }
    });

    if (!send) return false;

});

// product img
$(document).ready(function () {

    var srcValue = $('.product-image .image-zoom img').attr('src');
    var penImg = $('.product-image .image-zoom img');

    $('.swiper-slide a.slider-btn').on('click', function (e) {
        e.preventDefault();

        var imgPath;

        imgPath = $(this).attr('data-img-path');

        penImg.attr('src', imgPath);

    });

});

$(document).ready(function () {

    var srcValue = $('.product-image .image-zoom').attr('href');
    var penImg = $('.product-image .image-zoom');

    $('.swiper-slide a.slider-btn').on('click', function (e) {
        e.preventDefault();

        var imgPath;

        imgPath = $(this).attr('data-img-path');

        penImg.attr('href', imgPath);

    });

});
