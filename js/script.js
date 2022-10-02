/*
    Filename: script.js
	Author: Nausheen Salauddin
	Student Number: 0805026
	Date: 2-10-2022
 */

 //function that checks if document is ready
$(document).ready(function(){
    //resultJSON();
    resultAjax();
});

//getJSON method
function resultJSON() {
    //getJSON method to get content of team.json
    $.getJSON("/team.json", function (response) {
        //loop through reponse received
        $.each(response, function (index, value) { 
            //append to div 
            $('div#team').append('<h2>' + value.name + '</h2>')
            .append('<h5>' + value.position + '</h5>')
            .append('<p>' + value.bio + '</p>');
        });
    });
}

//ajax method
function resultAjax() {
    $.ajax({
        //method
        type: "get",

        //type of data
        dataType: 'json',

        //url to get the data
        url: "team.json",

        //callback before sending request
        beforeSend: function () {    
            $('div#team').append('<h1>Loading...</h1>');
        },

        // error callback
        error: function () { 
            $('div#team').empty().append("<h1>Content could not be retrieved</h1>");
        },

        // success
        success: function (response) {

            //display content after 3 sec delay
            setTimeout(function () {

                //remove loading content
                $('div#team').empty();

                //loop through reponse received
                $.each(response, function (index, value) { 
                    //append to div 
                    $('div#team').append('<h2>' + value.name + '</h2>')
                    .append('<h5>' + value.position + '</h5>')
                    .append('<p>' + value.bio + '</p>');
                });
            }, 3000)
        }
    });
}
