// // month
var monthInput = prompt("What is your birthday month? Please type out the entire month. Example: January");

if (["january", "february", "march","april", "may", "june", "july", "august", "september","october", "november", "december"].indexOf(monthInput.toLowerCase())>=0){
	confirm("Your birthday month is "+monthInput+"!");
}
else {
	alert("We didn't quite catch that! Did you type out the entire month? Oh well. Let's move on.");
};

// date
var dateInput = prompt("What is your birthday date? Please type out date. Example: 23");

var checkNumber = parseInt(dateInput);
if(checkNumber > 0 && checkNumber < 32){
	confirm("Your birthday date is " + dateInput + "!")
}
else {
	alert("We didn't quite catch that! Did you type out the entire date or enter in the right date? Example: 23. #dumb");
};

// // year
var yearInput = prompt("What is your birthday year? Please type out date. Example: 1990");

var checkNumber = parseInt(yearInput);
if(checkNumber > 0 && checkNumber < 2016){
	confirm("Your birthday year is " + yearInput + "!")
}
else {
	alert("We didn't quite catch that! Did you type out the entire year or enter in the right year? Example: 1990.");
};

//entire
alert("Your birthday is "+monthInput+" "+dateInput+", "+yearInput+"!")

// how do you loop a person back if they don't get it?
//how do you not print out if answers to all 3 (one of them are wrong)?
//how do you check for # of #s (ex 1984 has 4#s) or give a range of 1900-2015?




// if (dateInput === parseInt());

// var checkNumber = parseInt(input);
// if(checkNumber > 0){


// else {
// 	alert("We didn't quite catch that! Did you type out the entire date? Example: 23.");
// };



// var wayBackWhen = new Date(5);
// console.log(wayBackWhen);

// var monthWords =["Jan","Feb","May","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

// var date = new Date();
// var month = date.getMonth();
// var newMonth = monthWords[month];
// console.log("This month is "+newMonth);


// [0,1,2,3,4,5,6,7,8,9,10,11,12]
// 0 === Jan
// 1 ===
// if (month.["dog", "doggies", "doggy", "puppy", "dogs"].indexOf(answer.toLowerCase()) >=0)

// var date = new Date();
// console.log(date);
// var month = date.getMonth();
// console.log(month);
// var weekDay = date.getDay();
// console.log(weekDay);
// console.log(date, month, weekDay);