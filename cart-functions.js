// JavaScript Document - Cart Functions
// Set Varibles
var bubbliciousPrice = 1.79;
var bubbleYumPrice = 1.99;
var hubbaBubbaPrice = 2.25;
var juicyFruitStrawberry = 1.00;
var subTotal = 0;
taxRate = .08;
var bubbleGums = ["Bubblicious", "Bubble Yum", "Hubba Bubba", "Juicy Fruit"];
var quantities = [0, 0, 0, 0];
var products=[];
products[0] = { id : "q1", name: "Bubblicious", description : "Bubble Gum", price : bubbliciousPrice };
products[1] = { id : "q2", name: "Bubble Yum", description : "Bubble Gum", price : bubbleYumPrice };
products[2] = { id : "q3", name: "Hubba Bubba", description : "Premiere Bubble Gum", price : hubbaBubbaPrice };
products[3] = { id : "q4", name: "Juicy Fruit", description : "Strawberry Bubble Gum", price : juicyFruitStrawberry };
localStorage.setItem("bubbleGums", JSON.stringify(bubbleGums));

//Create Side Bar Cart
function setSideBarCart()
{
	var quantities = JSON.parse(localStorage.getItem("quantities"));

	if (quantities)
	{
		var totalQuant = 0;
		//alert('your cart is NOT empty test!!!!!!!!!'); 
		var sideBarCart = '<table class = "minicart" border="1"><tr><td id="headrow" colspan ="2"><img src="minicart.png" width="152" height="28" alt="Mini Cart"/> </td></tr>';
		for(var i=0; i<bubbleGums.length; i++)
		{

			if(quantities[i]>0)	
			{
				var sideBarCart = sideBarCart + '<tr><td>' + bubbleGums[i] + '</td><td id="totalcol">' + quantities[i] + '</td></tr>';

				var totalQuant = totalQuant + parseInt(quantities[i]);

			}
		}
		var sideBarCart = sideBarCart + '<tr id="totalrow"><td>Total Items:</td><td>' + parseInt(totalQuant) + '</td></tr><tr><td colspan = "2"> <strong><a href="cart.html">Go to Cart</a></strong> </td></tr></table>';

		document.getElementById('divCartArea').innerHTML = sideBarCart;
	
	}
	else
	{

		var emptyCartText = '<table class = "minicart" ><tr><td id="headrow" colspan ="2"><img src="minicart.png" width="152" height="28" alt="Mini Cart"/> </td></tr><tr><td colspan ="2" id="totalrow">Your Cart is Empty!</td></tr><tr><td><a href="shop.html">Click to<br>Buy Bubble Gum!</a></td></tr></table>';
		document.getElementById('divCartArea').innerHTML = emptyCartText;
	}



}


function addToCart(product)
{

	var quantity = document.getElementById(product).value;
	if (quantity > 0)
	{
		var i = product.charAt(1);
		i--;
		var quantities = JSON.parse(localStorage.getItem("quantities"));
		if(quantities)
		{
			var currentQuantity = quantities[i];
		}
		else
		{
			var currentQuantity = 0;
			var quantities = [0, 0, 0, 0];
		}

		quantities[i] = parseInt(currentQuantity) + parseInt(quantity);

		localStorage.setItem("quantities", JSON.stringify(quantities));
		setSideBarCart();	
	}
	else
	{
		alert('You must enter a value greater than zero!');
		return;
	}

	

}

function clearCart()
{
	localStorage.removeItem('quantities');
	location.reload();

}




