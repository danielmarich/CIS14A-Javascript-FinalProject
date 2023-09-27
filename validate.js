// JavaScript Document - Validate Checkout Form
	

function validateOrder()
{
		var requiredFields = document.getElementsByClassName('required');
		var blankFields = [];
		var invalid = 0;
		for( var i=0; i < requiredFields.length; i++)
		{
			if( requiredFields[i].value.length == 0 )   // see if field is blank 
			{

						blankField = 1;
						blankFields[i] = blankField;
			}
			else
			{
						blankField = 0;
						blankFields[i] = blankField;
			}
		}

		for( var i=0; i < requiredFields.length; i++)
		{
			if (blankFields[i] == 1)
				{
					requiredFields[i].style.border = 'solid 2px red';
					invalid = 1;
				}
			else
				{
				requiredFields[i].style.border = 'solid 1px gray';	
				}
		
		}
		if (invalid == 1)
		{
			var errorMessage = ('<p id="errormsg">*All Fields are Required! Please fill in required fields and try again.</p>');
			document.getElementById('errorMessage').innerHTML = errorMessage;
		}
else
{
			var errorMessage = ('<p>*All Fields are Required!</p>');
			document.getElementById('errorMessage').innerHTML = errorMessage;
}

	return invalid;
}			

