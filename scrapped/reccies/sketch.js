function setup() {
    createCanvas(windowWidth, windowHeight);
}

//024006122021
let LineMode = 1
let RectangleMode = 0
let Coords = []
let Objects = 0
let ObjectMode = []
let LineAmount = 0
let ObjectQuery
let test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function draw() {
    background(120);
    if (LineMode = 1) {
        for (let i = 0; i < Objects.length; i += 4) {
            if (PreviewMode = 1) {
                line(Coords[0 + i], Coords[1 + i], mouseX, mouseY)
            }
            if (objectmode = "Line") {
                line(Coords[0 + i], Coords[1 + i], Coords[2 + i], Coords[3 + i])
            }
        }
        if (RectangleMode = 1) {
            for (let i = 0; i < Objects.length; i++) {
                if (PreviewMode = 1) {
                    rect(Coords[0 + i], Coords[1 + i], mouseX - Coords[0 + i], mouseY - Coords[1 + i])
                }
                if (ObjectMode[i] = "Rectangle") {
                    rect(Coords[0 + i], Coords[1 + i], Coords[2 + i] - Coords[0 + i], Coords[3 + i] - Coords[1 + i])
                }
            }

        }
    }
}

function mousePressed() {
    Objects += 1
    Coords.push(mouseX, mouseY)
    PreviewMode = 1
    if (LineMode = 1) {
        ObjectMode.push("Line")
    }
    if (RectangleMode = 1) {
        ObjectMode.push("Rectangle")
    }
}

function mouseReleased() {
    Coords.push(mouseX, mouseY)
    PreviewMode = 0
}

let a = 2
a = 3

function keyPressed() {
    if (key = 'n') {
        console.log(ObjectMode)
    }

    if (key = 'm') {
        console.log(a)
    }

    if (key = 'k') {
        console.log("coords", Coords)
        console.log("objects", Objects)
        console.log("linemode", LineMode)
        console.log("rectanglemode", RectangleMode)
    }
    if (key = 'l') {
        LineMode = 1
        RectangleMode = 0
    }

    if (key = 'r') {
        RectangleMode = 0
        LineMode = 0
    }
}