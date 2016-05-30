$(document).ready(function(e) {
    $('#default').addClass('selected');
	$('#switcher button').click(function(){
		var bodyClass=this.id;
		$('body').removeClass().addClass(bodyClass);
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
	});
});