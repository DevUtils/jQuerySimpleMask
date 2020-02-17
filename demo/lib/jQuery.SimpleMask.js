/* Version: 1.0.7 - Last modified: 2020-02-17 17:48:10 */
String.prototype.simpleMaskStringCount = function(s1) { return (this.length - this.replace(new RegExp(s1,"g"), '').length) / s1.length; };

(function($){

	var defaults =
	{
		mask       : '',
		nextInput  : null,
		onComplete : null
	};
	var objects = [];

	var methods =
	{
		init : function(options)
		{
			var opts = $.extend( {}, defaults, options );

			return this.each(function()
			{
				$.fn.simpleMask.process($(this), opts);
			});
		},
		unmask : function() { return this.each(function() { $.fn.simpleMask.unmask(this); }); }
	};

	$.fn.simpleMask = function(methodOrOptions)
	{
		if ( methods[methodOrOptions] )
		{
			return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		}
		else if ( typeof methodOrOptions === 'object' || ! methodOrOptions )
		{
			return methods.init.apply( this, arguments );
		}
		else
		{
			$.error('Method ' + methodOrOptions + ' does not exist on jQuery.SimpleMask');
		}
	};

	$.fn.simpleMask.makeId = function()
	{
		var text = '';
		var possible = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz0123456789';
		var pl = possible.length;
		for(var i = 0; i < 8; i++)
		{
			text += possible.charAt(Math.floor(Math.random() * pl));
		}
		return text;
	};

	$.fn.simpleMask._onComplete = function(p_arg)
	{
		var ids = (typeof(p_arg) == 'object') ? $(p_arg).attr('data-mask-ids') : p_arg;
		if (objects[ids].options.onComplete !== null)
		{
			objects[ids].options.onComplete.call(this, objects[ids]);
			$.fn.simpleMask._nextInput(ids);
		}
		else
		{
			$.fn.simpleMask._nextInput(ids);
		}
	};

	$.fn.simpleMask.nextOnTabIndex = function(element)
	{
		var $element = $(element);
		var get_next = false;
		var result = [];
		$element.closest('form').find('input,select').each
		(
			function(index)
			{
				var $current = $(this);
				if (get_next)
				{
					result = $current;
					 return false;
				}

				var check = ($current[0] == $element[0]);
				if (check)
				{
					get_next = true;
				}
			}
		);
		return result;
	};

	$.fn.simpleMask._nextInput = function(p_arg)
	{
		var ids = (typeof(p_arg) == 'object') ? $(p_arg).attr('data-mask-ids') : p_arg;
		if (objects[ids].options.nextInput !== null)
		{
			if (objects[ids].options.nextInput === true)
			{
				var nextelement = $.fn.simpleMask.nextOnTabIndex(objects[ids].element);
				if (nextelement.length > 0)
				{
					nextelement.select().focus();
				}
			}
			else if (objects[ids].options.nextInput.length > 0)
			{
				objects[ids].options.nextInput.select().focus();
			}
		}
	};

	$.fn.simpleMask.unmask = function(p_arg)
	{
		var ids = (typeof(p_arg) == 'object') ? $(p_arg).attr('data-mask-ids') : p_arg;

		$(objects[ids].element).removeClass('input-masked').removeAttr('data-mask-ids');
		if ( $(objects[ids].element).attr('class') === '' )
		{
			$(objects[ids].element).removeAttr('class');
		}

		$(document).off
		(
			'keyup.simpleMask change.simpleMask',
			'input[data-mask-ids="' + ids + '"]'
		);
		$(document).off
		(
			'keydown.simpleMask',
			'input[data-mask-ids="' + ids + '"]'
		);
	};

	$.fn.simpleMask.isNumber = function(p_string)
	{
		return p_string.replace(/\D/g, '') !== '';
	};

	$.fn.simpleMask.onlyNumbers = function(p_string)
	{
		return p_string.replace(/\D/g, '');
	};

	$.fn.simpleMask.onlyNumbersLength = function(p_string)
	{
		return p_string.replace(/\D/g, '').length;
	};

	$.fn.simpleMask.applyMask = function(p_object, p_key)
	{
		var p_element    = p_object.element;
		var html_element = $(p_element)[0];
		var caret_ini    = html_element.selectionStart;
		var caret_end    = html_element.selectionEnd;
		var old_value    = p_object.oldvalue;
		var cur_value    = $(p_element).val();
		var vrTemp       = $.fn.simpleMask.onlyNumbers($(p_element).val());

		var p_mask = p_object.masks[0];
		var max_mask = p_object.masks[p_object.masks.length-1].simpleMaskStringCount('#');
		if (vrTemp.length > max_mask)
		{
			vrTemp = vrTemp.substr(0, max_mask);
		}
		var curr_length = vrTemp.length;
		for(var i in p_object.masks)
		{
			if (p_object.masks[i].simpleMaskStringCount('#') == curr_length)
			{
				p_mask = p_object.masks[i];
				break;
			}
		}

		if (vrTemp.length > 0)
		{
			vrTemp = vrTemp.trim();
			var result = p_mask;
			var l = vrTemp.length;

			for (var k = 0; k < l; k++)
			{
		    	result = result.replace('#', vrTemp.charAt(k));
			}

			var pos = result.indexOf('#');
			if (pos != -1)
			{
				result = result.substr(0, pos);
			}
			
			var ultimo = result.substr(result.length-1, 1);
			if ($.fn.simpleMask.onlyNumbers(ultimo) === '')
			{
				result = result.substr(0, pos-1);
			}
			
			var lastchar = result.substr(result.length - 1, 1);
			while( (result.length > 0) && ( $.fn.simpleMask.isNumber(lastchar) === false ) )
			{
				result = result.substr(0, result.length - 1);
				lastchar = result.substr(result.length - 1, 1);
			}

			if (result != cur_value)
			{
				$(p_element).val(result);
			}
			if (result != old_value)
			{
				if ( (result.length == p_mask.length) && ( result.length <= caret_end ) && ( result.length == p_object.maxlengthmask )  )
				{
					if (Number.isInteger(p_key))
					{
						$.fn.simpleMask._onComplete(p_element.attr('data-mask-ids'));
					}
				}
			}
		}
		else
		{
			$(p_element).val('');
		}

		p_object.oldvalue = $(p_element).val();
	};

	$.fn.simpleMask.process = function(p_elem, p_options)
	{
		var ids = $.fn.simpleMask.makeId();
		while (objects[ids] !== undefined)
		{
			ids = $.fn.simpleMask.makeId();
		}
		var comp = {};
		comp.element    = p_elem;
		comp.options    = p_options;
		comp.nextInput  = p_options.nextInput;
		comp.onComplete = p_options.onComplete;
		comp.oldvalue   = $(p_elem).val();

		var usemasks = [];
		if (typeof p_options.mask == 'string')
		{
			usemasks = [p_options.mask];
		}
		else
		{
			usemasks = p_options.mask;
		}

		for (var k in usemasks)
		{
			switch(usemasks[k].toLowerCase())
			{
				case 'cpf':
					usemasks[k] = '###.###.###-##';
				break;
				case 'cnpj':
					usemasks[k] = '##.###.###/####-##';
				break;
				case 'cep':
					usemasks[k] = '#####-###';
				break;
				case 'date':
				case 'data':
					usemasks[k] = '##/##/####';
				break;
				case 'telefone':
				case 'tel':
					usemasks[k] = '####-####';
				break;
				case 'telefone9':
				case 'tel9':
					usemasks[k] = '####-####';
					usemasks.push('#####-####');
				break;
				case 'ddd-telefone9':
				case 'ddd-tel9':
					usemasks[k] = '(##) ####-####';
					usemasks.push('(##) #####-####');
				break;
			}
		}

		comp.masks = usemasks;
		comp.masks.sort(function(a, b){ return a.length - b.length; });
		comp.maxlengthmask = comp.masks[comp.masks.length-1].length;

		objects[ids] = (comp);
		p_elem.attr('data-mask-ids', ids).addClass('input-masked');

		$(document).on
		(
			'keyup.simpleMask change.simpleMask',
			'input[data-mask-ids="' + ids + '"]',
			function(e)
			{
				$.fn.simpleMask.applyMask(comp, parseInt(e.key));
			}
		);

		$(document).on
		(
			'paste',
			'input[data-mask-ids="' + ids + '"]',
			function(e)
			{
				var $element = $(this);
				setTimeout(function() { $element.keyup(); }, 100 );
			}
		);
		
		$(document).on
		(
			'keydown.simpleMask',
			'input[data-mask-ids="' + ids + '"]',
			function(e)
			{
				if (!e.ctrlKey)
				{
					if ( (e.keyCode >= 65) && (e.keyCode <= 90) )
					{
						if (!e.metaKey)
						{
							e.preventDefault();
						}
					}
				}
			}
		);
		$.fn.simpleMask.applyMask(comp);
	};

})( jQuery );