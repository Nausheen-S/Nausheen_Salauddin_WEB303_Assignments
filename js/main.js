/*
    Filename: main.js
    Author: Nausheen Salauddin
    Student Number: 0805026
    Date: 22-09-2022
*/
// WEB303 Assignment 2

$(document).ready(function() {
    $('#prospect').on('click' , function () {

        var xhr = new XMLHttpRequest;
        xhr.open('GET','prospect.html',true);
        xhr.onload = function()
        {
            if(this.status=== 200)
            {
                console.log("hello");
                let textContent = $("#info");
                textContent.html(xhr.responseText);
                //textContent.slideDown("slow");
            }
        }   
        xhr.send();
    }) 

    $('#convert').on('click' , function () {

        var xhr = new XMLHttpRequest;
        xhr.open('GET','convert.html',true);
        xhr.onload = function()
        {
            if(this.status=== 200)
            {

                let textContent = $("#info");
                textContent.html(xhr.responseText);
                //textContent.slideDown("slow");
            }
        }   
        xhr.send();
    }) 

    $('#retain').on('click' , function () {

        var xhr = new XMLHttpRequest;
        xhr.open('GET','retain.html',true);
        xhr.onload = function()
        {
            if(this.status=== 200)
            {
                let textContent = $("#info");
                textContent.html(xhr.responseText);
                //textContent.slideDown("slow");
            }
        }   
        xhr.send();
    }) 

})


