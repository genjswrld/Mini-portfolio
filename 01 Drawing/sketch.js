function setup() {
  createCanvas(400, 400);
  noStroke();
  drawScene();
}

function drawScene() {
  // bg rand
  background(random(200, 255), random(50, 255), random(200, 255));

  // 1 
  let x1 = random(50, 350);
  let y1 = random(50, 350);
  let size1 = random(60, 140);
  fill(random(255), random(255), random(255));
  ellipse(x1, y1, size1);

  //2 
  let x2 = random(50, 350);
  let y2 = random(50, 350);
  let size2 = random(60, 140);
  fill(random(255), random(255), random(255));
  rect(x2, y2, size2, size2);

  // 3 
  let x3 = random(50, 350);
  let y3 = random(50, 350);
  let w3 = random(60, 150);
  let h3 = random(40, 120);
  fill(random(255), random(255), random(255));
  ellipse(x3, y3, w3, h3);

  // 4 
  let x4 = random(50, 350);
  let y4 = random(50, 350);
  fill(random(255), random(255), random(255));
  triangle(
    x4, y4,
    x4 + random(-60, 60), y4 + random(-60, 60),
    x4 + random(-60, 60), y4 + random(-60, 60)
  );

  //5 
  let x5 = random(50, 350);
  let y5 = random(50, 350);
  let w5 = random(50, 100);
  let h5 = random(80, 150);
  fill(random(255), random(255), random(255));
  rect(x5, y5, w5, h5);

  //6 
  let x6 = random(50, 350);
  let y6 = random(50, 350);
  let size6 = random(60, 140);
  fill(random(255), random(255), random(255));
  ellipse(x6, y6, size6);

  //7 
  let x7 = random(50, 350);
  let y7 = random(50, 350);
  let size7 = random(60, 140);
  fill(random(255), random(255), random(255));
  rect(x7, y7, size7, size7);

  // 8
  let x8 = random(50, 350);
  let y8 = random(50, 350);
  let size8 = random(70, 150);
  fill(random(255), random(255), random(255));
  ellipse(x8, y8, size8, size8 * 0.7);

  //9 
  let x9 = random(50, 350);
  let y9 = random(50, 350);
  fill(random(255), random(255), random(255));
  triangle(
    x9, y9,
    x9 + random(-60, 60), y9 + random(-60, 60),
    x9 + random(-60, 60), y9 + random(-60, 60)
  );

  // 10
  let x10 = random(50, 350);
  let y10 = random(50, 350);
  let w10 = random(60, 120);
  let h10 = random(60, 150);
  fill(random(255), random(255), random(255));
  rect(x10, y10, w10, h10);

  //
  fill(0);
  ellipse(width / 2, height / 2, 160, 160);

  fill(255);
  ellipse(width / 2 - 30, height / 2 - 20, 20, 25);
  ellipse(width / 2 + 30, height / 2 - 20, 20, 25);


  noStroke();
}

function mousePressed() {
  drawScene();
}
