let bg;

let words = [
  "where am I?",
  "is this real?",
  "I feel far away",
  "why does this feel wrong?",
  "am I here?"
];

let currentIndex;
let textColor = 255;

function preload(){
  bg = loadImage("myImage.jpg"); // background image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(42);
  textAlign(CENTER, CENTER);

  // start with a random phrase
  currentIndex = int(random(words.length));
}

function draw() {
  image(bg, 0, 0, width, height); 

  fill(textColor);
  text(words[currentIndex], width/2, height/2); 
}

function mousePressed() {

  currentIndex = int(random(words.length));

  // subtle shift in color tone so it's not too flashy
  textColor = color(random(200, 255));
}
