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
    $('table').addClass("tbl").append('<thead/>');
    $('table').append('<tbody/>');
    //create heading row
    let $headingRow = $('<tr/>').addClass('headingRow');
    $('thead').append($headingRow);
    // $headingRow.append($('<th></th>').html("<a data-sort='name' href='#'>First Name</a>"));
    // $headingRow.append($('<th></th>').html("<a data-sort='name' href='#'>Last Name</a>"));
    // $headingRow.append($('<th></th>').html("<a data-sort='name' href='#'>Occupation</a>"));
    // $headingRow.append($('<th></th>').html("<a data-sort='name' href='#'>Marital Status</a>"));
    // $headingRow.append($('<th></th>').html("<a data-sort='duration' href='#'>Seasons</a>"));
    // //added new row
    // $headingRow.append($('<th></th>').html("<a data-sort='date' href='#'>First Appeared</a>"));


    $headingRow.append($('<th data-sort="name"></th>').text("First Name"));
    $headingRow.append($('<th data-sort="name"></th>').text("Last Name"));
    $headingRow.append($('<th data-sort="name"></th>').text("Occupation"));
    $headingRow.append($('<th data-sort="name"></th">').text("Marital Status"));
    $headingRow.append($('<th data-sort="duration"></th>').text("Seasons"));
    $headingRow.append($('<th data-sort="date"></th>').text("First Appeared"));
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
                //append new
                $row.append($('<td></td>').text(value.firstAppeared));
                //append to table 
                $('tbody').append($row);
            });
        }
    });
            /************ Sort Table *************/
            let compare = {
                name: function (a, b) {
                    a = a.replace(/^the /i, '');
                    b = b.replace(/^the /i, '');

                    if (a < b) {
                        return -1;
                    } else {
                        return a > b ? 1 : 0;
                    }
                },
                duration: function (a, b) {
                    a = a.split(':');
                    b = b.split(':');

                    a = Number(a[0]) * 60 + Number(a[1]);
                    b = Number(b[0]) * 60 + Number(b[1]);

                    return a - b;

                },
                date: function (a, b) {
                    a = new Date(a);
                    b = new Date(b);

                    return a - b;
                }
            };

            $('.sortable').each(function () {
                let $table = $(this);
                let $tbody = $table.find('tbody');
                let $controls = $table.find('th');
                let rows = $tbody.find('tr').toArray();

                $controls.on('click', function () {
                    console.log('hello')
                    let $header = $(this);
                    let order = $header.data('sort');
                    let column;
                    console.log($(this))
                    //If selected item has ascending or descending class, reverse contents
                    if ($header.is('.ascending') || $header.is('.descending')) {
                        $header.toggleClass('ascending descending');
                        $tbody.append(rows.reverse());
                    } else {
                        $header.addClass('ascending');
                        //Remove asc or desc from all other headers
                        $header.siblings().removeClass('ascending descending');

                        if (compare.hasOwnProperty(order)) {
                            column = $controls.index(this);
                            rows.sort(function (a, b) {
                                a = $(a).find('td').eq(column).text();
                                b = $(b).find('td').eq(column).text();
                                console.log('a: ', a, '   b: ', b)
                                return compare[order](a, b);
                            });
                            $tbody.append(rows);
                        }
                    }
                })
            })
        
});