let lines = 0
let x1s = []
let y1s = []
let x2s = []
let y2s = []


function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    for (let i = 0; i < lines; i++) {
        line(x1s[i], y1s[i], x2s[i], y2s[i])

    }
}

function mousePressed() {
    lines += 1
    x1s.push(mouseX)
    y1s.push(mouseY)
}
function mouseReleased() {
    x2s.push(mouseX)
    y2s.push(mouseY)
}