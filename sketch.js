const Engine = Matter.Engine;
const World = Matter.Wolrd;
const Bodies = Matter.Bodies;

var engine, world;
var maxDrops = 100;
var drops = [];

function preload(){
    
}

function setup(){
   createCanvas(windowWidth,windowHeight);

   engine = Engine.create();
   world = engine.world;

   for(var i = 0; i<maxDrops; i++){
       drops.push(new createDrops(random(0,windowWidth), random(0,windowHeight)));
   }
    
}

function draw(){
    background(0);

    for(var i=0; i<maxDrops; i++){
        drops[i].display;
        drops[i].update;
    }
    
}   

