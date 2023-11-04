// The logic behind is that you could "stick" the balls by pressing R, then unstick them by releasing a force with F
let b1;
let b2;
let b3;
let balls;
let ruleIndex;
let drawDetect;

function setup()
{
  createCanvas(600,600);
  // Balls for initialization
  b1 = new Ball(400,400, -0.001, 0.01, 0);
  b2 = new Ball(0,0, .001, .01, 0);
  b3 = new Ball(200,200, .002, -.01, 0);
  b4 = new Ball(500,500, -0.001, 0.03, 0);
  // ruleIndex dictates whether the balls are bouncy or sticky
  ruleIndex = 0;
  // Array of balls so you can add more in the future
  balls = [b1, b2, b3, b4];
  drawDetect = false;
}

function draw()
{
  // Color switch for rules
  if (ruleIndex === 0)
  {
    background(100);
  }
  else if (ruleIndex === 1){
    background (150,100,100);
  }
  
  // Loops through the entire array of balls, displaying and updating
  // every single one of the balls
  push();
  stroke(0);
  strokeWeight(10);
  noFill();
  for(let i = 0; i < balls.length; i++)
  {
    balls[i].update();
    balls[i].bounceEdges();
    balls[i].display();
    balls[i].setRule(ruleIndex);
    if(balls[i].isEdge)
    {
      print('Is Touching Edges');
      for (let j = 0; j < 10; j++)
      {
        ellipse(balls[i].position.x, balls[i].position.y, diameter+5*j);
      }
    }
    // Checks for collision with every single ball in the array except for itself
    for(let j = 0; j < balls.length ; j++)
    {
      
      if(i!=j)
      {
        balls[i].checkCollision(balls[j]);
      }
    }
  }
  pop();

  // Instructions
  push()
  let s = 'Press F to move the balls. \nonce they have enough momentum, \n Press R to ***** them. \nMouse Press to add new balls.';
  textSize(18);
  textAlign(CENTER, CENTER);
  fill(220);
  noStroke();
  text(s, 300, 300);
  pop();
}


function mousePressed()
{
  // Generates four balls when mouse is pressed
  if(balls.length < 10)
  {
    for (let i = 0; i < 2; i++)
    {
      // Diagonal pattern, random acceleration x and y, with rule 0
      balls.push(new Ball(mouseX+i*50, mouseY+i*50, random(-0.01, 0.01), random(-0.01, 0.01), 0));
    }
  }

}


function keyPressed()
{
  
  // Applys a random force when pressing the key f
  if (key === 'f')
  {
    // Apply a random force for every ball
    for(let i = 0; i < balls.length; i++)
    {
      balls[i].applyForce(p5.Vector.random2D(1,1));
    }
    
  }

  // Changes the rule when pressing the key r
  if (key === 'r')
  {
    if(ruleIndex < 1)
    {
      ruleIndex++;
    }
    else
    {
      ruleIndex = 0;
    }
  }
}