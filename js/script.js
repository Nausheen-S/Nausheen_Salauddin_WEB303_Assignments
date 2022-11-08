/*
    Filename: script.js
    Author: Nausheen Salauddin
    Student Number: 0805026
    Date: 07-11-2022
*/

$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            // height: 'auto',
        });
        //modal code goes here
        modal.open({content:$content, width:800, height:580}); //informatin passed in JSON format
    });
});
