// IMMAcULATE LINE FUckERY
let lines = 0
let le = 0

let lp = 0
let lpx = 0
let lpy = 0

let lx1 = []
let ly1 = []
let lx2 = []
let ly2 = []

//REcTANGULAR FUcKERYY
let rects = 0
let rt = 0

let rp = 0
let rpx = 0
let rpy = 0

let rx = []
let ry = []
let rw = []
let rh = []

function setup() {
    createCanvas(windowWidth, windowHeight - 1);
}

function draw() {
    background(120)
    if (le = 1) {
        for (let i = 0; i < lines; i++) {
            if (lp == 1) {
                line(lpx, lpy, mouseX, mouseY)
            }
            line(lx1[i], ly1[i], lx2[i], ly2[i])
        }
    }
    if (rt = 1) {
        for (let i = 0; i < boxes; i++) {
            if (rP=1) {
                rect(rx[i], ry[i], mouseX-rx[i], mouseY-ry[i] )
            }
        
        }
    }
    keyIsDown(69) ? (minecraft()) : 0;
}

function mousePressed() {
    if (ll = 1) {
        LP = 1
        lines += 1
        LPx = mouseX
        LPy = mouseY
        lx1.push(mouseX)
        ly1.push(mouseY)
    }

}

function mouseReleased() {
    if (ll = 1) {
        LP = 0
        lx2.push(mouseX)
        ly2.push(mouseY)
    }
}

function keyPressed() {
    if (key == 'l') {
        ll = 1
        bb = 0
    }
    if (key == 's') {
        ll = 0
        bb = 1
    }
}

function minecraft() {
    lx1s = []
    ly1s = []
    lx2s = []
    ly2s = []
}