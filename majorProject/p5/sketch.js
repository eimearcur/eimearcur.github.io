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




function preload(){
  //newDanielle = loadAnimation("assets/danielleOne.png", "assets/danielleTwo.png","assets/danielleThree.png", "assets/danielleFour.png", "assets/danielleThree.png", "assets/danielleTwo.png");
  //newDanielle.playing = false;

  danielleFrames = loadJSON("assets/playerOne.json");
  danielleSpriteSheet = loadSpriteSheet("assets/playerOne.png", danielleFrames)

  danielleFight = loadAnimation(danielleSpriteSheet);

  danielleStand = new SpriteSheet("assets/playerOne.png", [{"frames": "playerOne0.png", "frame": {"x": 0, "y": 0, "w": 800, "h":800}}]); //json
  danielleStand = loadAnimation(danielleStand);


}
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
  newDanielle = createSprite(width/2, height/2, 50, 100);
  newDanielle.addAnimation("fighting", danielleFight);
  newDanielle.addAnimation("standing", danielleStand);


}

function draw() {
//   playerOne.display();
//   playerOne.update();
  background(255);
  noStroke();
  //fill(playerOne.color);
  //rect(playerOne.x, playerOne.y, playerOne.size, playerOne.size);
  //movePlayerTwo();
  //movePlayerOne();
  //fill(playerTwo.color);
  //rect(playerTwo.x, playerTwo.y, playerTwo.size, playerTwo.size);
  //playerOneHit();
  //text(playerTwo.health, 100, 100);
  //playerTwoHit();
  //text(playerOne.health, 500, 100);

  if (key === "d"){
    newDanielle.changeAnimation("fighting")
  }

  drawSprites();

  //drawDanielle();


  //animation(newDanielle, width/2, height/2);

}

function mousePressed(){
  newDanielle.nextFrame();
}

// function movePlayerTwo(){
//   if(keyIsDown(39)){
//     newDanielle += 5;
//   }//right arrow
//  //  if(keyIsDown(37)){ //left key
//  //    playerTwo.x -= playerTwo.dx;
//  // }
// }


 function movePlayerOne(){
   if(keyIsDown(68)){
     playerOne.x += playerOne.dx;
   }//d
   if(keyIsDown(65)){ //a
     playerOne.x -= playerOne.dx;
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
