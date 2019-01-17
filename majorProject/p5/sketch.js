
// Major Project
// Eimear Currie
// 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//music
//sprites p5.play
// create backgrounds

//download at school
// https://www.youtube.com/watch?v=WJRoRt155mA

//https://www.youtube.com/watch?v=h5zbCBkCEiE     //must crop into multiple sound effects



let newDanielle;
<<<<<<< HEAD
let soos;
let backgroundImage;
=======
let newSecond;
let backgroundImage, backgroundImageTwo, font, menuBackground, song1;
>>>>>>> bfb0e3c564234513cf0b3b7021a852e1cb2ebb64
let newDanielleHealth = 100;
let soosHealth = 100;
let state = 0;
let hit = false;
let playButton;
let danielle_dy = 5;
let second_dy = 5;


let sontaye;

function preload(){

  backgroundImage = loadImage("assets/backgroundGameImage.png");

  backgroundImageTwo = loadImage("assets/backgroundTwo.png");

  //song1 = loadSound("assets/playingBackgroundSong.mp3");

  font = loadFont("assets/ARCADECLASSIC.TTF");

  //menu background

  menuBackground = loadImage("assets/menubackground.jpg");

  playButton = loadImage("assets/play_0.png");

  newDanielle = createSprite(400, 800);
  newDanielle.addAnimation("test","assets/danielleOne.png"); //stand
  newDanielle.addAnimation("fight", "assets/danielleTwo.png"); //fight
  //newDanielle.addAnimation("block", "assets/danielle_1.png");
  newDanielle.setCollider("rectangle", 0, 0, 25, 25);

<<<<<<< HEAD
  alien = createSprite(400, 800);
  alien.addAnimation("test", "assets/alien_1.png");
  alien.addAnimation("test", "assets/alien_2.png");
  alien.setCollider("rectangle", 0, 0, 25, 25);


  soos = createSprite(1600, 800);
  soos.addAnimation("test", "assets/sprite_0.png");
  soos.addAnimation("fight", "assets/sprite_1.png");
//  soos.addAnimation("block", "assets/second_0.png");
  soos.setCollider("rectangle", 0, 0, 25, 25);

  sontaye = createSprite(1600, 800);
  sontaye.addAnimation("test", "assets/ghost_0.png");
  sontaye.addAnimation("fight", "assets/ghost_1.png");
  sontaye.setCollider("rectangle", 0, 0, 25, 25);
=======
  newSecond = createSprite(1600, 800);
  newSecond.addAnimation("test", "assets/sprite_0.png");
  newSecond.addAnimation("fight", "assets/sprite_1.png");
  //  newSecond.addAnimation("block", "assets/second_0.png");
  newSecond.setCollider("rectangle", 0, 0, 25, 25);
>>>>>>> bfb0e3c564234513cf0b3b7021a852e1cb2ebb64

  menuDanielle = loadAnimation("assets/danielleOne.png", "assets/danielleTwo.png");
  menuSecond = loadAnimation("assets/sprite_0.png", "assets/sprite_1.png");

}

function setup() {
  createCanvas(2000, 986);
  objects = new Group();


}

function draw() {
  if (state === 1) {
    background(backgroundImage);

    //song1.loop();


    movePlayerTwo();
    movePlayerOne();
    danielleFightBlock();
    secondFightBlock();
    danielleJump();
    secondJump();

    textSize(50);
    fill(255, 0, 0);
    textFont(font);
    text(newDanielleHealth, 100, 100);
    text(soosHealth, 1800, 100);

    drawSprite(newDanielle);
    drawSprite(soos);
    objects.add(newDanielle);
    objects.add(soos);
    soos.bounce(newDanielle);
    newDanielle.bounce(soos);
  }
  else if (state === 3){
    background(backgroundImageTwo);

    movePlayerTwo();
    movePlayerOne();
    danielleFightBlock();
    secondFightBlock();
    danielleJump();
    secondJump();

    textSize(50);
    fill(255, 0, 0);
    textFont(font);
    text(newDanielleHealth, 100, 100);
    text(soosHealth, 1800, 100);

    drawSprite(newDanielle);
    drawSprite(soos);
    objects.add(newDanielle);
    objects.add(soos);
    soos.bounce(newDanielle);
    newDanielle.bounce(soos);

  }
  else if (state === 0) {
    background(menuBackground);
    menu();
  }
  else if (state === 4){
    pickPlayers()
  }
  // else if (state === 5){
  //
  // }
  else if (state === 2){
    decision();
  }
}

