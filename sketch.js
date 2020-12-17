const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var gameEngine,gameWorld;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(500,900);
  gameEngine=Engine.create();
  gameWorld=gameEngine.world;
 ground=new Ground(250,890,500,20);
 for (var i=0; i<=width; i=i+80)
 {
   divisions.push(new Division(i,730,10,divisionHeight));
 }
 for (var j=0; j<=width; j=j+50)
 {
   plinkos.push(new Plinko(j,75));
 }
 for (var j=0; j<=width; j=j+50)
 {
   plinkos.push(new Plinko(j,175));
 }
 for (var j=0; j<=width; j=j+50)
 {
   plinkos.push(new Plinko(j,275));
 }
 for (var j=0; j<=width; j=j+50)
 {
   plinkos.push(new Plinko(j,375));
 }


}

function draw() {
  background(0);  
  Engine.update(gameEngine);
  ground.display();
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-30, width/2+30), 10));
    
  }
  for (var k=0; k<divisions.length;k++)
  {
    divisions[k].display()
  }
  for (var l=0; l<plinkos.length;l++)
  {
    plinkos[l].display()
  }
  for (var m=0; m<particles.length;m++)
  {
    particles[m].display()
  }
}