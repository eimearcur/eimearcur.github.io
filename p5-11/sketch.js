// walker oop demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walker{
  constructor(){
    this.x = width/2;
    this.y = height/2;
    this.color = "red";
    this.speed = 5;
  }

  display(){
    fill(this.color);
    stroke(this.color);
    ellipse(this.x, this.y, 2, 2);
  }

  move(){
    let choice = random(100);
    if (choice < 25){
      //up
      this.y -= this.speed;
    }
    else if (choice < 50){
      //down
      this.y += this.speed;
    }
    else if (choice < 75){
      //left
      this.x -=this.speed;
    }
    else{
      this.x += this.speed;
    }
  }
}

let b;
let n;

function setup() {
  createCanvas(windowWidth, windowHeight);
  b = new Walker();
  n = new Walker();
  n.color = "blue";
}

function draw() {
  b.move();
  b.display();
  n.move();
  n.display();

}
