// rule defines how the physics work (Sticky, Bouncy etc...)
let rule = 0;
let airRes = 0.997;
let diameter = 50;
let radius = diameter/2;
// isEdge detects whether the ball touches the edge or not
let isEdge = false;

class Ball
{
  constructor(x,y, ax, ay, r)
  {
    this.position = new createVector(x, y);
    this.velocity = new createVector(0, 0);
    this.acceleration = new createVector(ax, ay);
    this.mass = 1;
    this.rule = r;
    this.isEdge = false;
  }

  setRule(r)
  {
    this.rule = r;
  }

  update()
  {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    // Limits the velocity to 100
    this.velocity.limit(50);
  }

  applyForce(force)
  {
    // Static Vector that creates a new one based on .div method
    // Non-static methods only update the current vector, not create a new one
    let f = p5.Vector.div(force, this.mass);
    // If bouncy, add acceleration by force
    if(this.rule === 0)
    {
      this.acceleration.mult(0);
      this.acceleration.add(f);
    }
    // If sticky, set acceleration to 0
    else if(this.rule === 1)
    {
      this.acceleration.x = 0;
      this.acceleration.y = 0;
    }
  }
  display()
  {
    push();
    stroke(255);
    fill(255);
    ellipse(this.position.x, this.position.y, 50, 50);
  }

  bounceEdges()
  {
    // Rule 0: Bouncy
    if(this.rule === 0)
    {
      if(this.position.x > width-radius)
      {
        this.position.x = width-radius;
        this.velocity.x *= -1;
      }
      if(this.position.x < radius)
      {
        this.position.x = radius;
        this.velocity.x *= -1;
      }
      if(this.position.y > height-radius)
      {
        this.position.y = height-radius;
        this.velocity.y *= -1;
      }
      if(this.position.y < radius)
      {
        this.position.y = radius;
        this.velocity.y *= -1;
      }
    }
    //!! For the rubbery effect to work, we have to communicate between border and the ball meeting the edge

    // Rule 1: Sticky
    if(this.rule === 1)
    {
      // All the if and else if statements check if the ball goes out of the border, then sticks the ball entirely.
      if(this.position.x > width-radius/2)
      {
        // Offsets position so it doesn't go overbound
        this.position.x = width-radius/2;
        this.position.y = this.position.y;
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.acceleration.x = 0;
        this.acceleration.x = 0;
        // Sets isEdge to true so sketch knows when to draw other stuff
        this.isEdge = true;
      }
      else if(this.position.x < radius/2)
      {
        this.position.x = radius/2;
        this.position.y = this.position.y;
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.acceleration.x = 0;
        this.acceleration.y = 0;
        this.isEdge = true;
      }
      else if(this.position.y > height-radius/2)
      {
        this.position.y = height-radius/2;
        this.position.x = this.position.x;
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.acceleration.x = 0;
        this.acceleration.y = 0;
        this.isEdge = true;
      }
      else if(this.position.y < radius/2)
      {
        this.position.y = radius/2;
        this.position.x = this.position.x;
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.acceleration.x = 0;
        this.acceleration.y = 0;
        this.isEdge = true;
      }
      else
      {
        this.isEdge = false;
      }
    }
  }

  //!! Add collision between the balls
  checkCollision(other)
  {
    let distance = p5.Vector.sub(other.position, this.position);
    
    // Calculate magnitude of the vector separating the balls
    let distanceMag = distance.mag();

    // Minimum distance between the balls before they touch, added 15 so
    // it's less likely to get stuck together
    let minDistance = diameter+15;
    // If the distance between the two balls is shorter than the minimum distance
    // The balls go to different directions
    if (distanceMag < minDistance)
    {
      print('Time for collision');
      this.velocity.x *= -1;
      this.velocity.y *= -1;
      this.velocity.limit(50);
    }
  }
}