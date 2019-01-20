
// Major Project
// Eimear Currie
// Jan 21 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//music
//sprites p5.play
// create backgrounds



//https://www.youtube.com/watch?v=h5zbCBkCEiE     //must crop into multiple sound effects

//Player individual powers:
//Player one: When p1 jumps on p2, p2 gets pushed into the ground and has to jump multiple times to get back up (offense)
//Player two: p2 can jump extra high and almost fly (defense)



let newDanielle;
let newSecond;
let backgroundImage, backgroundImageTwo, font, menuBackground, song1;
let newDanielleHealth = 100;
let soosHealth = 100;
let state = 0;
let hit = false;
let refresh = false;
let playButton;
let danielle_dy = 5;
let second_dy = 5;






function preload(){

  backgroundImage = loadImage("assets/backgroundGameImage.png"); // first background image choice

  backgroundImageTwo = loadImage("assets/backgroundTwo.png");  // second background image choice


  //song1 = loadSound("assets/backgroundSong (2).mp3");

  font = loadFont("assets/ARCADECLASSIC.TTF");

  //menu background

  menuBackground = loadImage("assets/menubackground.jpg");

  playButton = loadImage("assets/play_0.png");


  //loads all information and animation for this sprite
  newDanielle = createSprite(400, 800);
  newDanielle.addAnimation("test","assets/danielleOne.png"); //stand
  newDanielle.addAnimation("fight", "assets/danielleTwo.png"); //fight
  newDanielle.addAnimation("death", "assets/danielleDeath.png")
  newDanielle.setCollider("rectangle", 0, 0, 150, 150);



  //loads all information and animation for this sprite
  soos = createSprite(1600, 800);
  soos.addAnimation("test", "assets/sprite_0.png");
  soos.addAnimation("fight", "assets/sprite_1.png");
  soos.addAnimation("death", "assets/soosDies.png");
  soos.setCollider("rectangle", 0, 0, 150, 150);


  //loads menu animatins
  menuDanielle = loadAnimation("assets/danielleOne.png", "assets/danielleTwo.png");
  menuSecond = loadAnimation("assets/sprite_0.png", "assets/sprite_1.png");

}

function setup() {
  createCanvas(2000, 986);
  objects = new Group(); //creates new group for sprites
}

function draw() {
  if (state === 1) {
    background(backgroundImage);  //if player chooses this background
    gamePlay()

  }
  else if (state === 3){
    background(backgroundImageTwo); //if player chooses this background

    gamePlay()

  }
  else if (state === 0) {
    background(menuBackground); //menu
    menu();
  }

  else if (state === 2){ //playr chooses a background
    decision();
  }
}

function menu(){ // menu function
  //title
  textSize(200);
  textFont(font);
  fill(0, 0, 255);
  text("SUPER  FIGHTER", 300, 300);
  textSize(50);
  text("By Eimear Currie", width/2, 100);


  //menu animations playing
    animation(menuDanielle, 200, 800);
    animation(menuSecond, 1600, 800);

  // play button
  image(playButton, 600, 100);
  hit = collidePointRect(mouseX, mouseY, 600, 100, playButton.width, playButton.height);



  if (hit && mouseIsPressed){

    state = 2;

}

}


function decision(){ // function for picking a background
  background(menuBackground);
  textFont(font);
  textSize(150);
  fill(0, 0, 255);
  text("CHOOSE  YOUR  LOCATION", 200, 300);

  image(backgroundImage, 100, 600);
  image(backgroundImageTwo, 1000, 600, backgroundImageTwo.width/3, backgroundImageTwo.height/3);


// click on one

choiceOne = collidePointRect(mouseX, mouseY, 100, 600, backgroundImage.width, backgroundImage.height); // collides with image of choice

if (choiceOne && mouseIsPressed){
  state = 1; //state becomes the background of choice
}

choiceTwo = collidePointRect(mouseX, mouseY, 1000, 600, backgroundImageTwo.width, backgroundImageTwo.height); // collides with image of choice

if (choiceTwo && mouseIsPressed){
  state = 3; //state becomes the background of choice
}
}

