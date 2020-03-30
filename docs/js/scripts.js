$(document).ready
(
	function()
	{
		$('#frCep' ).simpleMask( { 'mask': 'cep'     , 'nextInput': true } );
		$('#frDtel').simpleMask( { 'mask': 'ddd-tel9', 'nextInput': true } );
		$('#frTel' ).simpleMask( { 'mask': 'tel9'    , 'nextInput': true } );
		$('#frData').simpleMask( { 'mask': 'data'    , 'nextInput': true } );
		$('#frCpf' ).simpleMask( { 'mask': 'cpf'     , 'nextInput': true } );
		$('#frCnpj').simpleMask( { 'mask': 'cnpj'    , 'nextInput': true } );

		$('#frCallback').simpleMask
		(
			{
				'mask'       : '#####',
				'nextInput'  : true,
				'onComplete' : function(element)
				{
					console.log('onComplete', element);
				}
			}
		);

		$('#frCep').focus();
	}
);