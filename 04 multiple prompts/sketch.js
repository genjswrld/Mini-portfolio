/* 
Playing with mouse events: 
See https://p5js.org/reference/#/p5/mouseClicked 
*/

let select = 0; // Color of the shape
let size = 30; // Size of the shape
let rgba = [20, 20, 20, 20]; 

function setup() {
  noStroke(); 
  createCanvas(800, 800);
}

function draw() {
  fill(rgba);
  rect(mouseX, mouseY, size, size);
  if(select!=2){
    size = random(10, 200);
  }
}

function mouseClicked() {
  console.log('select: '+select); 
   
  
  rgba[select] = random(0,255); // Set r, g, or b 
  rgba[3] = random(5,50); // Set alpha (transparency) 
  select++; // Increment select by 1
 
  if(select >= 3){ // if select is greater or equal to...
    console.log('reset select'); 
    select = 0; 
  }
  return false; // mouseClicked expects this
}