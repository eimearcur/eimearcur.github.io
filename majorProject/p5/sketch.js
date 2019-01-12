
// Major Project
// Eimear
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
let newSecond;
let backgroundImage;
let newDanielleHealth = 100;
let newSecondHealth = 100;
let state = 0;
let hit = false;
let playButton;

function preload(){

  backgroundImage = loadImage("assets/backgroundGameImage.png");

  font = loadFont("assets/ARCADECLASSIC.TTF");

  //menu background

  menuBackground = loadImage("assets/menubackground.jpg");

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

    movePlayerTwo();
    movePlayerOne();
    danielleFightBlock();
    secondFightBlock();

    textSize(50);
    fill(255, 0, 0);
    textFont(font);
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
    background(menuBackground);
    menu();
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
  image(playButton, 500, 200);
  hit = collidePointRect(mouseX, mouseY, 500, 200, playButton.width, playButton.height);

  if (hit && mouseIsPressed){

    state = 1;

}
}

function danielleFightBlock(){

    if (key === "n"){
      newDanielle.changeAnimation("fight");
      if (newDanielle.collide(newSecond)){
        newSecondHealth -= 1;
}
    }
    else if (key === "m"){

      newDanielle.changeAnimation("fight");
      if(newDanielle.collide(newSecond)){
      newSecond.position.x += 20;
    }
  }
    else{
      newDanielle.changeAnimation("test");
    }
  }

  function secondFightBlock(){

      if (key === "k"){
        newSecond.changeAnimation("fight");
        if (newSecond.collide(newDanielle)){
          newDanielleHealth -= 1;
  }
      }
      else if (key === "l"){

        newSecond.changeAnimation("fight");
        if(newSecond.collide(newDanielle)){
        newDanielle.position.x += 20;
      }
    }
      else{
        newSecond.changeAnimation("test");
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
