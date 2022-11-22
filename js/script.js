/*
    Filename: script.js
    Author: Nausheen Salauddin
    Student Number: 0805026
    Date: 19-11-2022
 */

//function that checks if document is ready
$(document).ready(function () {

    /************ Title *************/
    //add name and show title
    $('h1').text("Nausheen Salauddin - Criminal Minds");

    /************ Table *************/
    //create a table
    $('h1').after('<table/>');
    $('table').addClass("sortable").append('<thead/>');
    $('table').append('<tbody/>');
    //create heading row
    let $headingRow = $('<tr/>');
    $('thead').append($headingRow);
    $headingRow.append($('<th></th>').html("<a data-sort='name'>First Name</a>"));
    $headingRow.append($('<th></th>').html("<a data-sort='name'>Last Name</a>"));
    $headingRow.append($('<th></th>').html("<a data-sort='name'>Occupation</a>"));
    $headingRow.append($('<th></th>').html("<a data-sort='name'>Marital Status</a>"));
    $headingRow.append($('<th></th>').html("<a data-sort='duration'>Seasons</a>"));
    //added new row
    $headingRow.append($('<th></th>').html("<a data-sort='date'>First Appeared</a>"));

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
            $('.sortable').empty().append("<h1>Content could not be retrieved</h1>");
        },
        // success
        success: function (response) {
            //loop through reponse received
            $.each(response, function (index, value) {
                //create row
                let $bodyRow = $('<tr/>');
                $bodyRow.append($('<td></td>').text(value.firstName));
                $bodyRow.append($('<td></td>').text(value.lastName));
                $bodyRow.append($('<td></td>').text(value.occupation));
                $bodyRow.append($('<td></td>').text(value.maritalStatus));
                $bodyRow.append($('<td></td>').text(value.seasons));
                //append new
                $bodyRow.append($('<td></td>').text(value.firstAppeared));
                //append to table 
                $('tbody').append($bodyRow);
            });


            var compare = {
                name: function(a,b){
                    a = a.replace(/^the /i, '');
                    b =  b.replace(/^the /i, '');
            
                    if (a < b){
                        return -1;
                    } else {
                        return a>b ? 1 : 0;
                    }
                },
                duration: function(a,b){
                    a = a.split('-');
                    b = b.split('-');
            
                    return a - b;
            
                },
                date: function(a,b){
                    a = new Date(a);
                    b = new Date(b);
            
                    return a - b;
                }
            };
            
            $('.sortable').each(function(){
                var $table = $(this);
                var $tbody = $table.find('tbody');
                var $controls = $table.find('th a');
                var rows = $tbody.find('tr').toArray();
                const deepCopy = [...rows];

                $controls.on('click',function(){
                    var $header = $(this);
                    var order = $header.data('sort');
                    var column;

                    if ($header.is('.ascending')){
                        $header.removeClass('ascending no-sort');
                            $header.addClass('descending');
    
                            $tbody.append(rows.reverse());
                        
            
                    } else if($header.is('.descending')){
                        
                        $header.removeClass('descending ascending');
                        $header.addClass('no-sort');
                        $tbody.append(deepCopy);
                    }
                    else {
                        $header.addClass('ascending');
                        $header.removeClass('no-sort');
                        //Remove asc or desc from all other headers
                        $header.siblings().removeClass('ascending descending no-sort');
                        
                        if (compare.hasOwnProperty(order)){
                            column = $controls.index(this);
                            rows.sort(function(a,b){
                                a = $(a).find('td').eq(column).text();
                                b = $(b).find('td').eq(column).text();
                                return  compare[order](a,b);

                            });
                            $tbody.append(rows);
                        }
                    }
                })
            })

        }
    }); 



})