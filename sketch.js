function setup() {
  createCanvas(600, 600);
background("white");
}
function draw() {

  
  fill("white");
 stroke("black");
  //console.log (mouseIsPressed)

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 30, 50);
  }
}
