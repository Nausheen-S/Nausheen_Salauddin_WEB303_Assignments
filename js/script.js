/*
    Filename: script.js
    Author: Nausheen Salauddin
    Student Number: 0805026
    Date: 26-11-2022
 */

//function that checks if document is ready
$(document).ready(function () {

    //add name 
    $('h1').text("Nausheen Salauddin");

    //form submit button disabled using javascript
    let submitBtn = document.getElementById('submit');
    submitBtn.classList.remove('enabled');
    submitBtn.disabled = true;
    submitBtn.classList.add('disabled');
    
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
    let elements = formElement.elements;    
    submitBtn.addEventListener('click', function(e) {            
        e.preventDefault();                                            
        let username = elements.username.value;     
        let optionChosen = elements.country.value;
        let msg = `Welcome ${username}! The country code you selected is ${optionChosen}`;  
        msgElement.textContent = msg;       
        formElement.after(msgElement); 
    })

    //add validation for form
    let userField = document.getElementById('username');
    let pswrdField = document.getElementById('password');
    let confirmPswrdField = document.getElementById('confirmPassword');
    let checkField = document.getElementById('terms');
    let optionChosen = elements.country.value;
    let allInputs = document.querySelectorAll('#validateForm input');

    let validateInput1 = function () {
        return (userField.value.length > 0);
    }

    let validateInput2 = function () {
        return (pswrdField.value.length >= 12);
    }

    let validateInput3 = function () {
        return (confirmPswrdField.value === pswrdField.value);
    }

    let validateInput4 = function () {
        return (checkField.checked === true);
    }

    let validateInput5 = function () {
        return (optionChosen.value != "defaultOption");
    }

    let validateFormFunc = function () {

        if (!validateInput1()) {
            return false;
        }

        if (!validateInput2()) {
            return false;
        }

        if (!validateInput3()) {
            return false;
        }

        if (!validateInput4()) {
            return false;
        }

        if (!validateInput5()) {
            return false;
        }
        return true;
    }

    for (let i = 0, length = allInputs.length; i < length; i++) {
        let checkValid = function () {      
            if ( !validateFormFunc() )
            {
                submitBtn.disabled = true;
                submitBtn.classList.add('disabled')
            }
            else
            {
                submitBtn.disabled = false;
                submitBtn.classList.remove('disabled')
            }
        }
        allInputs[i].addEventListener('change', checkValid);
        allInputs[i].addEventListener('keyup', checkValid);
    }
})

