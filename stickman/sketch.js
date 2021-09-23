function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("darkgreen");

  //krop
  circle(200, 75, 80);
  line(200, 115, 200, 225);
  line(200, 225, 100, 325);
  line(200, 225, 300, 325);
  line(200, 170, 100, 80);
  line(200, 170, 300, 80);

  //detajler hoved
  fill("white");
  circle(185, 65, 10);
  fill("white");
  circle(215, 65, 10);
  line(200, 75, 190, 85);
  line(190, 85, 200, 85);
  arc(200, 95, 35, 20, 0, PI, CHORD);
  fill("white");
  fill(255, 192, 203);
  
}