function showCart()
{


	var quantities = JSON.parse(localStorage.getItem("quantities"));

	if (quantities)
	{

		var subTotal = 0;
		var cartTableDisplay = '<tr><th>Product</th><th>Description</th><th>Price</th><th>Quantity</th><th>Total</th><th> </th><th> </th></tr>';
		for(var i=0; i<bubbleGums.length; i++)
		{

			if(quantities[i]>0)	
			{
				cartTableDisplay = cartTableDisplay + '<tr id="productrows"><td>' + products[i].name + '</td><td>' + products[i].description + '</td><td>' + parseFloat(products[i].price).toFixed(2) + '</td><td>' + quantities[i] + '</td><td>' + parseFloat(quantities[i]*products[i].price).toFixed(2) + '</td><td><form><input type="number" min="1" max="200" name="cq' + i + '" id="cq' + i + '" class="cartquantity" value=""> <input type="button" value="Update Quantity" onclick="updateQuantity(' + i + ')"></form></td><td><form><input type="button" value="Remove" onclick="removeProduct(' + i + ')"></form> </td></tr>';
				var subTotal = subTotal + (quantities[i]*products[i].price);
				//alert(quantities[i]);

			}
		}

		cartTableDisplay = cartTableDisplay + '<tr><td id="subtotal" colspan = "5">Subtotal: $' + parseFloat(subTotal).toFixed(2) + '</td></tr>';
		localStorage.setItem("subTotal", parseFloat(subTotal));
		cartTableDisplay = cartTableDisplay + '<tr><td colspan = "5"><form><input type="button" value="Empty the Cart" onclick="clearCart()"> <input type="button" value="Continue Shopping" onclick="location.assign(\'shop.html\')"> <input type="button" value="Proceed to Checkout" onclick="location.assign(\'checkout.html\')"></form></td></tr>';
		document.write(cartTableDisplay);
		

	}
	else
	{

		var emptyCartText = '<table><tr><td colspan ="2"> <h2>Your Cart is Empty!</h2><p> <a href="shop.html">Click here to Continue Shopping!</a></p> </td></tr></table>';
		document.write(emptyCartText);
	}


}
function showCartReceipt()
{


	var quantities = JSON.parse(localStorage.getItem("quantities"));
	if (quantities)
		{


		var subTotal = 0;
		var cartTableDisplay = '<tr><th>Product</th><th>Description</th><th>Price</th><th>Quantity</th><th>Total</th></tr>';
		for(var i=0; i<bubbleGums.length; i++)
		{

			if(quantities[i]>0)	
			{
				cartTableDisplay = cartTableDisplay + '<tr id="productrows"><td>' + products[i].name + '</td><td>' + products[i].description + '</td><td>' + parseFloat(products[i].price).toFixed(2) + '</td><td>' + quantities[i] + '</td><td>' + parseFloat(quantities[i]*products[i].price).toFixed(2) + '</td></tr>';
				var subTotal = subTotal + (quantities[i]*products[i].price);
			}
		}
		cartTableDisplay = cartTableDisplay + '<tr><td id="subtotal" colspan = "5">Subtotal: $' + parseFloat(subTotal).toFixed(2) + '</td></tr>';
		localStorage.setItem("subTotal", parseFloat(subTotal));
		document.write(cartTableDisplay);
		}
	else
	{

		var emptyCartText = '<table><tr><td colspan ="2"> <h2>Your Cart is Empty!</h2><p> <a href="shop.html">Click here to Continue Shopping!</a></p> </td></tr></table>';
		document.write(emptyCartText);
	}	

}
function processOrder()
{

	var txtName = document.getElementById("txtName").value;
	localStorage.setItem("txtName", txtName);
	var emailAdd = document.getElementById("emailAdd").value;
	localStorage.setItem("emailAdd", emailAdd);
	var streetAdd = document.getElementById("streetAdd").value;
	localStorage.setItem("streetAdd", streetAdd);
	var city = document.getElementById("city").value;
	localStorage.setItem("city", city);
	var state = document.getElementById("state").value;
	localStorage.setItem("state", state);
	var zip = document.getElementById("zip").value;
	localStorage.setItem("zip", zip);
	var country = document.getElementById("country").value;
	localStorage.setItem("country", country);
	var shippingCost ='';
		for(var i=0; i<document.purchaseForm.shipping.length; i++)
		{
			if(document.purchaseForm.shipping[i].checked)
			{
				shippingCost=document.purchaseForm.shipping[i].value;			
			}
		}
	localStorage.setItem("shippingCost", shippingCost);
	var phoneNumber = document.getElementById("phoneNumber").value;
					localStorage.setItem("phoneNumber", phoneNumber);
	var subTotal = parseFloat(localStorage.getItem("subTotal"));
	var totalTax = subTotal * parseFloat(taxRate);
	localStorage.setItem("totalTax", totalTax);
	var total = subTotal + totalTax + parseFloat(shippingCost);	
	localStorage.setItem("total", total);
	var creditCard = document.purchaseForm.creditCard.value;
	localStorage.setItem("creditCard", creditCard);
	
	var creditCardNo = document.getElementById("creditCardNo").value;
	localStorage.setItem("creditCardNo", creditCardNo);
	
	var month = document.purchaseForm.month.value;
	localStorage.setItem("month", month);
	var year = document.purchaseForm.year.value;
	localStorage.setItem("year", year);
		
	var receiptLine1 = '<table class="finalReceiptTable"><tr><td>Name: ' + txtName + '</td></tr>';
	var receiptLine2 = '<tr><td>Email: ' + emailAdd + '</td></tr>';
	var receiptLine3 = '<tr><td>Street Address: ' + streetAdd + '</td></tr>';
	var receiptLine4 = '<tr><td>City: ' + city + '</td></tr>';
	var receiptLine5 = '<tr><td>State: ' + state + '</td></tr>';
	var receiptLine6 = '<tr><td>Zip Code: ' + zip + '</td></tr>';
	var receiptLine7 = '<tr><td>Country: ' + country + '</td></tr>';
	var receiptLine8 = '<tr><td>Phone Number: ' + phoneNumber + '</td></tr>';
	var receiptLine9 = '<tr><td>Credit Card: ' + creditCard + '</td></tr>'; 		
	var receiptLine10 = '<tr><td>Credit Card #: ' + creditCardNo + '</td></tr>';
	var receiptLine11 = '<tr><td>Credit Card Expiration Date: ' + month + '/' + year + '</td></tr></table>';
	
	
	var confirmReceipt = receiptLine1 + receiptLine2 + receiptLine3 + receiptLine4 + receiptLine5 + receiptLine6 + receiptLine7 + receiptLine8 + receiptLine9 + receiptLine10 + receiptLine11;
	localStorage.setItem("confirmReceipt", confirmReceipt);
}
function processConfirm()
{
	
	/* 	Backup Validation Code - Commentted out after solving HTML5 verification issue.
	var invalid = validateOrder();
	//alert('Invalid is = ' + invalid);
	if (invalid)
	{
	alert('Time to return');
		return false;
	}
	else 
	{  */

		var quantities = JSON.parse(localStorage.getItem("quantities"));
		if (quantities)
		{

				processOrder();

		}
		else
		{
				window.open("continue.html", "_parent", "toolbar=no,scrollbars=no,resizable=no,top=200,left=200,width=800,height=400");
		}
	//}

	
}

