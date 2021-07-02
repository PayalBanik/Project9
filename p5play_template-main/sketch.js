
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  
  if (keyIsDown(DOWN_ARROW)) {
    background("red");
  }
  if (keyIsDown(UP_ARROW)) {
    background("black");
  }
}




