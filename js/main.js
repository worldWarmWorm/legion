$(function () {

    $('.slider1').slick({
        prevArrow: '<button type="button" class="slick-prev slick-btn"></button>',
        nextArrow: '<button type="button" class="slick-next slick-btn"></button>'
    });

    $('.partners-slider').slick({
        prevArrow: '<button type="button" class="slick-prev slick-btn"></button>',
        nextArrow: '<button type="button" class="slick-next slick-btn"></button>',
        dots: true
    });

    var item = $('a.round');

    $(item).hover(
        function () {
            $(this).find('div').removeClass('round-form');
            $(this).find('div').addClass('round-form-hovered');
        },
        function () {
            $(this).find('div').removeClass('round-form-hovered');
            $(this).find('div').addClass('round-form');
        }
    );



    var item2 = $('a.suggest-left');
    
    $(item2).hover(
        function () {
            $(this).find('div').removeClass('suggest-default');
            $(this).find('div').addClass('suggest-hovered');
        },
        function () {
            $(this).find('div').removeClass('suggest-hovered');
            $(this).find('div').addClass('suggest-default');
        }
    );



    var item3 = $('.power-item');

    $(item3).hover(
        function () {
            $(this).find('p').slideDown('hidden').is(':hidden');
        },
        function () {
            $(this).find('p').slideUp('shown');
        }
    );    
});