function displayReceipt()
{

	var confirmReceipt = localStorage.getItem("confirmReceipt");
	document.getElementById('finalReceipt').innerHTML = confirmReceipt;
}

function load_data() {

	document.purchaseForm.txtName.value = localStorage.getItem("guestName");
	document.purchaseForm.emailAdd.value = localStorage.getItem("emailAdd");
    document.purchaseForm.streetAdd.value = localStorage.getItem("streetAdd");
	document.purchaseForm.city.value = localStorage.getItem("city");
	document.purchaseForm.state.value = localStorage.getItem("state");	
	document.purchaseForm.zip.value = localStorage.getItem("zip");	
	document.purchaseForm.country.value = localStorage.getItem("country");	
	document.purchaseForm.phoneNumber.value = localStorage.getItem("phoneNumber");
	var shippingCost = localStorage.getItem("shippingCost");
	if( shippingCost != null ){
		for(var i=0; i<document.purchaseForm.shipping.length; i++)
		{
			if( document.purchaseForm.shipping[i].value == shippingCost )
			{
				document.purchaseForm.shipping[i].checked = true;
				break;
			}
		}
	} else {
		document.purchaseForm.shipping[0].checked = true;
	}
	document.getElementById("creditCard").value = localStorage.getItem("creditCard");
	document.purchaseForm.creditCardNo.value = localStorage.getItem("creditCardNo");
	document.getElementById("month").value = localStorage.getItem("month");
	document.getElementById("year").value = localStorage.getItem("year");
}

