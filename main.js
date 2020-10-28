// L'esercitazione di oggi consiste nel replicare l'header del sito:
// https://www.revolut.com/it-IT


$(document).ready(function() {

// metodo1:
    // $(".voci-menu").mouseenter(function() {
    //         $('.submenu').addClass('active');
    //     });
    //
    //     $('.voci-menu').mouseleave(function() {
    //         $('.submenu').removeClass('active');
    //     });

// metodo2:

$('.voci-menu').click(function() {
        // visualizzo o nascondo il menu
        // $('.dropdown-menu').toggle();
        $('.submenu').toggleClass('active');
    });

    $('.voci-menu1').click(function() {
            // visualizzo o nascondo il menu
            // $('.dropdown-menu').toggle();
            $('.submenu1').toggleClass('active');
        });

        $('.voci-menu2').click(function() {
                // visualizzo o nascondo il menu
                // $('.dropdown-menu').toggle();
                $('.submenu2').toggleClass('active');
            });

            $('.voci-menu3').click(function() {
                    // visualizzo o nascondo il menu
                    // $('.dropdown-menu').toggle();
                    $('.submenu3').toggleClass('active');
                });
                


});
