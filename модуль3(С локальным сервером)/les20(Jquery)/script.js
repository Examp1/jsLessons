import $ from 'jquery'; // если не работает $

$(document).ready( function() {
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', function(e) {
        // $(this).addClass('active');
        $('.image:even').fadeToggle('slow');
    });

    $('.list-item:eq(4)').on('click', function(e) {
        // $(this).addClass('active');
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 2000);
    });
});