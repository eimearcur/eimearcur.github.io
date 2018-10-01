// Interactive Scene Project
// Eimear Currie
// Sept. 24/18
//
// Extra for Experts:
// - I created my own shape (a star) as well as added background music.

let plane;
let planeHeight;
let sky = '#2dd5ff';
let backgroundMusic;

function preload(){
  plane = loadImage("assets/airplane.png"); // airplane image
  backgroundMusic = loadSound("assets/planeSong.mp3"); // background music
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  planeHeight = height/2;
  backgroundMusic.loop(); // loops background music
}

function draw() {
  background(sky);
  image(plane, mouseX, planeHeight);
  star(); // draws star
}

function wall(){
  // function to make the plane not exit the screen when going up or down
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

function star(){
  // adds a star appear in the sky
  translate(width/10, height/5); // the coordinates that the star appears at
  noStroke();
  fill('#2dd5ff');
  beginShape();
  vertex(0, -50);
  vertex(14, -20);
  vertex(47, -15);
  vertex(23, 7);
  vertex(29, 40);
  vertex(0, 25);
  vertex(-29, 40);
  vertex(-23, 7);
  vertex(-47, -15);
  vertex(-14, -20);
  endShape(CLOSE); // connects a line through each vertex point, creating the shape
}

function mousePressed(){
  // changes the color of the sky when the mouse is pressed
  if (sky === '#2dd5ff'){
    sky = '#080084';
  }
  else{
    sky = '#2dd5ff';
  }
}
