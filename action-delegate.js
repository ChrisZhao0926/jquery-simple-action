$(document).ready(function(e) {
	
	$('#default').addClass('selected');
	$('#switcher').hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	});
    
	$('#switcher').click(function(event) {
		if($(event.target).is('button')) {
			var bodyClass=event.target.id;
			$('body').removeClass().addClass(bodyClass);
			$('#switcher button').removeClass('selected');
			$(event.target).addClass('selected');
			event.stopPropagation();
		}else{
			$('#switcher button').toggleClass('hidden');
		}
	});
	$('#switcher').click();
	/*
	$('#switcher').click(function(event){

		if(!$(event.target).is('button')){
			
			$('#switcher button').toggleClass('hidden');
		}

	});
	*/

	
});