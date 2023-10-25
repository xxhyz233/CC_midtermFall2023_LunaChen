let xPos = 400;
let yPos = 400;

let accel = 0.1;

let diameter = 50;
let rWidth = 50;
let rHeight = 50;

class Physical
{
    constructor(xPos, yPos, diameter)
    {
        this.xPos = xPos;
        this.yPos = yPos;
        this.position = new createVector(xPos,yPos);
        this.velocity = new createVector(0,0);

        this.diameter = diameter;
    }
}

class PhysEllipse extends Physical
{
    constructor(xPos, yPos, diameter)
    {
        super(xPos, yPos, diameter);
    }

    canvasCollision()
    {
        // Set velocity
        
        this.velocity.add(accel, accel);
        print('X: ' + this.position.x + ', Y: ' + this.position.y);
        print(accel);
        // Set position
        this.position.add(this.velocity);
        // Limit Speed

        if (this.position.y + this.diameter/2 > height)
        {
            this.velocity.y.mult(-1);
            this.position.y = height - this.diameter/2;
        }

        // Air resistance multiply by 0.997

        // Display
        ellipse(this.position.x, this.position.y, this.diameter);
    }
}

class PhysRect extends Physical
{
    constructor (xPos, yPos, rWidth, rHeight)
    {
        super(xPos, yPos);
        this.rWidth = rWidth;
        this.rHeight = rHeight;
    }

    canvasCollision()
    {
        // Set speed
        this.ySpeed = ySpeed + accel;

        // Set position
        this.yPos = this.yPos + this.ySpeed;

        if ((this.yPos + this.rWidth > width) || (this.yPos + this.rHeight > height))
        {
            this.ySpeed = -this.ySpeed;
            this.yPos = height - this.rHeight;
        }

        this.ySpeed = this.ySpeed * 0.997;
        rect(this.xPos, this.yPos, this.rWidth, this.rHeight);
    }
}

let ball1 = new PhysEllipse(400,400,60);
let rect1 = new PhysRect(400,400,80,80);

function setup()
{
    createCanvas(800,800);
}

function draw()
{
    background(0);
    fill(200,0,0);
    ball1.canvasCollision();
    rect1.canvasCollision();
}

