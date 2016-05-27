$(document).ready(function(e) {
    $('#large').on('click',function() {
		$('body').addClass('large');
		$('body').removeClass('narrow');
	});
	$('#narrow').on('click',function(){
		$('body').addClass('narrow');
		$('body').removeClass('large');
	});
	$('#default').on('click',function() {
		$('body').removeClass('narrow');
		$('body').removeClass('large');
	});
});