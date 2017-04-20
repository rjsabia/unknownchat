$(document).ready(function(){

	$('#what').click(function(){
		$('#what').hide();
		$('#what-block').show();
	});
	$('#close-what').click(function(){
		$('#what-block').hide();
		$('#what').show();
	});

	$('#why').click(function(){
		$('#why').hide();
		$('#why-block').show();
	});
	$('#close-why').click(function(){
		$('#why-block').hide();
		$('#why').show();
	});

	$('#how').click(function(){
		$('#how').hide();
		$('#how-block').show();
	});
	$('#close-how').click(function(){
		$('#how-block').hide();
		$('#how').show();
	});
})