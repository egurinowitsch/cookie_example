// JavaScript Document
//set up variables to store prices of chosen items
var shirt_price=0;
var pants_price=0;

onload=init;

function init(){
	updateCart();
	document.getElementById("shirt_btn_1").onclick= function(){sh1()};
	document.getElementById("shirt_btn_2").onclick= function(){sh2()};
	//console.log("init");	
	//try ro store a name/value pair on user's computer
	//in a cookie
	//document.cookie = "user_name=Bernice; expires=Thu, 6 Sept 2012 20:47:11 UTC; path=/";
	
	//document.cookie = "fav_color=blue; expires=Thu, 6 Sept 2012 20:47:11 UTC; path=/";
	//createCookie("shoe_size",8,2);
	//console.log(document.cookie);		
}
function updateCart(){
	//console.log("updateCart");
	console.log(readCookie("shirt_name"));
	//SHIRT section//////////////////
	//if user chose red shirt...
	if(readCookie("shirt_name")=="Red shirt"){
		
		//have name, price, and image of red shirt appear in cart.
		document.getElementById("cart_shirt_name")
		.innerHTML="Red shirt";	
		document.getElementById("cart_shirt_image")
		.innerHTML="<img src=\"img/shirt_small1.jpg\"/>";
		shirt_price=15.99;
		document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large1.png\"/>";
		
		//document.getElementById("cart_shirt_price").innerHTML="$"+shirt_price;	
	}
	//if user chose green shirt...
	else if(readCookie("shirt_name")=="Green shirt"){
		
		document.getElementById("cart_shirt_name")
		.innerHTML="Green shirt";	
		document.getElementById("cart_shirt_image")
		.innerHTML="<img src=\"img/shirt_small2.jpg\"/>";
		shirt_price=16.99;
		document.getElementById("comp_shirt_layer").innerHTML="<img src=\"img/shirt_large2.png\"/>";
		//document.getElementById("cart_shirt_price").innerHTML="$"+shirt_price;	
	}
		document.getElementById("cart_shirt_price").innerHTML="total: $"+shirt_price;
		//have name, price, and image of green shirt appear in cart.
		
		//pants section
		
		//end pants section
		document.getElementById("cart_total").innerHTML="total:$"+(shirt_price+pants_price);
	}
function sh1(){
	//console.log("sh1");
	//they've clicked the red shirt, so store that.
	//0 days means cookie destroyed when browser closes.
	createCookie("shirt_name","Red shirt",0);
	updateCart();
	}
	
function sh2(){
	createCookie("shirt_name","Green shirt",0);
	updateCart();
	}
	