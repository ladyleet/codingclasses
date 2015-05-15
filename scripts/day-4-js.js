function calculatePowerOfTwo(form/*"number" from user*/) {
	var number = parseInt(form.inputInteger.value, 10); //12
	
	var outputElement = $('input[name="displayResults"]');
	if (number % 2 === 0) {
		outputElement.val('LOLOL');
	}
	else {
		outputElement.val('QQ');
	}
}
