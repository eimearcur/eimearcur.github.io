//Fractal Triangle w recurison
// eimear currentTime(
// dec 20 2018

let startPoints = [{x: 500, y: 100}, {x:100, y:800}, {x:900, y:800}];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  serpinski(startPoints, 7);


}

function serpinski(points, depth){
  let theColors = ["black", "blue", "red", "maroon", "lime", "yellow", "orange", "cyan"];
  fill(theColors[depth]);
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);
  if (depth > 0){
    serpinski([points[0], midPoint(points[0], points[1]), midPoint(points[0], points[2])], depth - 1);
    serpinski([points[1], midPoint(points[0], points[1]), midPoint(points[1], points[2])], depth - 1);
    serpinski([points[2], midPoint(points[0], points[2]), midPoint(points[1], points[2])], depth - 1);
  }
}

function midPoint(point1, point2){
  let x = (point1.x + point2.x)/2;
  let y = (point1.y + point2.y)/2;
  return {x: x, y: y};
}
