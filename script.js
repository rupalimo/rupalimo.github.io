function setup() {
  createCanvas(windowWidth, windowHeight);
background(255);
    frameRate(120);
}



function draw() {


  noStroke();
  fill(mouseX / 3, mouseX / 6, mouseY/2, 229);
  //updated apr 14, 2023
      circle(mouseX-1, mouseY-1, 12*noise(frameCount/mouseX + mouseY));

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

function mousePressed() {
  //  background(mouseY / 2, mouseX/2, mouseX/5, 150);
background(0);
}

function mouseReleased() {
   background(255);
}


// var pos;
// var prev;

// function setup() {
// 	createCanvas(windowWidth, windowHeight);
// 	background(255);
// 	frameRate(120);
// 	pos = createVector(windowWidth / 2, windowHeight / 3);
// 	prev = pos.copy();
// }

// function draw() {

// 	stroke(mouseX / 3, mouseX / 6, mouseY / 2, 100);
// 	strokeWeight(1);

// 	line(
// 		mouseX,
// 		mouseY,
// 		prev.x,
// 		prev.y
// 	);
// 	prev.set(pos);

// 	var step = p5.Vector.random2D();

// 	// var r = random(500);
// 	// 	if (r < 1)  {
// 	// 		step.mult(random(1,200));
// 	// 	} else {
// 	// 		step.setMag(1);
// 	// 	}
// 	step.setMag(1);
// 	pos.add(step);

// }
  
// function mousePressed() {
//    background(0);
// //background(255);
// }

// function mouseReleased() {
//    background(255);
// }