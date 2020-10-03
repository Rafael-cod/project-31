const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var ground;

function setup() {
  createCanvas(480,800);

  if(frameCount(%60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }
  
  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,175));
  }

  ground = new Ground(240,790,480,20);
  
}

function draw() {
  background(100);  
  drawSprites();

  ground.display();
  
  for (var j = 0; j < particles.length; j++){
    particles[j],display();
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

}
