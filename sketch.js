var box;
 function setup() {
   createCanvas(400,400);
   background(51)
   box=createSprite(200,200,30,30);
   box.shapeColor="black";

   //bgcolor="pink"
    // set bgcolor as pink
    bgcolor="pink"
 }
function draw() 
{

// add if condition to change bgcolor to purple when right arrow is pressed
if (keyIsDown(RIGHT_ARROW)){
//bgcolor="purple"
background("purple")
box.position.x= box.position.x +5; 
}

 
  if (keyIsDown(LEFT_ARROW)) { 
    background("red")
    box.position.x= box.position.x -5; }

   if (keyIsDown(UP_ARROW)) { 
    background("yellow")
    box.position.y= box.position.y -5;  }
  if (keyIsDown(DOWN_ARROW)) {
    background("orange") 
    box.position.y= box.position.y +5; }
 
drawSprites()
}




