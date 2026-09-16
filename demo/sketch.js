let ballY = 200;//Variable for the y axis of the ball

let ballColor;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("test");
  ballColor= 450;
}

function draw() {
  background(800);

  //ellipse(x, y, d)
  strokeWeight(5);
  stroke(3, 90, 50);
  fill(ballColor);
  //ballColor = ballColor +1;
  ballColor += 1;
  
  ellipse(200, 200, 100);

  noStroke();
  fill(100, 100, 100);
  ellipse(300, 300, 100);
  

  console.log(ballColor)
}

function mousePressed(){
  ballColor = 0;
}