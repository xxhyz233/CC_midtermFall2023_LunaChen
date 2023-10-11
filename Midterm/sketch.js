function setup()
{
    createCanvas(800,800);
    background(0);
}

function draw()
{
    background(0);
    fill(255,0,0);
    noStroke();
    ellipse(mouseX, mouseY, 50, 50);
}