function setup() {
  createCanvas(400, 400);
  noStroke();
  drawScene(); // draw once at the start
}

function drawScene() {
  background(255); 

  //variables for random positions, sizes, and colors for shapes
  let x1 = random(50, 150);
  let y1 = random(50, 150);
  let size1 = random(80, 150);
  let col1 = color(random(255), random(255), random(255), 150);

  let x2 = random(200, 300);
  let y2 = random(50, 150);
  let size2 = random(80, 150);
  let col2 = color(random(255), random(255), random(255), 150);

  let x3 = random(250, 350);
  let y3 = random(250, 350);
  let size3 = random(80, 150);
  let col3 = color(random(255), random(255), random(255), 150);

  let x4 = random(100, 200);
  let y4 = random(200, 300);
  let size4 = random(80, 150);
  let col4 = color(random(255), random(255), random(255), 150);

  let x5 = random(50, 350);
  let y5 = random(100, 350);
  let size5 = random(80, 150);
  let col5 = color(random(255), random(255), random(255), 150);

  // shapes and random attributes 
  fill(col1);
  ellipse(x1, y1, size1);

  fill(col2);
  rect(x2, y2, size2, size2);

  fill(col3);
  triangle(
    x3, y3,
    x3 + random(-50, 50), y3 + random(-50, 50),
    x3 + random(-50, 50), y3 + random(-50, 50)
  );

  fill(col4);
  ellipse(x4, y4, size4, size4 * 0.8);

  fill(col5);
  rect(x5, y5, size5 * 0.8, size5 * 1.2);

  // middle face
  fill(0);
  ellipse(width / 2, height / 2, 160, 160);

  // sad face
  fill(255);
  ellipse(width / 2 - 30, height / 2 - 20, 20, 25);
  ellipse(width / 2 + 30, height / 2 - 20, 20, 25);

}

// randomising on mouse press
function mousePressed() {
  drawScene(); //  from https://p5js.org/reference/p5/mousePressed/
}
