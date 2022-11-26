/*
    Filename: script.js
    Author: Nausheen Salauddin
    Student Number: 0805026
    Date: 26-11-2022
 */

//function that checks if document is ready
$(document).ready(function () {

    /************ Name *************/
    //add name 
    $('h1').text("Nausheen Salauddin");

    //form submit button disabled using javascript
    let submitBtn = document.getElementById('submit');
    submitBtn.disabled = true;
    submitBtn.classList.add('disabled')
    submitBtn.style.backgroundColor =  'lightGray';
    submitBtn.style.cursor = 'default';

    //add validation for form
    
    //add select box
    let selectElement = document.getElementById('country');
    for (let i = 0; i < countries.length; i++) {
        let optionElement = document.createElement('option');
        optionElement.setAttribute('value', countries[i].code);
        optionElement.innerHTML = countries[i].name;
        selectElement.appendChild(optionElement)
    }

    //submit form message
    let msgElement = document.createElement('h2');
    let formElement = document.getElementById('validateForm');
    submitBtn.addEventListener('click', function(e) {            
        e.preventDefault();                             
        let elements = formElement.elements;                   
        let username = elements.username.value;     
        let optionChosen = elements.country.value;
        let msg = `Welcome ${username}! The country code you selected is ${optionChosen}`;  
        msgElement.textContent = msg;       
        formElement.after(msgElement); 
    })
})