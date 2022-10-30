/*
    File name: index.html
    Author: Nausheen Salauddin
    Student Number: 0805026
    Date: 29-10-2022
*/

$(document).ready(function () {
    $(".accordian-control").on("click", ".accordion-control", function (e) {
        //e.preventDefault();
        if (false == $(this).next().is(':visible')) {
        
            $('.accordion-panel').slideUp(300);
        
        }
        $(this).next(".accordion-panel").slideToggle();
        console.log("hello");
    });

});