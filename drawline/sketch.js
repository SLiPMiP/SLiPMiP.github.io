// NATO
let objects = 0

// IMMAcULATE LINE FUckERY
let lines = 0
let le = 1

let lP = 0
let lpx = 0
let lpy = 0

let lx1 = []
let ly1 = []
let lx2 = []
let ly2 = []

//REcTANGULAR FUcKERYY
let rects = 0
let rt = 0

let rP = 0
let rpx = 0
let rpy = 0

let rx = []
let ry = []
let rw = []
let rh = []
let ass = 0

//fuck you this took like 5 hrs because i thought of this the whole fucking wrong way and just deleted everything i had spent 4 hrs making and then returned to this simple ass code and made a little change and it just fucking worked because ofcourse it does why does it not draw different loops if theyre in the drawawawaw?? is it because the 2 loops were in different if variables that never were active at the same time its probably because of that i love coding i love coding i love coding

function setup() {
    createCanvas(windowWidth, windowHeight - 1);
}

function draw() {
    background(120)
    for (let i = 0; i < objects; i++) {
        if (lP == 1) {
            line(lpx, lpy, mouseX, mouseY)
        }
        line(lx1[i], ly1[i], lx2[i], ly2[i])
        if (rP == 1) {
            rect(rpx, rpy, mouseX - rpx, mouseY - rpy)
        }
        rect(rx[i], ry[i], rw[i] - rx[i], rh[i] - ry[i])
    }
    noFill()
}

function mousePressed() {
    if (le == 1) {
        lP = 1
        objects += 1
        lpx = mouseX
        lpy = mouseY
        lx1.push(mouseX)
        ly1.push(mouseY)
    }
    if (rt == 1) {
        rP = 1
        objects += 1
        rpx = mouseX
        rpy = mouseY
        rx.push(mouseX)
        ry.push(mouseY)
    }
}

function mouseReleased() {
    if (le == 1) {
        lP = 0
        lx2.push(mouseX)
        ly2.push(mouseY)
    }
    if (rt == 1) {
        rP = 0
        rw.push(mouseX)
        rh.push(mouseY)
    }
}

function keyPressed() {
    if (key == 'e') {
        lx1 = []
        ly1 = []
        lx2 = []
        ly2 = []
        rx = []
        ry = []
        rw = []
        rh = []
    }
    if (key == 'l') {
        le = 1
        rt = 0
        console.log("Line")
    }
    if (key == 'r') {
        le = 0
        rt = 1
        console.log("Rectangle")
    }
    if (key == 'n') {
        console.log("line", le)
        console.log("rectangle", rt)
    }
    if (key == 'a') {
        console.log(ass)
    }
}