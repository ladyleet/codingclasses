// // variable declaration with initialization
// var z = "words";
// // plus operator
// var sum = 9 + 6;
// // minus operator
// var difference = 23 - 9;
// // product operator
// var product = 4 * 6;
// // divisor operator
// var quotient = 9 / 3;
// // modulo or modulus operator
// // remainder should be non-negative integer
// var remainder = 15 % 3;
// // increment operator */
// var increment = 0;
// increement = increment++;
// // equal to:
// increment = increment + 1;
// increment = ++increment; //1
// // decrement operator
// var decrement = 0;
// decrement = decrement --;
// // equal to
// decrement = decrement - 1;
// decrement -= 1;
// decrement--;
// var parentheses = (9 + 2) * 7;
// var error = "An error was thrown";
// for (var i = 1; i < 3; i=i+1) {
// alert ("i"+i);
// }
// alert(error); // "An error was thrown"
// alert("an error was thrown");
// var input = prompt("Today is what weekday?");
// //captures boolean from user
// var input = prompt("Would you like ice cream? Enter yes or no");
// if(input[0].toLowerCase() === "y"){
// 	alert("I gave you ice cream");
// }
// else if (input[0].toLowerCase() === "n"){
// 	alert("fine, no ice cream for you");
// }
// else {
// 	alert("fine, no ice cream for you");
// }
// switch(input[0].toLowerCase()){
// }
// for(var i = 0;i < 10; i++){
// 	console.log(i);
// }
// If a number is divisible by three, print fizz
// If a number is divisible by five, print buzz
// if a number is divisible by three and five, print fizzbuzz
// 	else , print the number
// 1-100
// print 1-100
// for(var i=0; i<101; i++)
// {
// console.log(i);
// }
// // my way
// for(var i = 0; i <= 100; i++)
// if (!i%3 === 0 && i%5 === 0){
// console.log(i+" fizzbuzz");
// }
// else if (!i%3 === 0){
// console.log(i+" fizz");
// }
// else if (!i%5 === 0){
// console.log(i+" buzz");
// }
// else {
// console.log(i);
// }

// // the right way
// var display = [];
// for(var i = 0; i <= 100; i++)
// if (i%3 === 0 && i%5 === 0){
// display.push(i+" fizzbuzz");
// }
// else if (i%3 === 0){
// display.push(i+" fizz");
// }
// else if (i%5 === 0){
// display.push(i+" buzz");
// }
// else {
// display.push(i);
// }
// alert(display);
// // another way
// var display=[];
// for (i=1; i<101; i++){
// var fizz = i % 3 === 0;
// var buzz = i % 5 === 0;
// if (fizz && buzz){
// display = "fizzbuzz";
// }
// else if (fizz){
// display = "fizz";
// }
// else if (buzz){
// display = "buzz";
// }
// else {
// display = i;
// }
// console.log(display);
// }
// //
// var arr = [4, "words", true, console.log];
// var input = prompt("input info");
// var b = "strawberries";
// arr.push(input);
// // arr.pop();
// // arr.shift();
// // arr.unshift(b);
// console.log(arr);
// // var copy = arr.slice(0,3);
// // console.log(copy);
// var removethings = arr.splice(1,0, "THESE THINGS");
// console.log(arr);
// //
// var input1 = prompt
// var inputArray1 = [];
// // add to array
// var input2 = prompt ("take more user input");
// var inputArray2 = [];
// // remove last entry
// inputArray2.pop();
// // add to array
// inputArray.push(input2);
// get user information and add all the information to an array. then, print out a popup window relaying back the info.

window.onload = function(){
var answer = prompt("Do you like dogs, cats, or birds?");

// if (answer.toLowerCase() === ("dogs" || "dog" || "doggies" || "doggy"));
if (["dog", "doggies", "doggy", "puppy", "dogs"].indexOf(answer.toLowerCase()) >=0)
{
alert("We love dogs too! Here is a cute dog picture!");
window.location ="http://images2.fanpop.com/image/photos/13200000/Cute-Dog-dogs-13286656-1024-768.jpg";
}
// else if (answer.toLowerCase() === ("cats" || "cat" || "kitties" || "kitty"))
else if (["cat", "cats", "kitty", "kitties", "kittens"].indexOf(answer.toLowerCase()) >=0)
{
alert("We love kitties too! Here is a cute cat picture!");
window.location ="http://cdn2.hellogiggles.com/wp-content/uploads/2014/07/22/you-popular-cute-cat-the-very-creative_113506.jpg";
}
else if (["birds","bird", "birdies"].indexOf(answer.toLowerCase()) >=0 ) 	
{
alert("We love birdies too! Here is a cute bird picture!");
window.location ="http://www.pageresource.com/wallpapers/wallpaper/yellow-bird_652771.jpg";
}
else {
alert("We can't figure out what you like, so you're getting them all!");
window.location ="http://cdn.animals-pics.com/pictures/www.emergency-pac.com/site/wp-content/uploads/2011/10/german-shepard.png";
}
};