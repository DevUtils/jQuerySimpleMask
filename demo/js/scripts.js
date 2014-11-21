$(document).ready(function() {
	
	$('#frCep').simpleMask( { 'mask': '#####-###', 'nextInput': $('#frTel') } );
	$('#frTel').simpleMask( { 'mask': ['####-####','#####-####'], 'nextInput': $('#frData') } );
	$('#frData').simpleMask( { 'mask': '##/##/####' } );

	$('#frCep').focus();

});