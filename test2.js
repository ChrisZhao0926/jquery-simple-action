$(document).ready(function(){
    var $speech=$('div.speech');
    $('#larger').click(function(){
        var num=parseFloat($speech.css('fontSize'));
        num *=1.2;
        $speech.css('fontSize',num+'px');
    });
    $('#smaller').click(function(){
        var num=parseFloat($speech.css('fontSize'));
        num *=0.8;
        $speech.css('fontSize',num+'px');
    });
});