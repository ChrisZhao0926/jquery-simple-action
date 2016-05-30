$(document).ready(function(e) {
    $('#default').addClass('selected');
	//for the three button
	$('#switcher button').click(function(event){
		var bodyClass=this.id;
		$('body').removeClass().addClass(bodyClass);
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
		event.stopPropagation();
	});
	//for the hidder three button
	$('#switcher').click(function(event){
		//if(event.target==this){
		$('#switcher button').toggleClass('hidden');
		//}
	});
	//add hover action , 2 paramater, first is in, second is out
	$('#switcher h3').hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	});
});