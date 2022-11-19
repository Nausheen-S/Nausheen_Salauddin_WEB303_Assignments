/*
    Filename: script.js
	Author: Nausheen Salauddin
	Student Number: 0805026
	Date: 19-11-2022
 */

 //function that checks if document is ready
$(document).ready(function(){

     /************ Title *************/
    //add name and show title
    $('h1').text("Nausheen Salauddin - Criminal Minds");

     /************ Table *************/
    //create a table
    $('h1').after('<table/>');
    $('table').addClass("tbl").append('<thead/>');
    $('table').append('<tbody/>');
    //create heading row
    let $headingRow = $('<tr/>').addClass('headingRow');
    $('thead').append($headingRow);
    $headingRow.append($('<td></td>').text("First Name"));
    $headingRow.append($('<td></td>').text("Last Name"));
    $headingRow.append($('<td></td>').text("Occupation"));
    $headingRow.append($('<td></td>').text("Marital Status"));
    $headingRow.append($('<td></td>').text("Seasons"));

    //get content from json file
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
                //create row
                let $row = $('<tr/>').addClass('row');
                $row.append($('<td id="fname"></td>').text(value.firstName));
                $row.append($('<td></td>').text(value.lastName));
                $row.append($('<td></td>').text(value.occupation));
                $row.append($('<td></td>').text(value.maritalStatus));
                $row.append($('<td></td>').text(value.seasons));
                //append to table 
                $('tbody').append($row);   
            });

            /************ Filter Ascending *************/
            
        }   
    });
});