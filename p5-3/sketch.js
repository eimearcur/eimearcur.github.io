// Interactive Scene Project
// Eimear Currie
// Sept. 24/18
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let plane;
let planeHeight;

function preload(){
  plane = loadImage("assets/airplane.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  planeHeight = height/2;
}

function draw() {
  background(84, 229, 255);
  sky();
  image(plane, mouseX, planeHeight);
}

function wall(){
  // function to make the plane not exit the screen
  if (planeHeight > height - plane.height){
    planeHeight -= 50;
  }
  else if (planeHeight < 0){
    planeHeight += 50;
  }
}

function keyPressed(){
  // move the plane up and down using the arrow keys
  if (keyCode === UP_ARROW){
    planeHeight -= 50;
  }
  else if (keyCode === DOWN_ARROW){
    planeHeight += 50;
  }
  wall();
}

function sky(){
  //changes the color of the sky when the mouse button is held down
  if (mouseIsPressed){
    background(9, 69, 165);
  }
}
