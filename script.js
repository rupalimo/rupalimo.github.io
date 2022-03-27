function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);
  noStroke();
  fill(mouseX/8, mouseY/5, mouseY/5);
  circle(mouseX-1, mouseY-3, 5);
}
