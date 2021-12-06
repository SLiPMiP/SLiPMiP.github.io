// IMMAcULATE LINE FUckERY
let lines = 0
let le = 1

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
    for (let i = 0; i < lines; i++) {
        if (lp == 1) {
            line(lpx, lpy, mouseX, mouseY)
        }
        if (le == 1) {
            line(lx1[i], ly1[i], lx2[i], ly2[i])
        }
    }
    for (let i = 0; i < rects; i++) {
        if (rp == 1) {
            rect(rpx, rpy, mouseX - rpx, mouseY - rpy)
        }
        if (rt == 1) {
            rect(rx[i], ry[i], rw[i], rh[i])
        }
    }
}

function mousePressed() {
    if (le == 1) {
        lp = 1
        lines += 1
        lpx = mouseX
        lpy = mouseY
        lx1.push(mouseX)
        ly1.push(mouseY)
    }
    if (rt == 1) {
        rp = 1
        rects += 1
        rpx = mouseX
        rpy = mouseY
        rx.push(mouseX)
        ry.push(mouseY)
    }
}

function mouseReleased() {
    if (le == 1) {
        lp = 0
        lx2.push(mouseX)
        ly2.push(mouseY)
    }
    if (rt == 1) {
        rp = 0
        rw.push = mouseX
        rh.push = mouseY
    }
}

function keyPressed() {
    if (key == 'l') {
        le = 1
        rt = 0
        console.log("le", le)
        console.log("rt", rt)
    }
    if (key == 'r') {
        le = 0
        rt = 1
        console.log("le", le)
        console.log("rt", rt)
    }
    if (key == 'e') {
        lx1 = []
        ly1 = []
        lx2 = []
        ly2 = []
    }
}

function minecraft() {
    lx1 = []
    ly1 = []
    lx2 = []
    ly2 = []
}