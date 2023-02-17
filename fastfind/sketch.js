let leftwidth = 100
let letterheight = 35


function setup() {
    createCanvas(windowWidth, windowHeight);
    img = loadImage('csgo.jpg')
}

function draw() {
    background(60)
    image(img, 0, 0, windowWidth, windowHeight)

    strokeWeight(4)
    stroke(60)
    fill(120, 220)
    rect(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2, 5)
    rect(windowWidth / 4 + 20, windowHeight / 4 + 20, windowWidth / 4, letterheight)
    strokeWeight(2)
    stroke(0, 0)
    fill(220)
    text('Search   :', windowWidth / 4 + 30, windowHeight / 4 + 33, windowWidth / 4, letterheight)
}