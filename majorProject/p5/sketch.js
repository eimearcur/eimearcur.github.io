// Major Project
// Eimear
// 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//music
//sprites p5.play
// create backgrounds

//change animation so something different happens when block happens, rn theyre both for fight

// change fight functio

let newDanielle;
let newSecond;
let backgroundImage;
let newDanielleHealth = 100;
let newSecondHealth = 100;
let state = 0;
let hit = false;
let playButton;

function preload(){

  backgroundImage = loadImage("assets/backgroundGameImage.png");

  playButton = loadImage("assets/play_0.png");

  newDanielle = createSprite(400, 800);
  newDanielle.addAnimation("test","assets/danielleOne.png"); //stand
  newDanielle.addAnimation("fight", "assets/danielleTwo.png"); //fight
  //newDanielle.addAnimation("block", "assets/danielle_1.png");
  newDanielle.setCollider("rectangle", 0, 0, 25, 25);

  newSecond = createSprite(1600, 800);
  newSecond.addAnimation("test", "assets/sprite_0.png");
  newSecond.addAnimation("fight", "assets/sprite_1.png");
//  newSecond.addAnimation("block", "assets/second_0.png");
  newSecond.setCollider("rectangle", 0, 0, 25, 25);



}

function setup() {
  createCanvas(2000, 986);
  objects = new Group();
}

function draw() {
  if (state === 1) {
    background(backgroundImage);

    movePlayerTwo();
    movePlayerOne();
    fight();
    //block();

    textSize(50);
    fill(255, 0, 0);
    text(newDanielleHealth, 100, 100);
    text(newSecondHealth, 1800, 100);

    drawSprite(newDanielle);
    drawSprite(newSecond);
    objects.add(newDanielle);
    objects.add(newSecond);
    newSecond.bounce(newDanielle);
    newDanielle.bounce(newSecond);
  }
  else {
    background(0);
    menu();
  }
}

function menu(){
  //title

  //chose character

  //chose background

  // play button
  image(playButton, 500, 200);
  hit = collidePointRect(mouseX, mouseY, 500, 200, playButton.width, playButton.height);

  if (hit){
    if(mouseIsPressed){
    state = 1;
  }
}
}

function fight(){
  if (newDanielle.collide(newSecond)){
    if (key === "n"){
      newDanielle.changeAnimation("fight");
      newSecondHealth -= 1;

    }
    else if (key === "m"){
      newDanielle.changeAnimation("fight");
      newSecond.position.x += 20;
    }
  }
}


//
// function fight(){
//   //danielle fight
//   if (key === "m"){
//     newDanielle.changeAnimation("fight");
//     if (newDanielle.collide(newSecond)){
//       newSecondHealth -= 1;
//     }
//
//   else if (key === "n"){
//     newDanielle.changeAnimation("fight");
//     if (newDanielle.collide(newSecond)){
//       newDanielle.position.x -= 20;
//
//   }
// }
// }
//
//   else{
//     newDanielle.changeAnimation("test");
//   }
//   //second fight
//   if (key === "l"){
//     newSecond.changeAnimation("fight");
//     if (newSecond.collide(newDanielle)){
//       newDanielleHealth -= 1;
//     }
//   }
//   else{
//     newSecond.changeAnimation("test");
//   }
//
//   if (newSecondHealth <= 0){
//     background(0);
//   }
// }

// function block(){
//   //second block
//   if (key === "k"){
//     newSecond.changeAnimation("fight");
//     if(newDanielle.collide(newSecond)){
//       newDanielle.position.x -= 20;
//     }
//   }
//   else{
//     newSecond.changeAnimation("test");
//   }
//   //danielle block
//   if (key === "n"){
//     newDanielle.changeAnimation("fight");
//     if(newSecond.collide(newDanielle)){
//       newSecond.position.x += 20;
//     }
//   }
//   else{
//     newDanielle.changeAnimation("test");
//   }
// }

function movePlayerTwo(){
  if(keyIsDown(39)){
    newSecond.position.x += 5;
  }//right arrow
  if(keyIsDown(37)){ //left key
    newSecond.position.x -= 5;
  }
}

function movePlayerOne(){
  if(keyIsDown(68)){
    newDanielle.position.x += 5;
  }//d
  if(keyIsDown(65)){ //a
    newDanielle.position.x -= 5;
  }
}
