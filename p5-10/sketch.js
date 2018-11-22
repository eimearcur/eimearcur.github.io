// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Dog{
  // constructor(){
  //   this.name  = "Fido";
  //   this.age = 0;
  // }
  constructor(name){
    this.name  = name;
    this.age = 0;
  }

  bark(){
    console.log("woof. my name is " + this.name);
  }
}

let myDog = new Dog("snoop dogg");
let myOtherDog = new Dog("gerald");



function setup() {
  createCanvas(windowWidth, windowHeight);
  myDog.bark();
  myOtherDog.bark();
}

function draw() {

}
