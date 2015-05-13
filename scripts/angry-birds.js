//generate a random number within a range
function randomXToY(minVal,maxVal,floatVal)
{
  var randVal = minVal+(Math.random()*(maxVal-minVal));
  return typeof floatVal=='undefined'?Math.round(randVal):randVal.toFixed(floatVal);
}

// The Ball class
Ball = (function() {
  
  // constructor
  function Ball(x,y,radius,color,img, ht){
    this.center = {x:x, y:y};  
    this.radius = radius;               
    this.color = color;
    this.img = img;
    this.ht = ht;
    this.dx = 2;               
    this.dy = 2;        
    this.boundaryHeight = $('#ground').height();
    this.boundaryWidth = $('#ground').width();

    this.dom  = $('<img class="circle"/>').appendTo('#ground');
    
    // If this.ht is truthy
    //  set a "height" attribute on the img we just create above, with a value equal to "this.ht"
    if(this.ht){
      this.dom.attr('height', this.ht);
    }

    // the rectange div a circle
    this.dom.attr('src', this.img);
    
         
    this.placeAtCenter(x,y);         
  }
  
  // Place the ball at center x, y
  Ball.prototype.placeAtCenter = function(x,y){
    this.dom.css({top: Math.round(y- this.radius), left: Math.round(x - this.radius)});
    this.center.x = Math.round(x);        
    this.center.y = Math.round(y);             
  };

  Ball.prototype.setColor = function(color) {
    if(color) {
      this.dom.css('background',color);
    } else {
      this.dom.css('background',this.color);
    }           
  };

  // move and bounce the ball
  Ball.prototype.move = function(){
    var diameter = this.radius * 2;                                               
    var radius = this.radius;  
    if (this.center.x - radius < 0 || this.center.x + radius > this.boundaryWidth ) {
      this.dx = -this.dx;
    }
    if (this.center.y - radius < 0 || this.center.y  + radius > this.boundaryHeight ) {
      this.dy = -this.dy;
    }
    this.placeAtCenter(this.center.x + this.dx ,this.center.y +this.dy);

  };
  
  
  
  return Ball;
})();

var IMAGES = [
  {img: 'images/angrybluebird.png', radius: 75, ht: 100},
  {img: 'images/angrygreenbird.png', radius: 38, ht: 100},
  {img: 'images/angryredbird.png', radius: 53, ht: 100},
  {img: 'images/angrywhitebird.png', radius: 25, ht: 100},
  {img: 'images/therealmarvin.png', radius: 40, ht: 300}
];

//var number_of_balls = 3;
var  balls = [];   
               
$('document').ready(function(){
  for (i = 0; i < IMAGES.length; i++) { 
    var boundaryHeight = $('#ground').height();
    var boundaryWidth = $('#ground').width();
    var y = randomXToY(30,boundaryHeight - 50);
    var x = randomXToY(30,boundaryWidth - 50);
    // var radius = randomXToY(15,30);
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    balls.push(new Ball(x,y,IMAGES[i].radius, randomColor, IMAGES[i].img, IMAGES[i].ht)); 
  }
  loop(); 
});
  


loop = function(){
  for (var i = 0; i < balls.length; i++){
    balls[i].move();
  }
  
  setTimeout(loop, 8);    
};
