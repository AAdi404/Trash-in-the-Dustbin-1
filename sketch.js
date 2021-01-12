const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
var grass;
var engine;
var world;
var dustbin;
var paper;
function setup(){
createCanvas(800,400);
rectMode(CENTER);
engine=Engine.create();
world=engine.world;
Engine.run(engine);
grass=new Ground(600,400,1200,20);
dustbin=new DustBin(720,390,100,10);
paper=new Paper(100,350,10);
}
function draw(){
background("black");
rectMode(CENTER);
background(0);
Throw();
grass.display();
dustbin.display();
paper.display();
}
function Throw(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{
x:0.1,
y:-0.5
}
);
}
}