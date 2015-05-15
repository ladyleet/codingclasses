// Check to see if a string is an email and return truth or false


// var invalidInputs = [",","^","(","[","]",")","$","#"];
// var email = prompt("Enter your email");

// function checkEmail(emailAddress){
// 	if ((emailAddress.indexOf("#")) > -1)
// 	{
// 		alert("Invalid email")
// 	}
// 	else {
// 		alert("Yay, valid email")
// 	}
// }
// checkEmail(email);

// function checkEmail(emailAddress) {
//     str.indexOf(invalidInputs) {
//     alert("Not a valid email address");

//  }


// http://www.codeproject.com/Tips/492632/Email-Validation-in-JavaScript 
function checkEmail(inputEmail) {

		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		return filter.test(inputEmail);

	}

function displayTheResult(emailIsValid){
	var displayResultsInput = $('input[name="displayResults"]');
	if (emailIsValid) {
		displayResultsInput.val('Good email!');
	} else {
		displayResultsInput.val('Bad email!');
	}
}
	

function validateEmail(){
	var emailEntered = $('input[name="email"]').val();
	var checkResult = checkEmail(emailEntered);
	displayTheResult(checkResult)
}


















