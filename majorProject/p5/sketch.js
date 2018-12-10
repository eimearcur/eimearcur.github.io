// Major Project
// Eimear
// 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// class PlayerOne {
//   constructor(){
//     this.x = width/2;
//     this.y = width/2;
//     this.dx = 5;
//     this.dy = 5;
//     this.color = color(255, 0, 0);
//     this.size = 100;
//   }
//   display(){
//     fill(this.color);
//     rect(this.x, this.y, this.size, this.size);
//   }
//   update(){
//     if(keyIsDown(39)){ //RIGHT ARROW
//       this.dx ++;
//     }
//     if(keyIsDown(37)){ //LEFT ARROW
//       this.dx --;
//     }
//   }
// }

let playerOne, playerTwo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // playerOne = new PlayerOne();
  playerOne = {
    x: 0,
    y:height/2,
    dx: 10,
    dy: 10,
    size: 100,
    color: color(255, 0, 0),
  };
  playerTwo = {
    x: width - 100,
    y:height/2,
    dx: 10,
    dy: 10,
    size: 100,
    color: color(0, 0, 255),
  };
}

function draw() {
//   playerOne.display();
//   playerOne.update();
  background(255);
  noStroke();
  fill(playerOne.color);
  rect(playerOne.x, playerOne.y, playerOne.size, playerOne.size);
  movePlayerTwo();
  movePlayerOne();
  fill(playerTwo.color);
  rect(playerTwo.x, playerTwo.y, playerTwo.size, playerTwo.size);

}

function movePlayerTwo(){
  if(keyIsDown(39)){
    playerTwo.x += playerTwo.dx;
  }//right arrow
  if(keyIsDown(37)){ //left key
    playerTwo.x -= playerTwo.dx;
 }
}


 function movePlayerOne(){
   if(keyIsDown(68)){
     playerOne.x += playerOne.dx;
   }//d
   if(keyIsDown(65)){ //a
     playerOne.x -= playerOne.dx;
   }
 }
