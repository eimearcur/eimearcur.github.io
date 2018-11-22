// bouncing ball
// eimear
// oct.22 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);

  for (let i =0; i < ballArray.length; i ++){

    ballArray[i].x += ballArray[i].dx;
    ballArray[i].y += ballArray[i].dy;

    if (ballArray[i].x > width - ballArray[i].radius || ballArray[i].x < 0 + ballArray[i].radius){
      ballArray[i].dx *= -1;
    }

    if (ballArray[i].y > height- ballArray[i].radius || ballArray[i].y <0 + ballArray[i].radius){
      ballArray[i].dy *= -1;
    }

    fill(random(255), random(255), random(255));

    ellipse(ballArray[i].x, ballArray[i].y, ballArray[i].radius * random(2, 10), ballArray[i].radius *random(2, 10));
  }

}

function mousePressed(){
  let ball = {
    x: mouseX,
    y: mouseY,
    radius: 25,
    dx: random(-5,5),
    dy: random(-5,5),
  };
  ballArray.push(ball);
}
