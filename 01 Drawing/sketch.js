function setup() {
  createCanvas(640, 480); 
  background(50);    
  // noStroke();              
}

function draw(){
  let c  = color(255,203,165);
  let c2 = color(251,163,114);



    fill(c); 
    rect(0, 0, 100, 100); // x, y, w, h
    
    fill(c2);
		rect(50, 50, 100, 100); 

		fill(128)
		rect(100, 100, 100, 100);
		
		fill(196);
		rect(150, 150, 200, 200);

		fill(220);
		rect(300, 300, 400, 400); 
}