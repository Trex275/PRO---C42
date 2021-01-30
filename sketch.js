var hr, min, sec;


function setup() {
  createCanvas(800, 400);
  createSprite(400, 200, 50, 50);
  hr = hour();
  min = minute();
  sec = second();
}

function draw() {
  angleMode(DEGREES);
  stroke(255, 0, 0)
  strokewieght(7);
  line(0, 0, 100, 0)

  background(0);
  // Scale the mouseX value from 0 to 720 to a range between 0 and 175
  let c = map(mouseX, 0, width, 0, 175);
  // Scale the mouseX value from 0 to 720 to a range between 40 and 300
  let d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width / 2, height / 2, d, d);
  background(0, 0, 0);
  drawSprites();
}

function hour() {
  let h = hour();
  text('Current hour:\n' + h, 5, 50);
}

function minute() {
  let m = minute();
  text('Current minute: \n' + m, 5, 50);
}

function second() {
  let s = second();
  text('Current second: \n' + s, 5, 50);
}