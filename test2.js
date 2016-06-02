$(document).ready(function(){
    var $speech=$('div.speech');
    var defaultSize=parseFloat($speech.css('fontSize'));
//    $('#larger').click(function(){
//        var num=parseFloat($speech.css('fontSize'));
//        num *=1.2;
//        $speech.css('fontSize',num+'px');
//    });
//    $('#smaller').click(function(){
//        var num=parseFloat($speech.css('fontSize'));
//        num *=0.8;
//        $speech.css('fontSize',num+'px');
//    });
    $('#switcher button').click(function(){
        var num=parseFloat($speech.css('fontSize'));
        switch(this.id){
            case 'larger':
                num *=1.4;
                break;
            case 'smaller':
                num /=1.4;
                break;
            default:
                num=defaultSize;
        }
        $speech.css('fontSize',num+'px');
    });
});