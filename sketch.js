
let ant1
let walkers = [];
let cake;

function preload(){
  cake = loadImage('images/cake.jpg')
}

function setup() {
  createCanvas(400, 400);
  image(cake,0,0);
  ant1 = new Ant (random(0,400),random(0,400));
  
  for(i = 0; i < 20; i ++){
    let x = random(0, width);
    let y = random (0, height);
    let r = random(7,126);
    let g = random(117,196);
    let b = random(20,170);
    walkers[i] = new Walker(x,y,r,g,b);
  }
 
}

function draw() {
  
  for (x = 0; x < walkers.length; x++){
    walkers[x].step();
    walkers[x].show();
    
  }

  ant1.move();
  ant1.show();
  ant1.checkEdges();
 



}

class Walker {
  constructor (x,y, r, g, b){
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;

  }

  step(){
    this.x += random(-1,1);
    this.y += random (-1,1);
  }

  show(){
    strokeWeight(2);
    stroke(this.r, this.g, this.b);
    point(this.x, this.y);
  }
}

class Ant {
  constructor (x,y){
    this.x = x;
    this.y = y;
  }

  move(){
    this.x = this.x + random (-400,400);
    this.y = this.y + random (-400,400);
   }

  show(){
    fill(0,0,0)
    noStroke();
    rect(this.x,this.y, 10,5);
  
  }

  checkEdges(){
    if (this.x < 15) {
      this.x = 15;
    } else if (this.x > width - 15){
      this.x = width - 15;
    }
    if (this.y < 15){
      this.y = 15;
    } else if (this.y > height - 15){
      this.y + height - 15;
    }





}

}