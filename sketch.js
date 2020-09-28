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
  
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

for(var i = 0; i <= width; i = i + 80){
  divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight) )
}

for(var i = 40; i <= width; i = i + 50){
  plinkos.push(new Plinko(j,75));
}

for(var i = 15; i <= width; i = i + 50){
  plinkos.push(new Plinko(j,175));
}