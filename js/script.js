/*
    Filename: script.js
	Author: Nausheen Salauddin
	Student Number: 0805026
	Date: 13-11-2022
 */

 //function that checks if document is ready
$(document).ready(function(){

    $.ajax({
        //method
        type: "get",

        //type of data
        dataType: 'json',

        //url to get the data
        url: "characters.json",

        // error callback
        error: function () { 
            $('.tbl').empty().append("<h1>Content could not be retrieved</h1>");
        },

        // success
        success: function (response) {

            //loop through reponse received
            $.each(response, function (index, value) { 
                //append to table 
                $('tbody')
                .append('<tr>')
                .append('<td>' + value.firstName + '</td>')
                .append('<td>' + value.lastName + '</td>')
                .append('<td>' + value.occupation + '</td>')
                .append('<td>' + value.maritalStatus + '</td>')
                .append('<td>' + value.seasons + '</td>')
                .append("</tr>");
            });
        }
    });
});