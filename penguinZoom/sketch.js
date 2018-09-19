// messing w images
// eimear currie
//sept 19 2018
//

let pengiun;
let scalar;

function preload(){
  penguin = loadImage("assets/penguin.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  scalar = 1.0;
}

function draw() {
  background(255);
  image(penguin, mouseX, mouseY, penguin.width * scalar, penguin.height * scalar );

}

function mouseWheel(event){
  if (event.delta > 0 && scalar < 2.5){
    scalar *= 1.1
  }
  else if (event.delta < 0 && scalar > 0.2){
    scalar *= 0.9
  }
  console.log(event);

}
