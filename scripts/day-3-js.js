

// var firstName = prompt ("This will be funny! What is your first name?").toLowerCase();
// var lastName = prompt ("What is your last name?").toLowerCase();
// var fullName = (firstName + " " +lastName);
// var newLastName = prompt ("What is the last name of the movie star you want to marry?").toLowerCase();
// var newLastNameCaps = (newLastName.slice(newLastName,0).toUpperCase())+(newLastName.slice(newLastName,1+search.length);
// alert(newLastNameWithCaps)); 
// var newFullName = fullName.replace(lastName,newLastName);
// alert("Here is your new name! "+newFullName);



var str = "I love nail polish. I love red nail polish and orange nail polish and yellow nail polish. I love rainbow nail polish.";
str.toLowerCase();

alert("Read this sentence and choose a word. I will tell you where the first and last instance of that word appear. Here is the sentence. "+"'" + str + "'");
var search = prompt ("What word do you want to choose? Here is the sentence again. " +str).toLowerCase();
var firstChar = str.indexOf(search);
var lastChar = str.lastIndexOf(search);
var displayFirst = str.slice(firstChar, firstChar + search.length);
alert("You chose the word " +displayFirst+" and it was located first at #" +firstChar +" and last at # "+lastChar+".");

// // --- //

// alert("Now, I am going to tell you how many instances of a word there are in this sentence");
// var search = prompt ("What word do you want to choose? Here is the sentence again. " +str).toLowerCase();
// var wordCount = str.indexOf(search);
// alert("There are "+wordCount+" instances of "+search+" in the sentence!");

