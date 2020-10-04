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
  engine = Engine.create(); world = engine.world;

  createCanvas(800,800);

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height - divisionHeight/4, 10, divisionHeight));
  }
  
  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 15; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,375));
  }

  ground = new Ground(400,790,800,20);
  
}

function draw() {
  background(100);  
  Engine.update(engine);

  drawSprites();

  ground.display();
  
  for (var i = 0; i < particles.length; i++){
    particles[i].display();
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

}
