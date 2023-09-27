// JavaScript Document

function updateName()
{
	// Set the new customer's name into local storage and
 	// redisplay the guest area using "set Guest" function
	
	localStorage.setItem("guestName", document.getElementById("guestName").value);
	var guestName = localStorage.getItem("guestName");
}

function clearName()
{
 // reset the customer's name to nothing and
 // redisplay the guest area using "set Guest" function
		localStorage.removeItem("guestName");
		setGuest();
}

function setGuest()
{
	// if the customer has not signed in, then call them "guest" 
	// and give them a text box and button to sign in with.
	setNav();
	var guestName = localStorage.getItem("guestName");
	if (guestName == null || guestName == "")
	{
		var guestWelcome = ('<p><strong>Welcome Guest!<br>Please enter your name:</strong><form name="guestForm" id="guestForm" method="post"><input type="text" name="guestName" id="guestName"><input type="submit" value="Sign In" onclick="updateName()"></form></p>');
	}

	
	// if the customer already signed in, welcome them by name 
	// and give them a buttom to sign out with. 
	else
	{
		var guestWelcome = ('<p><strong>Welcome<br>' + guestName +'!</strong><form name="guestSignOut" id="guestSignOut" method="post"><input type="submit" value="Sign Out" onclick="clearName()"></form></p>');	
		
	}
	
	// Place all of these items in the given "guest area" div.
	document.getElementById('divGuestArea').innerHTML = guestWelcome;
}

function guestName()
{
var guestName = localStorage.getItem("guestName");
document.getElementById('txtName').value = guestName;

}

