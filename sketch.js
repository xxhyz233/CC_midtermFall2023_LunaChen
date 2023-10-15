let xPos = 400;
let yPos = 400;
let ySpeed = 0;
let Accel = 0.5;

let diameter = 50;
let rWidth = 50;
let rHeight = 50;

class Physical
{
    constructor(xPos, yPos, diameter)
    {
        this.xPos = xPos;
        this.yPos = yPos;
        this.diameter = diameter;
        this.ySpeed = ySpeed;
    }

    drop()
    {
        this.ySpeed = this.ySpeed + Accel;

        this.yPos = this.yPos + this.ySpeed;

        if (this.yPos + this.diameter/2 > height)
        {
            this.ySpeed = -this.ySpeed;
            this.yPos = height - this.diameter/2;
        }

        this.ySpeed = this.ySpeed * 0.997;
    }
}

class PhysEllipse extends Physical
{
    constructor(xPos, yPos, diameter)
    {
        super(xPos,yPos);
        this.diameter = diameter;
    }

    drop()
    {
        this.ySpeed = this.ySpeed + Accel;

        this.yPos = this.yPos + this.ySpeed;

        if (this.yPos + this.diameter/2 > height)
        {
            this.ySpeed = -this.ySpeed;
            this.yPos = height - this.diameter/2;
        }

        this.ySpeed = this.ySpeed * 0.997;
        ellipse(this.xPos, this.yPos, this.diameter);
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

    drop()
    {
        this.ySpeed = this.ySpeed + Accel;

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
    ball1.drop();
    rect1.drop();
    
}

