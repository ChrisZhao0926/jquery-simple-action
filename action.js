$(document).ready(function(e) {
	$('#default')
	.addClass('selected')
	.on('click',function() {
		//$('body').removeClass('narrow').removeClass('large');
		$('body').removeClass();
	});
	
    $('#large').on('click',function() {
		//$('body').addClass('large').removeClass('narrow');
		$('body').removeClass().addClass('large');
	});
	
	$('#narrow').on('click',function(){
		//$('body').addClass('narrow').removeClass('large');
		$('body').removeClass().addClass('narrow');
	});
	
	$('#switcher button').on('click',function(){
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
	});
});