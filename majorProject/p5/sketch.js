// Major Project
// Eimear
// 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//music
//sprites p5.play
// create backgrounds

let playerOne, playerTwo;
let hit = false;
let danielle;
let newDanielle;
let danielleSpriteSheet;
let danielleFrames;
let danielleFight;
let danielleStand;
let newSecond;
let backgroundImage;
let newDanielleHealth = 100;
let newSecondHealth = 100;



function preload(){

  backgroundImage = loadImage("assets/backgroundGameImage.png");
  newDanielle = createSprite(400, 500);

  newDanielle.addAnimation("test","assets/danielleOne.png") //
  newDanielle.addAnimation("fight", "assets/danielleTwo.png");
  //newDanielle.playing = false;

  newDanielle.setCollider("rectangle", 0, 0, 25, 25);
  newSecond = createSprite(800, 500);
  newSecond.addAnimation("test", "assets/sprite_0.png") //,
  newSecond.addAnimation("fight", "assets/sprite_1.png");
  //newSecond.playing = false;
  newSecond.setCollider("rectangle", 0, 0, 25, 25);

  //danielleFrames = loadJSON("assets/playerOne.json");
  //danielleSpriteSheet = loadSpriteSheet("assets/playerOne.png", danielleFrames)

  //danielleFight = loadAnimation(danielleSpriteSheet);

  //danielleStand = new SpriteSheet("assets/playerOne.png", [{"frames": "playerOne0.png", "frame": {"x": 0, "y": 0, "w": 800, "h":800}}]); //json
  //danielleStand = loadAnimation(danielleStand);


}
function setup() {
  createCanvas(windowWidth, windowHeight);
  objects = new Group();

  // playerOne = new PlayerOne();
  playerOne = {
    x: 0,
    y:height/2,
    dx: 10,
    dy: 10,
    size: 100,
    color: color(255, 0, 0),
    health: 100,
  };
  playerTwo = {
    x: width - 100,
    y:height/2,
    dx: 10,
    dy: 10,
    size: 100,
    color: color(0, 0, 255),
    health: 100,
  };
  //newDanielle = createSprite(width/2, height/2, 50, 100);
  //newDanielle.addAnimation("fighting", danielleFight);
  //newDanielle.addAnimation("standing", danielleStand);


}

function draw() {
//   playerOne.display();
//   playerOne.update();
  background(backgroundImage);

  //newDanielle.collide(newSecond);

  //noStroke();
  //fill(playerOne.color);
  //rect(playerOne.x, playerOne.y, playerOne.size, playerOne.size);
  movePlayerTwo();
  movePlayerOne();
  //fill(playerTwo.color);
  //rect(playerTwo.x, playerTwo.y, playerTwo.size, playerTwo.size);
  //playerOneHit();
  textSize(100);
  fill(255)
  text(newDanielleHealth, 100, 100);
  //playerTwoHit();
  text(newSecondHealth, 500, 100);
  //nextFrame();
  //nextFrame2();

  // if (key === "d"){
  //   newDanielle.changeAnimation("fighting")
  // }

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





  // if (newDanielle.collide(newSecond) && key === "m"){
  //   newDanielle.changeAnimation("fight");
  //   console.log("killed");
  // }
  // else{
  //   newDanielle.changeAnimation("test");
  // }

  drawSprites();
  objects.add(newDanielle);
  objects.add(newSecond);
//  newDanielle.bounce(newSecond);
  newSecond.bounce(newDanielle);
  newDanielle.bounce(newSecond);

  //drawDanielle();


  //animation(newDanielle, playerOne.x, playerOne.y);
  //animation(newSecond, playerTwo.x, playerTwo.y);

}

// function mousePressed(){
//   newDanielle.nextFrame();
// }

function nextFrame(){
  if (key === "m"){
    newDanielle.nextFrame();
  }
}

function nextFrame2(){
  if (key === "l"){
    newSecond.nextFrame();
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

 function playerOneHit(){

   hit = collideRectRect(playerOne.x, playerOne.y, playerOne.size, playerOne.size, playerTwo.x, playerTwo.y, playerTwo.size, playerTwo.size);

   if (hit === true && key === "f"){
     console.log("got it")
    playerTwo.x += playerTwo.dx * -1;
    playerTwo.health = playerTwo.health - 1;

   }
   else if (hit === true && key === "r"){
     console.log("blocked");
     playerTwo.x += playerTwo.x *-1; //try to get them to boucne at some point
     playerOne.health = playerOne.health;
   }
 }


  function playerTwoHit(){

    hit2 = collideRectRect(playerTwo.x, playerTwo.y, playerTwo.size, playerTwo.size, playerOne.x, playerOne.y, playerOne.size, playerOne.size);

    if (hit2 === true && key === " "){
      console.log("got it")
     playerOne.x += playerOne.x * -1;
     playerOne.health = playerOne.health - 1;

    }

    else if (hit2 === true && key === "m"){
      console.log("blocked");
      playerOne.x += playerOne.dx * -1;
      playerTwo.health = playerTwo.health;
    }
  }

//   function drawDanielle(){
//     players = new Group();
//     newDanielle = createSprite(width/2, height/2);
//     //newDanielle.addAnimation("floating", "assets/danielleOne.png", "assets/danielleTwo.png");
//     newDanielle.scale = 1;
//     newDanielle.mass = newDanielle.scale;
//
//     if (key === "m"){
//       newDanielle.changeAnimation("floating");
//     }
// }
