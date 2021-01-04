const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var polygon,polygonImg;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,
block11,block12,block13,block14,block16;
var ground;

function preload(){

polygonImg = loadImage("polygon.png")

}

function setup(){

createCanvas(1000,800);
engine = Engine.create;
world = engine.world;

polygon = createSprite(100,390,1,1)
polygon.addImage(polygonImg);
polygon.scale = 0.15;

ground = new Ground(300,300,20,100);



//block1 = new Box(600,600,30,40);

Engine.run(engine);

}

function draw(){

background(rgb(252,19,75))
//block1.display();
drawSprites();

}