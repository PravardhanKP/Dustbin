const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

function preload(){
bcimg = loadImage("sprites/bg.png");

}

function setup(){
    var canvas = createCanvas(1600, 700);
    engine = Engine.create();
    world = engine.world;

    groundObject=new ground(width/2,670,width,20);
    bird = new Bird(100,100);
    dustbin=new Dustbin(1200,650);

}

function draw(){
    background(230);
    Engine.update(engine);
   dustbin.display();
   groundObject.display();
    bird.display();
}