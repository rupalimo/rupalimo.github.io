function setup() {
  createCanvas(windowWidth, windowHeight);
background(255);
}



function draw() {


  noStroke();
  fill(mouseX / 3, mouseX / 6, mouseY/2, 229);
  //updated apr 14, 2023
      circle(mouseX-1, mouseY-1, 12*noise(frameCount/mouseX + mouseY/2));

 // circle(mouseX-1, mouseY-3, 5);

  //   background(255);
  // fill(mouseX/8, mouseY/3, mouseY/3);
  // text("rupali morzaria is a visual designer and film programmer currently based in tiohti:áke or montréal", mouseX-250, mouseY);

  // need to figure out how to add borderbox:

  //   stroke(0);
  // fill(255);
  // rectMode(CENTER);
  // rect(mouseX, mouseY, 200, 20, 8);
}
