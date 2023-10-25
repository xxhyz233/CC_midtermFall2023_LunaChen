let b;
let b2;
let b3;

function setup()
{
  createCanvas(800,800);
  b = new Ball(400,400, -0.001, 0.01);
  b2 = new Ball(0,0, .001, .01);
  b3 = new Ball(200,200, .002, -.01);
  b4 = new Ball(500,500, -0.001, 0.03);
}

function draw()
{
  background(20);
  b.update();
  b.checkEdges();
  b.display();

  b2.update();
  b2.checkEdges();
  b2.display();

  b3.update();
  b3.checkEdges();
  b3.display();

  b4.update();
  b4.checkEdges();
  b4.display();
}

