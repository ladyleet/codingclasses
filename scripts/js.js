// // var myElement = document.getElementById(“someId”)
// // - this is a handle to that place in the dom
// // var myListItems = document.getElementsByTagName(“li”);
// // If no elements, array will be empty
// // myListItems[0];

// // var myElement = document.getElementById("myElement");
// // var myNewElement = document.createElement("p");


// // var myText = document.createTextNode("New paragraph text");

// // myElement.appendChild(myText);

// // var newHeading = document.createElement("h1");

// // newHeading.innerHTML = "Did you know";

// // document.getElementById("myElement").appendChild(newHeading);

// //
// var myElement = document.getElementById("myElement");
// var newText = document.createTextNode("This is next text");
// document.getElementById("myElement").appendChild(newText);

// var addImageHere = document.getElementById("addImageHere");
// var imageHere = document.createTextNode("http://placehold.it/50x50");
// document.getElementById("addImageHere").appendChild(imageHere);

// var newHeading = document.createElement("h1");
// var newParagraph = document.createElement("p");

// var h1Text = document.createTextNode("Did you know?");
// var paraText = document.createTextNode("Lalallalalalal hipster ipsum la");

// newHeading.appendChild(h1Text);
// newHeading.appendChild(paraText);

// document.getElementById("addIt").appendChild(newHeading);
// document.getElementById("addIt").appendChild(paraText);


// var addInfoIntoList = document.createElement("li");
// var secondItem = listTest.getElementsByTagName("li")[1];
// var listText = document.createTextNode("this is the added list item");
// secondItem.appendChild(listText);
// listTest.insertBefore(li, secondItem);

// element.event = function(){}
// document.addEventListener('click', myFunction, false);

// function prepareEventHandlers() {
// 	var clickedIt = document.getElementById("clicked");
// 	clickedIt.onclick = function() {
// 		alert("You clicked!");
// 	};

// }

// //
// window.onload = function() {
// 	//prep anything we need to
// 	prepareEventHandlers();
// }

// onblur onfocus

var emailField = document.getElementById("emailForm");

emailField.onfocus = function(){
	if (emailField.value === "Enter Email"){
		emailField.value = "";
	}
};

emailField.onblur = function(){
	if (emailField.value === ""){
		emailField.value = "Enter Email";
	}
};

// timeouts
// function simpleMessage(){
// 	alert("Wahoo! It worked!");
// }

// setTimeout(simpleMessage,5000);

// images

var myImage = document.getElementById("imageChange");
var imageArray = ["http://placehold.it/100x50", "http://placehold.it/50x250", "http://placehold.it/520x50"];

var imageIndex = 0;

function changeImage(){
	myImage.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

var intervalHandle = setInterval(changeImage, 2000);
myImage.onclick = function(){
	clearInterval(intervalHandle);
}






