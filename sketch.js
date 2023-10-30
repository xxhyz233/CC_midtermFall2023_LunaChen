let b1;
let b2;
let b3;
let balls;
let ruleIndex;

function setup()
{
  createCanvas(800,800);
  b1 = new Ball(400,400, -0.001, 0.01, 0);
  b2 = new Ball(0,0, .001, .01, 0);
  b3 = new Ball(200,200, .002, -.01, 0);
  b4 = new Ball(500,500, -0.001, 0.03, 0);
  // Array of balls
  balls = [b1, b2, b3, b4];
}

function draw()
{
  background(20);
  // Loops through the entire array of balls, displaying and updating
  // every single one of the balls
  for(let i = 0; i < balls.length; i++)
  {
    balls[i].update();
    balls[i].checkEdges();
    balls[i].display();
  }
}


function mousePressed()
{
  // Generates four balls when mouse is pressed
  for (let i = 0; i < 4; i++)
  {
    // Diagonal pattern, random velocity x and y, with rule 0
    balls.push(new Ball(mouseX+i*50, mouseY+i*50, random(-0.002, 0.002), random(-0.002, 0.002), 0));
  }
}


function keyPressed()
{
  
  // Applys a random force when pressing the key f
  if (key === 'f')
  {
    print('F Pressed');
    tempForce = p5.Vector.random2D(1,1);
    b1.applyForce(tempForce);
  }

  // Changes the rule when pressing the key r
  else if (key === 'r')
  {
    if(ruleIndex < 1)
    {
      ruleIndex++;
      // Make into loop
      b1.setRule(ruleIndex);
      b2.setRule(ruleIndex);
      b3.setRule(ruleIndex);
      b4.setRule(ruleIndex);
    }
    else
    {
      ruleIndex = 0;
      // Make into loop
      b1.setRule(ruleIndex);
      b2.setRule(ruleIndex);
      b3.setRule(ruleIndex);
      b4.setRule(ruleIndex);
    }
  }
}