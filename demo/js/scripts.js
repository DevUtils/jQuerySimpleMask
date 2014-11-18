$(document).ready(function() {
	
	$('#frCep').simpleMask( { 'mask': '#####-###', 'nextInput': $('#frTel') } );
	$('#frTel').simpleMask( { 'mask': ['####-####','#####-####'] } );

	$('#frCep').focus();

});