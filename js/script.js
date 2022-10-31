/*
    File name: index.html
    Author: Nausheen Salauddin
    Student Number: 0805026
    Date: 29-10-2022
*/

$(document).ready(function () {

    /***************  ACCORDIAN *****************/

    /** Accordian 1 **/
    $('section:nth-of-type(1) ul li button').on('click', function (e) {
        e.preventDefault();
        let $this = $(this);

        $('section:nth-of-type(1) ul li button').each(function(){
            $this.removeClass("showing");
        });

        $this.toggleClass('showing');
        $this.next().slideToggle();

        //Hide the other panels
        $("section:nth-of-type(1) ul li div").not($this.next()).slideUp();

    })

     /** Accordian 2 **/
    $('section:nth-of-type(2) ul li button').on('click', function (e) {
        e.preventDefault();
        let $this = $(this);
        $('section:nth-of-type(2) ul li button').each(function(){
            $this.removeClass("showing");
        });

        $this.toggleClass('showing');
        $this.next().slideToggle();

        //Hide the other panels
        $("section:nth-of-type(2) ul li div").not($this.next()).slideUp();
    })

    /***************  TABS *****************/
    $('.tab-panel').hide();
    $('#tab1').show();

    $('.tab-list li').on('click', function() {
        $('.tab-list li').removeClass('active');
        $(this).addClass('active');
        $('.tab-panel').hide();
        
        let panel = $(this).find('a').attr('href');
        $(panel).show();
        return false;
    });

});