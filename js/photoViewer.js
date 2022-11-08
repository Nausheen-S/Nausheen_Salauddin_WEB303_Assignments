/*
    Filename: photoViewer.js
    Author: Nausheen Salauddin
    Student Number: 0805026
    Date: 07-11-2022
*/

//jQuery plugin for photoviewer
$.fn.customPhotoViewer = function () {
    var request;                                    
    var $current;                                   
    var cache = {};
    var $frame = $('.photo-box');                
    var $thumbs = $('.thumbnail-anchor');                     


    $(document).on('click', '.thumbnail-anchor', function (e) {       

        var $img;                                       
        var src = this.href;                            
        request = src;    
        
        //add css to current img
        $(this).css({borderBottom:'5px solid brown'}).siblings().css({border:'none'})

        //set a.photo-box href with href of thumbnail
        var photoBoxSrc = $('a.photo-box').attr('href')
        photoBoxSrc = this.href;

        e.preventDefault();                            
        $thumbs.removeClass('active');                  

        if (cache.hasOwnProperty(src)) {                 

            if (cache[src].isLoading === false) {        
                crossfade(cache[src].$img);             
            }
        } else {                                        
            $img = $('<img/>');                         

            cache[src] = {                              
                $img: $img,                             
                isLoading: true                          
            };

            $img.on('load', function () {                 
                $img.hide();                            
                $frame.removeClass('is-loading').append($img);     
                cache[src].isLoading = false;           
                if (request === src) {
                    crossfade($(this));                 
                }                                       
            });

            $frame.addClass('is-loading');              
            $img.attr({                                 
                'src': src,                             
                'alt': this.title || ''                  
            });
        }
    });

    $('.thumbnail-anchor').eq(0).click();
    
    function crossfade($img) {                         
        if ($current) {                                  
            $current.stop().fadeOut('slow');                    
        }

        $img.css({                                     
            marginLeft: -$img.width() / 2,
            marginTop: -$img.height() / 2,
        });

        $img.stop().fadeTo('slow', 1);                  
        $current = $img;                               
    }
    return this;
};


