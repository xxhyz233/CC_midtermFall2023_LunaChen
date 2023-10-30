// rule defines how the physics work (Sticky, Bouncy etc...)
let rule = 0;
let airRes = 0.997;
class Ball
{
  constructor(x,y, ax, ay, r)
  {
    this.position = new createVector(x, y);
    this.velocity = new createVector(0, 0);
    this.acceleration = new createVector(ax, ay);
    this.mass = 1;
    this.rule = r;
  }

  setRule(r)
  {
    this.rule = r;
  }

  update()
  {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.velocity.limit(100);
    // Use v1.limit(max) to limit the velocity

  }

  applyForce(force)
  {
    // Static Vector that creates a new one based on .div method
    // Non-static methods only update the current vector, not create a new one
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }
  display()
  {
    push();
    stroke(255);
    fill(255);
    ellipse(this.position.x, this.position.y, 50, 50);
  }

  checkEdges()
  {
    if(this.rule === 0)
    {
      if(this.position.x > width)
      {
        this.position.x = width;
        this.velocity.x *= -1;
      }
      if(this.position.x < 0)
      {
          this.position.x = 0;
        this.velocity.x *= -1;
      }
      if(this.position.y > height)
      {
        this.position.y = height;
        this.velocity.y *= -1;
      }
      if(this.position.y < 0)
      {
        this.position.y = 0;
        this.velocity.y *= -1;
      }
    }

    if(this.rule === 1)
    {
      if(this.position.x > width)
      {
        this.position.x = width;
        this.velocity.x *= 0;
      }
      if(this.position.x < 0)
      {
          this.position.x = 0;
        this.velocity.x *= 0;
      }
      if(this.position.y > height)
      {
        this.position.y = height;
        this.velocity.y *= 0;
      }
      if(this.position.y < 0)
      {
        this.position.y = 0;
        this.velocity.y *= 0;
      }
    }

  }

  checkCollision()
  {

  }
}