function menu(){
  //title
  textSize(200);
  textFont(font);
  fill(0, 0, 255);
  text("SUPER  FIGHTER", 300, 300);
  textSize(50);
  text("By Eimear Currie", width/2, 100);

  //background song

  // image

    animation(menuDanielle, 200, 800);
    animation(menuSecond, 1600, 800);


  //chose character

  //chose background

  // play button
  image(playButton, 500, 100);
  hit = collidePointRect(mouseX, mouseY, 500, 100, playButton.width, playButton.height);

  if (hit && mouseIsPressed){

    state = 4;

}
}

function pickPlayers(){
  background(menuBackground);
  textFont(font);
  textSize(150);
  fill(0, 0, 255);
  text("CHOOSE  PLAYERS", 200, 300);

  if (key === "h"){
    state =2;
  }

  else if (key === "j"){
    textSize(100);
    fill(0,0,255)
    text("no", width/2, height/2);
  }
}

// function pickPlayerTwo(){
//   background(menuBackground);
//   textFont(font);
//   textSize(150);
//   fill(0, 0, 255);
//   text("CHOOSE  PLAYER  2", 200, 300);
//
//   if (key === "c"){
//     soos = soos;
//     state = 1;
//   }
//   else if (key === "v"){
//     soos = sontaye;
//     state =1;
//   }
//
//
//
// }

function decision(){
  background(menuBackground);
  textFont(font);
  textSize(150);
  fill(0, 0, 255);
  text("CHOOSE  YOUR  LOCATION", 200, 300);

  image(backgroundImage, 100, 600);
  image(backgroundImageTwo, 1000, 600, backgroundImageTwo.width/3, backgroundImageTwo.height/3);


// click on one

choiceOne = collidePointRect(mouseX, mouseY, 100, 600, backgroundImage.width, backgroundImage.height);

if (choiceOne && mouseIsPressed){
  state = 1;

}

choiceTwo = collidePointRect(mouseX, mouseY, 1000, 600, backgroundImageTwo.width, backgroundImageTwo.height);

if (choiceTwo && mouseIsPressed){
  state = 3;

}
}

function danielleFightBlock(){

    if (key === "e"){
      newDanielle.changeAnimation("fight");
      if (newDanielle.collide(soos)){
        soosHealth -= 1;
}
    }
    else if (key === "r"){

      newDanielle.changeAnimation("fight");
      if(newDanielle.collide(soos)){
      soos.position.x += 20;
    }
  }
    else{
      newDanielle.changeAnimation("test");
    }
  }

  function secondFightBlock(){

      if (key === "m"){
        soos.changeAnimation("fight");
        if (soos.collide(newDanielle)){
          newDanielleHealth -= 1;
  }
      }
      else if (key === "n"){

        soos.changeAnimation("fight");
        if(soos.collide(newDanielle)){
        newDanielle.position.x -= 20;
      }
    }
      else{
        soos.changeAnimation("test");
      }
    }


function movePlayerTwo(){
  if(keyIsDown(39)){
    soos.position.x += 5;
  }//right arrow
  if(keyIsDown(37)){ //left key
    soos.position.x -= 5;
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

// these 3 functions deal with jumping
function danielleJump(){
  newDanielle.position.y += danielle_dy;
  danielle_dy += 0.15;
  if (newDanielle.position.y >= 800){
    danielle_dy = 0;
  }
}

function secondJump(){
  soos.position.y += second_dy;
  second_dy += 0.15;
  if (soos.position.y >= 800){
    second_dy = 0;
  }
}


function keyPressed(){

  if (newDanielle.position.y >=800 ){
    if (keyCode === 32){
        danielle_dy -=9;
    }
  }
  if (soos.position.y >=800 ){
    if (keyCode === UP_ARROW){
        second_dy -=9;
}
}
}
