/*
    Assignment 05

    Filename: script.js
	Author: Nausheen Salauddin
	Student Number: 0805026
	Date: 22-10-2022
*/


$(document).ready(function () {
    class ContentItem {

        //properties for books

        //unique id
        bookId;
        //name of book
        bookName;
        //description of book
        bookDescription;
        //genre of book
        bookGenre;
    
        //constructor
        constructor(bookId, bookName, bookDescription, bookGenre) {
            this.bookId = bookId;
            this.bookName = bookName;
            this.bookDescription = bookDescription;
            this.bookGenre = bookGenre;
        }
    
        updateContentItem(bookId, bookName, bookDescription, bookGenre){
            if ((this.bookId === bookId) && (bookName !== null) && (bookDescription !== null) && (bookGenre !== null)) {
                this.bookName = bookName;
                this.bookDescription = bookDescription;
                this.bookGenre = bookGenre;
            }
        }
    
        toString() {
            //create new div 
            let $result = $('#content-item-list').append("<div/>");

            /* 
                ******* This method updates the id to last elemnt's id, so all div have id=5 ********
                $('#content-item-list').append('<div>' + '<h2>' + this.bookName + '</h2>'
                                                        + '<p>' + this.bookDescription + '</p>' 
                                                        + '<div>' + this.bookGenre 
                                                        + '</div>'+ '</div>').children().addClass("content-item-wrapper")
                                                        .attr("id", "content-item-"+ $id);
            */

            //add class, id and content
            $result.children().each(function (index) {
                $(this).html('<h2>' + contentArray[index].bookName + '</h2>' 
                            + '<p>' + contentArray[index].bookDescription + '</p>'  
                            + '<div>' + contentArray[index].bookGenre + '</div>');
                $(this).addClass("content-item-wrapper").attr("id", "content-item-"+ contentArray[index].bookId);
                        
            })
        }
    }

    //create an array of content items
    let contentArray = [
        new ContentItem('1',"Village by The Sea","A novel by Anita Desai","Novel"),
        new ContentItem("2","Murder on Orient Express","A crime novel by Agatha","Thriller"),
        new ContentItem("3","Killing Floor","A crime novel by Lee Child","Suspense"),
        new ContentItem("4","The Design of Everyday Things","A UX Design book by Don Norman","Education"),
        new ContentItem("5","The Midnight Lock","A suspense thriller by Jeffrey","Thriller")
    ];
    
    //call toString on each instance
    for(this.bookId  in contentArray) {
    contentArray[this.bookId].toString()
    }

    //adding css
    $('.content-item-wrapper').css({    
        "border": "2px solid black",
        "width": "80%",
        "padding": "3px",
        "margin": "5px auto"    
    })

});


