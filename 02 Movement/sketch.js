function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textSize(32);
  noStroke();
}

function draw() {
  background(0); 

  // draw one random shape
  fill(random(255), random(255), random(255));
  let x = random(width);
  let y = random(height);
  let size = random(50, 150);

  if (random(1) < 0.33) {
    ellipse(x, y, size, size);
  } else if (random(1) < 0.66) {
    rect(x, y, size, size);
  } else {
    triangle(x, y - size / 2, x - size / 2, y + size / 2, x + size / 2, y + size / 2);
  }

  // show one random word
  fill(255);
  let wordList = ['move', 'shift', 'bounce', 'go', 'rush'];
  text(random(wordList), random(width), random(height));
}
