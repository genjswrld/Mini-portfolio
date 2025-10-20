let select = 0;
let rgb = [255, 0, 0];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if(select==0){
    rgb = [255, 0, 0];
  }else{
    rgb = [0, 255, 0];
  }
  fill(rgb);
  ellipse(mouseX, mouseY, 30);
}

function mouseClicked() {
  if(select==0){
    select=1;
  }else{
    select=0;
  }
  return false;
}