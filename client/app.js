$(document).ready(function(){

	$('#what').click(function(){
		hideBlocks();
		$('#what-block').fadeIn(600);
	});
	$('#close-what').click(function(){
		showBlocks();
		$('#what-block').fadeOut(600);
	});

	$('#why').click(function(){
		hideBlocks();
		$('#why-block').fadeIn(600);
	});
	$('#close-why').click(function(){
		showBlocks();
		$('#why-block').fadeOut(600);
	});

	$('#how').click(function(){
		hideBlocks();
		$('#how-block').fadeIn(600);
	});
	$('#close-how').click(function(){
		showBlocks();
		$('#how-block').fadeOut(600);
	});

	$('#login').click(function(){
		hideBlocks();
		$('#login-block').fadeIn(600);
	});
	$('.cancelbtn').click(function(){
		showBlocks();
		$('#login-block').fadeOut(600);
	});
})


// functions ------------
function showBlocks(){
	$('#what').show();
	$('#why').show();
	$('#how').show();
	$('#login').show();
	$('#mid-content').show();
}

function hideBlocks(){
	$('#what').hide();
	$('#why').hide();
	$('#how').hide();
	$('#login').hide();
	$('#mid-content').hide();
}