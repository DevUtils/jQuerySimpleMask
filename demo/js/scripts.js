$(document).ready(function() {
	
	$('#frCep' ).simpleMask( { 'mask': '#####-###', 'nextInput': $('#frTel') } );
	$('#frTel' ).simpleMask( { 'mask': ['####-####', '#####-####'], 'nextInput': $('#frData') } );
	$('#frData').simpleMask( { 'mask': '##/##/####', 'nextInput': true } );
	$('#frCpf' ).simpleMask( { 'mask': 'cpf' , 'nextInput': true } );
	$('#frCnpj').simpleMask( { 'mask': 'cnpj' } );

	$('#frCep').focus();

});