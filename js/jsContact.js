// JavaScript Document

function check(){
	if(checkName() == 1 && checkEmail() == 1 && checkPhone() == 1 && checkAddress() == 1)
	   {
	   		alert('Thank you for your visit');
		   return true;
		  
	   }
	else {
		alert('Wrong information');
		 return false;
	}
	
	
	
}

function checkName() {

    var name = document.getElementById('name');
    var filter = /^[A-Za-z\s]+$/;
	
	if (!filter.test(name.value))
	{
		return 0;
	}
	else {return 1;}
 }

function checkEmail() {

    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
		return 0;
	}
	else {
		return 1;}
}

function checkPhone() {

    var phone = document.getElementById('phone');
    var filter = /^([0-9]{10,11})+$/;
	
	if (!filter.test(phone.value))
	{
		return 0;
	}
	else {return 1;}

 }

//function checkAddress() {   //^([A-Z0-9\/\-])+([a-zA-Z0-9\/\.\,\s])+$
//
//    var add = document.getElementById('address');
//    var filter = /\w/gi;
//
//    if (!filter.test(add.value)) {
//		return 0;
//	}
//	else {return 1;}
//}