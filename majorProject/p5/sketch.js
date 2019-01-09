// Major Project
// Eimear
// 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//music
//sprites p5.play
// create backgrounds

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

  newDanielle = createSprite(400, 800);
  newDanielle.addAnimation("test","assets/danielleOne.png");
  newDanielle.addAnimation("fight", "assets/danielleTwo.png");
  newDanielle.setCollider("rectangle", 0, 0, 25, 25);

  newSecond = createSprite(1600, 800);
  newSecond.addAnimation("test", "assets/sprite_0.png");
  newSecond.addAnimation("fight", "assets/sprite_1.png");
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
    block();

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
    drawSprite(playButton);
    menu();
  }
}

function menu(){
  playButton = createSprite(width/2, height/2);
  playButton.addAnimation("not pressed", "assets/play_0.png");
  playButton.addAnimation("pressed", "assets/play_1.png");
  playButton.setCollider("rectangle", 0, 0, 25, 25);

  // if mouse overlap/collide
  //change addAnimation
  // if mouse pressed
  //state = 1;

  if (playButton.mouseIsOver){
    playButton.changeAnimation("pressed");
    if (mouseIsPressed){
      state = 1;
    }
  }


  }





function fight(){
  //danielle fight
  if (key === "m"){
    newDanielle.changeAnimation("fight");
    if (newDanielle.collide(newSecond)){
      newSecondHealth -= 1;
    }
  }

  else{
    newDanielle.changeAnimation("test");
  }
  //second fight
  if (key === "l"){
    newSecond.changeAnimation("fight");
    if (newSecond.collide(newDanielle)){
      newDanielleHealth -= 1;
    }
  }
  else{
    newSecond.changeAnimation("test");
  }
}

function block(){
  //second block
  if (key === "k"){
    newSecond.changeAnimation("fight");
    if(newDanielle.collide(newSecond)){
      newDanielle.position.x -= 20;
    }
  }
  else{
    newSecond.changeAnimation("test");
  }
  //danielle block
  if (key === "n"){
    newDanielle.changeAnimation("fight");
    if(newSecond.collide(newDanielle)){
      newSecond.position.x += 20;
    }
  }
  else{
    newDanielle.changeAnimation("test");
  }
}

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
