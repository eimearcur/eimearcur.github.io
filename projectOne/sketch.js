// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let y;
let dy;
let x;
let y;
let rectwidth;
let rectheight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  y = height/2;
  x = width/2
  dx = 5
  dy = 5;
  rectwidth = 50;
  rectheight = 50;

}

function draw() {
  background(9, 75, 160);
  y += dy;
  x += dx;

  if (y > width - rectheight || y < 0){
    dy = dy * -1;
  }

  }

  fill(255, 234, 53);
  rect(x, y, rectwidth, rectheight)





}
