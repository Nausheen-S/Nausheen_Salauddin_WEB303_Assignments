/*
    File name: index.html
    Author: Nausheen Salauddin
    Student Number: 0805026
    Date: 29-10-2022
*/

$(document).ready(function () {

    /***************  ACCORDIAN *****************/
    let allPanels = $('.accordion-panel').hide();
    $('.accordion-one > li > button').on('click', function (e) {
        // allPanels.slideUp();
        console.log($(this))
        $(this).parent().next().slideDown();
        return false;
    });

    /***************  TABS *****************/
    $('.tab-panel').hide();
    $('#tab1').show();

    $('.tab-list li').on('click', function() {
        $('.tab-list li').removeClass('active');
        $(this).addClass('active');
        $('.tab-panel').hide();
        
        let panel = $(this).find('a').attr('href');
        $(panel).show();
        return false;
    });

});