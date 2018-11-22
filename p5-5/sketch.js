// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let penguin;
let grayPenguin;

function preload(){
  penguin  = loadImage("assets/cutePenguin.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(penguin, 0, 0);
  grayPenguin = makeGrayscale(penguin);
}

function draw() {

}

function makeGrayscale(sourceImage){
  let img = createImage(sourceImage.width, sourceImage.height);

  sourceImage.loadPixels();
  img.loadPixels();

  for (let x = 0; x < img.width; x ++){
    for (let y = 0; y < img.height; y ++){
      let thisPixel = sourceImage.get(x, y);
  
      let r = red(thisPixel);
      let g = green(thisPixel);
      let b = blue(thisPixel);

      let average = (r + g + b) / 3;

      let newPixel = color(average, average, average);

      img.set(x, y, newPixel);
    }
  }
  img.updatePixels();
  return img;
}
