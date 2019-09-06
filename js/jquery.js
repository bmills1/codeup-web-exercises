"use strict";
$(document).ready(function() {
        $('h1').click(function(){
                $(this).css('background-color', 'red');
        });


        $('li').hover(
            function() {
                    $(this).css('color', 'red');
            },
            function() {
                    $(this).css('color', 'black');
            }
        );
    var $paragraphs = $('p');
    console.log(
        $paragraphs.first()

    );
});