let xPos = 0;
let yPos = 0;

let xSpeed = 2;
let ySpeed = 2;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);

    let width = 20;
    let height = 20;
    strokeWeight(1);
    rect(xPos, yPos, width, height);

    if (
        (xPos > windowWidth / 2 - width / 2 && yPos < windowHeight / 2 - height / 2) ||
        (xPos < windowWidth / 2 - width / 2 && yPos > windowHeight / 2 - height / 2)
    ) {
        fill("red");
    } else {
        fill("white");
    }

    strokeWeight(width);
    line(windowWidth / 2, 0, windowWidth / 2, windowHeight);
    strokeWeight(height);
    line(0, windowHeight / 2, windowWidth, windowHeight / 2);

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