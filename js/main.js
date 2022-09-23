/*
    Filename: main.js
    Author: Nausheen Salauddin
    Student Number: 0805026
    Date: 22-09-2022
*/
// WEB303 Assignment 2

$(document).ready(function() {

    /************ User clicks on Prospect ***********/

    $('#prospect').on('click' , function () {

        //ajax request
        var xhr = new XMLHttpRequest;
        xhr.open('GET','prospect.html',true);
        xhr.onload = function()
        {
            if(this.status=== 200)
            {
                //get the div to place response. id of div changed from content to info to help resolve issue
                let textContent = $("#info");

                //append response into div and animate
                textContent.html(xhr.responseText).hide().animate( { fontSize:"24px" }).fadeIn(1300);
            }
        }   
        xhr.send();
    }) 

    /************ User clicks on Convert ***********/

    $('#convert').on('click' , function () {

        var xhr = new XMLHttpRequest;
        xhr.open('GET','convert.html',true);
        xhr.onload = function()
        {
            if(this.status=== 200)
            {
                let textContent = $("#info");
                textContent.html(xhr.responseText).hide().animate( { fontSize:"24px" }).slideDown("slow");
            }
        }   
        xhr.send();
    }) 

    /************ User clicks on Retain ***********/
    $('#retain').on('click' , function () {

        var xhr = new XMLHttpRequest;
        xhr.open('GET','retain.html',true);
        xhr.onload = function()
        {
            if(this.status=== 200)
            {
                let textContent = $("#info");
                textContent.html(xhr.responseText).hide().animate( { fontSize:"24px" }).slideDown(1800);
            }
        }   
        xhr.send();
    }) 

})


