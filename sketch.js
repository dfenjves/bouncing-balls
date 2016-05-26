var ballArray = [];

function setup() {
  createCanvas(800, 600);
  for (var i = 0; i < 1; i++) {
    ballArray.push(new Ball());
  };
}

function draw() {
  //set the background color
  background(240);
  ballArray.forEach(function(ball){
    ball.move();
    ball.show();
  })
}

function mousePressed(){
  ballArray.push(new Ball());
}

function Ball() {
  this.diameter = random(10,100);
  this.x = random(this.diameter, width - this.diameter);
  this.y = random(this.diameter,height-this.diameter);
  this.ySpeed = random(1,10);
  this.xSpeed = random(1,10);
  this.ballColor = color(random(255),random(255),random(255));

  this.move = function(){
    this.y += this.ySpeed;
    this.x += this.xSpeed
    if(((this.y+this.diameter/2)> height) || ((this.y-this.diameter/2) < 0)) {
      this.ySpeed = this.ySpeed * -1
    }
    if(((this.x+this.diameter/2) > width) || ((this.x - this.diameter/2) < 0)) {
      this.xSpeed = this.xSpeed * -1
    }
  }

  this.show = function(){
    fill(this.ballColor);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

}