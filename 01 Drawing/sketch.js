function setup() {
  createCanvas(400, 400);
}

function draw() {
  let c = color(255, 203, 165);
  let c2 = color(65)
  let c3 = color (251, 163, 114)
  background(50);
  
  
  fill(c);
  noStroke();
  circle(200, 200, 300);
  
  fill(c2);
  square(250, 150, 50);
  square(100, 150, 50);
  
  fill (c3);
  rect(170, 200, 55, 50, 10);
}
