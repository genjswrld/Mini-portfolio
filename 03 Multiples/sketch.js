let bubbleY = [300, 350, 400, 450, 500]; 

let unsent = true; // true = bubbles appear green, false = bubbles appear blue

function setup() {
  createCanvas(400, 500);
  rectMode(CENTER);
  
}

function draw() {
  background(230);

  for (let i = 0; i < bubbleY.length; i++) {

    
    if (unsent == true) {
      fill(90, 220, 120); // green = unsent
    } else {
      fill(60, 140, 230); // blue = sent
    }

    
    if (i % 2 == 0) {
      rect(120, bubbleY[i], 170, 40, 12);
    } else {
      rect(280, bubbleY[i], 170, 40, 12);
    }


    bubbleY[i] -= 1;

    if (bubbleY[i] < -40) {
      bubbleY[i] = height + 40;
    }
  }
}

function mouseClicked() {
  if (unsent == true) {
    unsent = false;
  } else {
    unsent = true;
  }
}
