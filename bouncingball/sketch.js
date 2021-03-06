let xPos = 0;
let yPos = 0;

let xSpeed = 2;
let ySpeed = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  let width = 25;
  let height = 25;
  rect(xPos, yPos, width, height);

  xPos = xPos + xSpeed;
  yPos = yPos + ySpeed;

  // in this case b = beyond
  // "bleft = beyond left"
  let bLeft = xPos < 0;
  let bRight = xPos > windowWidth - width;
  let bBottom = yPos > windowHeight - height;
  let bTop = yPos < 0;

  if (bLeft || bRight) {
    xSpeed = -xSpeed;
  }

  if (bBottom || bTop) {
    ySpeed = -ySpeed;
  }
}
