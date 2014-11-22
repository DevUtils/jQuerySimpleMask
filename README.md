jQuerySimpleMask
================

Simple and fast number input masks

## Usage

```html
<form>
	<p>
		<label for="frCep">CEP</label><br/>
		<input type="text" name="frCep" id="frCep"/>
	</p>
	<p>
		<label for="frTel">Telefone</label><br/>
		<input type="text" name="frTel" id="frTel"/>
	</p>
	<p>
		<label for="frData">Data</label><br/>
		<input type="text" name="frData" id="frData"/>
	</p>
	<p>
		<label for="frCpf">CPF</label><br/>
		<input type="text" name="frCpf" id="frCpf"/>
	</p>
	<p>
		<label for="frCnpj">CNPJ</label><br/>
		<input type="text" name="frCnpj" id="frCnpj"/>
	</p>
</form>
```


## Helper mode
```js
$(document).ready(function() {
	
	$('#frCep' ).simpleMask( { 'mask': 'cep' , 'nextInput': true } );
	$('#frTel' ).simpleMask( { 'mask': 'tel9', 'nextInput': true } );
	$('#frData').simpleMask( { 'mask': 'data', 'nextInput': true } );
	$('#frCpf' ).simpleMask( { 'mask': 'cpf' , 'nextInput': true } );
	$('#frCnpj').simpleMask( { 'mask': 'cnpj' } );

});
```

## Custom mode
```js
$(document).ready(function() {
	
	$('#frCep' ).simpleMask( { 'mask': '#####-###', 'nextInput': $('#frTel') } );
	$('#frTel' ).simpleMask( { 'mask': ['####-####', '#####-####'], 'nextInput': $('#frData') } );
	$('#frData').simpleMask( { 'mask': '##/##/####', 'nextInput': $('#frCpf') } );
	$('#frCpf' ).simpleMask( { 'mask': '###.###.###-##', 'nextInput': $('#frCnpj') } );
	$('#frCnpj').simpleMask( { 'mask': '##.###.###/####-##' } );

});
```