function finalPurchase()
{

	var guestName = localStorage.getItem("guestName");
	localStorage.clear();
	localStorage.setItem("guestName", guestName);
	
}

function removeProduct(i)
{
	var quantities = JSON.parse(localStorage.getItem("quantities"));
	quantities[i] = 0;
	// Checks to see if quantities array values are at zero, if so removes quantities array from local storage
	if (quantities[0] == 0 && quantities[1] == 0 && quantities[2] == 0 && quantities[3] == 0)//There has got to be better way to do this
	{
		localStorage.removeItem('quantities');
	}
	else
	{
		localStorage.setItem("quantities", JSON.stringify(quantities));
	}

	location.reload();
}

function updateQuantity(i)
{	
		
		var product = 'cq' + i;
		var newQuantity = document.getElementById(product).value;
	if (newQuantity > 0)
	{

		var quantities = JSON.parse(localStorage.getItem("quantities"));
		quantities[i] = newQuantity;
		if (quantities[0] == 0 && quantities[1] == 0 && quantities[2] == 0 && quantities[3] == 0)//There is got to be better way to do this
		{
			localStorage.removeItem('quantities');
		}
		else
		{
			localStorage.setItem("quantities", JSON.stringify(quantities));
		}
			location.reload();
	}
	else
	{
		alert('You must enter a value greater than zero!');
		location.reload();
		//return;
		
	}
}
function showFinalCartReceipt()
{
var quantities = JSON.parse(localStorage.getItem("quantities"));
	if (quantities)
		{


		var subTotal = 0;
		var cartTableDisplay = '<tr><th>Product</th><th>Description</th><th>Price</th><th>Quantity</th><th>Total</th></tr>';
		for(var i=0; i<bubbleGums.length; i++)
		{

			if(quantities[i]>0)	
			{
				cartTableDisplay = cartTableDisplay + '<tr id="productrows"><td>' + products[i].name + '</td><td>' + products[i].description + '</td><td>' + parseFloat(products[i].price).toFixed(2) + '</td><td>' + quantities[i] + '</td><td>' + parseFloat(quantities[i]*products[i].price).toFixed(2) + '</td></tr>';
				var subTotal = subTotal + (quantities[i]*products[i].price);
			}
		}
		cartTableDisplay = cartTableDisplay + '<tr><td colspan="4"></td><td id="bottomcell">Subtotal: $' + parseFloat(subTotal).toFixed(2) + '</td></tr>';
		localStorage.setItem("subTotal", parseFloat(subTotal));
	var totalTax = parseFloat(localStorage.getItem("totalTax"));
	cartTableDisplay = cartTableDisplay + '<tr><td colspan="4"></td><td id="bottomcell">Tax: $' + parseFloat(totalTax).toFixed(2) + '</td></tr>';
	var shippingCost = parseFloat(localStorage.getItem("shippingCost"));
	cartTableDisplay = cartTableDisplay + '<tr><td colspan="4"></td><td id="bottomcell">Shipping: $' + parseFloat(shippingCost).toFixed(2) + '</td></tr>';
	var total = parseFloat(localStorage.getItem("total"));
	cartTableDisplay = cartTableDisplay + '<tr><td colspan="4"></td><td id="bottomcell" >Total: $' + parseFloat(total).toFixed(2) + '</td></tr>';
		document.write(cartTableDisplay);
		}
	else
	{

		var emptyCartText = '<table><tr><td colspan ="2"> <h2>Your Cart is Empty!</h2><p> <a href="shop.html">Click here to Continue Shopping!</a></p> </td></tr></table>';
		document.write(emptyCartText);
	}	
}
