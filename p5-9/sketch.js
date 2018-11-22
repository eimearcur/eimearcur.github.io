// Grid based assignment
// eimear currie
// nov
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rows = 5;
let cols = 3;
let grid, grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8, grid9, grid10;
let cellSize;
let state = 1;
let screen;
let score = 0;
let grass;
let lava;

function preload(){

  grid  = loadStrings("assets/screen1.txt");

  grid1 = loadStrings("assets/screen1.txt");

  grid2 = loadStrings("assets/screen2.txt");

  grid3 = loadStrings("assets/screen3.txt");

  grid4 = loadStrings("assets/screen4.txt");

  grid5 = loadStrings("assets/screen5.txt");

  grid6 = loadStrings("assets/screen6.txt");

  grid7 = loadStrings("assets/screen7.txt");

  grid8 = loadStrings("assets/screen8.txt");

  grid9 = loadStrings("assets/screen9.txt");

  grid10 = loadStrings("assets/screen10.txt");

  grass = loadImage("assets/grass.jpg");

  lava = loadImage("assets/lava.jpg");
}

function setup() {
  createCanvas(600, windowHeight);
  cellSize = width / cols;
  cleanUpTheGrid(grid1);
  cleanUpTheGrid(grid2);
  cleanUpTheGrid(grid3);
  cleanUpTheGrid(grid4);
  cleanUpTheGrid(grid5);
  cleanUpTheGrid(grid6);

  textSize(30);
  textAlign(CENTER);
}

function draw() {
  background(255);
  displayGrid();
  fill(255, 0, 0);
  text(score, 50, 50);
}


function states(){
  if (state === 1){

    grid = grid1;
  }
  else if(state === 2){

    grid = grid2;
  }
  else if(state === 3){

    grid = grid3;
  }
  else if(state === 4){

    grid = grid4;
  }
  else if(state === 5){

    grid = grid5;
  }

  else if (state === 6){
    grid = grid6;
  }

  else if (state === 7){
    grid = grid7;
  }

  else if (state === 8){
    grid = grid8;
  }

  else if (state === 9){
    grid = grid9;
  }

  else if (state === 10){
    grid = grid10;
  }

  else {
    grid = grid1;
  }
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === "0") {
        stroke(100);
        fill(0);
        //image(grass, grid[x], grid[y]);

      }
      else if (grid[y][x] === "2"){
        fill(255, 0, 0);
      }
      else {
        fill(255);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createRandom2dArray(cols, rows) {
//  let blackCounter = 0;
  let randomGrid = [];
  for (let y = 0; y < rows; y++) {
    randomGrid.push([]);
    for (let x = 0; x < cols; x++) {

      if (random(100) < 50 ) {
        randomGrid[y].push("0");
        //blackCounter++;
      }

      else {
        randomGrid[y].push("1");
      }

    }
  }

  return randomGrid;
}

function keyPressed(){ //detects which key is supposed to be pressed acording to which box if black
  if (grid[4][0] === "0" && keyCode === 87){  //w
    grid[4][0]= "1";

    if (state === 1){
      state = 2;
      states();
      score ++;
    }

    else if (state === 2){
      state = 3;
      states();
      score ++;
    }

    if (state === 3){
      state = 4;
      states();
      score ++;
    }

    if (state === 4){
      state = 5;
      states();
      score ++;
    }
    else if (state === 5){
      state = 6;
      states();
      score ++;
    }



    else if (state === 6){
      state = 7;
      states();
      score ++;
    }

    else if (state === 7){
      state = 8;
      states();
      score ++;
    }

    else if (state === 8){
      state = 9;
      states();
      score ++;
    }
    else if (state === 9){
      state = 10;
      states();
      score ++;
    }
    else if (state === 10){
      state = 1;
      states();
      score ++;
    }
  }

  if (grid[4][1]==="0" && keyCode === 69){ //e
    grid[4][1] = "1";
    if (state === 1){
      state = 2;
      states();
      score ++;
    }

    else if (state === 2){
      state = 3;
      states();
      score ++;
    }

    if (state === 3){
      state = 4;
      states();
      score ++;
    }

    if (state === 4){
      state = 5;
      states();
      score ++;
    }
    else if (state === 5){
      state = 6;
      states();
      score ++;
    }



    else if (state === 6){
      state = 7;
      states();
      score ++;
    }

    else if (state === 7){
      state = 8;
      states();
      score ++;
    }

    else if (state === 8){
      state = 9;
      states();
      score ++;
    }
    else if (state === 9){
      state = 10;
      states();
      score ++;
    }
    else if (state === 10){
      state = 1;
      states();
      score ++;
    }
  }

  if (grid[4][2]==="0" && keyCode === 82){ //r
    grid[4][2] = "1";
    if (state === 1){
      state = 2;
      states();
      score ++;
    }

    else if (state === 2){
      state = 3;
      states();
      score ++;
    }

    if (state === 3){
      state = 4;
      states();
      score ++;
    }

    if (state === 4){
      state = 5;
      states();
      score ++;
    }
    else if (state === 5){
      state = 6;
      states();
      score ++;
    }



    else if (state === 6){
      state = 7;
      states();
      score ++;
    }

    else if (state === 7){
      state = 8;
      states();
      score ++;
    }

    else if (state === 8){
      state = 9;
      states();
      score ++;
    }
    else if (state === 9){
      state = 10;
      states();
      score ++;
    }
    else if (state === 10){
      state = 1;
      states();
      score ++;
    }
  }
  else if (grid[4][0] === "0" && grid[4][1] === "0" && grid[4][2] === "0"){
    state ++;
  }

  // if (grid[4][0] === "0" && grid[4][1] !== "0" && grid[4][2] !== "0" && keyCode !== 87){
  //   grid[3][0] = "2";
  //   noLoop();
  // }
  //
  // if (grid[4][1] === "0" && grid[4][0] !== "0" && grid[4][2] !== "0" && keyCode !== 69){
  //   grid[3][0] = "2";
  //   noLoop();
  // }
  //
  // if (grid[4][2] === "0" && grid[4][0] !== "0" && grid[4][1] !== "0" && keyCode !== 82){
  //   grid[3][0] = "2";
  //   noLoop();
  // }

}

function cleanUpTheGrid(grid){
  for (let i =0; i< grid.length; i++){
    grid[i]=grid[i].split(""); //turns into 2d array
  }
}
