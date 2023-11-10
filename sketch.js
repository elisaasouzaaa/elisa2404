function setup() {
  createCanvas(600, 600);
  background("#010116");
}

function draw() {
  stroke("rgb(3,3,53)");
  fill("rgb(168,21,21)");
  
  if(mouseIsPressed){
    rect(mouseX, mouseY, 20, 35);
  }
    
}
