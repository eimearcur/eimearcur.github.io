// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
    createCanvas(400, 400);
    background(255);
}

function draw() {
  if (mouseIsPressed){
      if (keyIsDown(82)){
    	rect(mouseX,mouseY,50,50);
    }
    if(keyIsDown(69)){
        ellipse(mouseX, mouseY, 50, 50);
    }


  }

  else if (keyIsDown(87)){
    background(255);

  }

  else if(keyIsDown(66)){
    background(0);
  }

}
