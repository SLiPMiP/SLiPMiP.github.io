
let xPos = 100
let yPos = 100

let xSpeed = 2
let ySpeed = 2

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  let width = 50
  let height = 30
  // rect(xPos,yPos,width,height)

let img;
function preload() {
  img = loadima('bouncingball/bootlegdvd.png')
}
function setup() {
image(img, xPos, yPos, width, height)
}

xPos = xPos + xSpeed
yPos = yPos + ySpeed

// in this case b = beyond
// "bleft = beyond left"
let bLeft = xPos < 0
let bRight = xPos > windowWidth - width
let bBottom = yPos > windowHeight - height
let bTop = yPos < 0

if (bLeft || bRight) {
xSpeed = -xSpeed
}

if (bBottom || bTop) {
  ySpeed = -ySpeed
}


}
