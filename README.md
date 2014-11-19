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
</form>
```

```js
$(document).ready(function() {
	
	$('#frCep').simpleMask( { 'mask': '#####-###', 'nextInput': $('#frTelefone') } );
	$('#frTel').simpleMask( { 'mask': ['####-####','#####-####'] } );

});
```
