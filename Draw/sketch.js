let lines = 0
let LP = 0
let LPx = 0
let LPy = 0
let x1s = []
let y1s = []
let x2s = []
let y2s = []


function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(120)
    for (let i = 0; i < lines; i++) {
        if (LP == 1) {
            line(LPx, LPy, mouseX, mouseY)
        }
        else {

        }
        line(x1s[i], y1s[i], x2s[i], y2s[i])
    }
}

function mousePressed() {
    LP = 1
    lines += 1
    LPx = mouseX
    LPy = mouseY
    x1s.push(mouseX)
    y1s.push(mouseY)
}

function mouseReleased() {
    LP = 0
    x2s.push(mouseX)
    y2s.push(mouseY)
}