function gamePlay(){ //executes the game


    // functions execute
      movePlayerTwo();
      movePlayerOne();
      danielleFightBlock();
      secondFightBlock();
      danielleJump();
      secondJump();
      gameOver();


      // displays HP status's
      textSize(50);
      fill(255, 0, 0);
      textFont(font);
      text(newDanielleHealth, 100, 100);
      text(soosHealth, 1800, 100);

      //draws and displays the sprites andd colliders
      drawSprite(newDanielle);
      drawSprite(soos);
      objects.add(newDanielle);
      objects.add(soos);
      soos.bounce(newDanielle);
      newDanielle.bounce(soos);
}

function danielleFightBlock(){ //player one fight and blocking function

    if (key === "e"){ //player 1 fight
      newDanielle.changeAnimation("fight");
      if (newDanielle.collide(soos)){
        soosHealth -= 1;
}
    }
    else if (key === "r"){ //player 1 block

      newDanielle.changeAnimation("fight");
      if(newDanielle.collide(soos)){
      soos.position.x += 100;
    }
  }
    else{
      newDanielle.changeAnimation("test");  //original state
    }
  }

  function secondFightBlock(){ // p2 fight and blocking function

      if (key === "m"){ //p2 fight
        soos.changeAnimation("fight");
        if (soos.collide(newDanielle)){
          newDanielleHealth -= 1;
  }
      }
      else if (key === "n"){ //p2 block

        soos.changeAnimation("fight");
        if(soos.collide(newDanielle)){
        newDanielle.position.x -= 100;
      }
    }
      else{
        soos.changeAnimation("test"); //original state
      }
    }


function movePlayerTwo(){ // moves p2 back and forth
  if(keyIsDown(39)){ //right arrow key moves right
    soos.position.x += 5;
  }
  if(keyIsDown(37)){ //left arrow key moves left
    soos.position.x -= 5;
  }
}

function movePlayerOne(){ //moves p1 back and forth
  if(keyIsDown(68)){ //d key moves right
    newDanielle.position.x += 5;
  }
  if(keyIsDown(65)){ //a key moves left
    newDanielle.position.x -= 5;
  }
}

// these 3 functions deal with jumping

function danielleJump(){
  newDanielle.position.y += danielle_dy;
  danielle_dy += 0.15; //height of jump
  if (newDanielle.position.y >= 800){
    danielle_dy = 0; //stop gaing height/falls down
  }
}

function secondJump(){
  soos.position.y += second_dy;
  second_dy += 0.05; //height of jump
  if (soos.position.y >= 800){
    second_dy = 0; //stop gaining height/ falls down
  }
}


function keyPressed(){

  if (newDanielle.position.y >=800 ){
    if (keyCode === 32){
        danielle_dy -=9; //jumps
    }
  }
  if (soos.position.y >=800 ){
    if (keyCode === UP_ARROW){
        second_dy -=9; //jumps
}
}
}

function danielleDies(){ //function executes when p1 dies
  newDanielleHealth = 0;

  newDanielle.changeAnimation("death");

// sprite falls of screen
  newDanielle.position.y += danielle_dy;
  danielle_dy += 20;
  if (newDanielle.position.y >= 800){
    danielle_dy = 10;

    //p2 winning screen
    textFont(font);
    textSize(150);
    fill(random(255), 0, 0); //so text will flicker
    text("P2 WINS!", 600, 500);
    textSize(50);
    fill(255, 0, 0)
    text("REFRESH TO PLAY AGAIN!", 600, 300)


}
}

function soosDies(){ //function executes when p2 dies
  soosHealth = 0;

  soos.changeAnimation("death");

//p2 falls off screen
  soos.position.y += second_dy;
  second_dy += 20;
  if (soos.position.y >= 800){
    second_dy = 10;

    // p1 winning screen
    textFont(font);
    textSize(150);
    fill(random(255), 0, 0); //so text will flicker
    text("P1 WINS!", 600, 500);
    textSize(50);
    fill(255, 0, 0)
    text("REFRESH TO PLAY AGAIN!", 600, 300)


}

}

function gameOver(){ //ends the game
  if (newDanielleHealth <= 0 && soosHealth !== 0){ // if p1 has 0 HP
    danielleDies(); //calls death function

}

  else if(soosHealth <= 0 && newDanielleHealth !== 0){ //if p2 has 0 HP
  soosDies(); //calls death function

}
}
