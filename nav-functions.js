// JavaScript Document - Nav Function


function setNav()
{
	var currentPage = location.href;
	if (currentPage.includes("index.html"))
	{
	var nav = ('<form id="navform" name="navform" method="post"><p>Choose a page to visit:<br><br><select name="select" id="select" onchange="location.assign(this.value)"><option value="index.html" selected="selected">Home</option><option value="shop.html">Shop</option><option value="cart.html">Cart</option><option value="checkout.html">Checkout</option></select></p></form>');
	}
	if (currentPage.includes("shop.html"))
	{
	var nav = ('<form id="navform" name="navform" method="post"><p>Choose a page to visit:<br><br><select name="select" id="select" onchange="location.assign(this.value)"><option value="index.html">Home</option><option value="shop.html" selected="selected">Shop</option><option value="cart.html">Cart</option><option value="checkout.html">Checkout</option></select></p></form>');
	}
	if (currentPage.includes("cart.html"))
	{
	var nav = ('<form id="navform" name="navform" method="post"><p>Choose a page to visit:<br><br><select name="select" id="select" onchange="location.assign(this.value)"><option value="index.html">Home</option><option value="shop.html">Shop</option><option value="cart.html" selected="selected">Cart</option><option value="checkout.html">Checkout</option></select></p></form>');
	}
	if (currentPage.includes("checkout.html"))
	{
	var nav = ('<form id="navform" name="navform" method="post"><p>Choose a page to visit:<br><br><select name="select" id="select" onchange="location.assign(this.value)"><option value="index.html">Home</option><option value="shop.html">Shop</option><option value="cart.html">Cart</option><option value="checkout.html" selected="selected">Checkout</option></select></p></form>');
	}	
	if (currentPage.includes("confirm.html"))
	{
	var nav = ('<form id="navform" name="navform" method="post"><p>Choose a page to visit:<br><br><select name="select" id="select" onchange="location.assign(this.value)"><option value="index.html">Home</option><option value="shop.html">Shop</option><option value="cart.html">Cart</option><option value="checkout.html">Checkout</option><option value="confirm.html" selected="selected">Confirm</option></select></p></form>');
	}
	if (currentPage.includes("thankyou.html"))
	{
	var nav = ('<form id="navform" name="navform" method="post"><p>Choose a page to visit:<br><br><select name="select" id="select" onchange="location.assign(this.value)"><option value="index.html">Home</option><option value="shop.html">Shop</option><option value="cart.html">Cart</option><option value="checkout.html">Checkout</option><option value="confirm.html">Confirm</option><option value="thankyou.html" selected="selected">Thank You</option></select></p></form>');
	}
	document.getElementById('divNavArea').innerHTML = nav;
}
function setSideBarHome()
{
	setNav();
	setGuest();
	setSideBarCart();
}
function setSideBar()
{
	setNav();
	setGuest();
	setSideBarCart();
}

function setSideBarCheckOut()
{
	setNav();
	setGuest();
	setSideBarCart();
	load_data();
	guestName();
}
function setConfirm()
{
	setNav();
	setGuest();
	setSideBarCart();
	displayReceipt();
}
function setThankYou()
{
	displayReceipt();
	finalPurchase();
}
