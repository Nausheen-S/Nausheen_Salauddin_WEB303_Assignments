/*
    Filename: script.js
    Author: Nausheen Salauddin
    Student Number: 0805026
    Date: 15-09-2022
	WEB 303 Assignment 1 - jQuery
	{Nausheen Salauddin}
*/

//function that checks if document is ready
$(document).ready(function(){

	//add event handler
	$('input').on('change',function(){

		//get the value of salary from HTML input 
		let $salary = $('#yearly-salary').val();

		//get the value of percentage from HTML input 
		let $percent = $('#percent').val();

		//calculate the amount that can be spent on tech
        let $amountToSpend = $salary * $percent / 100;

		//append the amount to HTML <p> tag
		$('#amount').text("$" + $amountToSpend);
		console.log($amountToSpend);
    });
});

