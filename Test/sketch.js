let x = 120
let y = 120

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(120)
rect(x, y, mouseX-x, mouseY-y)
}