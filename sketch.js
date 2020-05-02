const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;
var canvas,canvas2;
var backgroundimg;
var red1;
var red2;
var redi;
var yellow1;
var yellow2;
var gameState = "red";
function preload(){
backgroundimg = loadImage("grid.png");
}

function setup(){
canvas = createCanvas(750,475);
canvas2 = createSprite(318.5,237.5,700,600);
canvas2.addImage("background",backgroundimg);
engine = Engine.create();
world = engine.world;
red1 = new Red(mouseX,mouseY);
redi = new Red(mouseX,mouseY);
ground1 = new Ground(375,480,750,10);
ground2 = new Ground(0,237.5,13,475);
ground3 = new Ground(90,237.5,13,475);
ground4 = new Ground(180,237.5,13,475);
ground5 = new Ground(270,237.5,13,475);
ground6 = new Ground(360,237.5,13,475);
ground7 = new Ground(450,237.5,13,475);
ground8 = new Ground(540,237.5,13,475);
ground9 = new Ground(630,237.5,13,475);

//Engine.run(engine);
}

function draw(){
background("black");
Engine.update(engine);
drawSprites();
red1.display();
for(var i = 0;i<3;i++){
redi.display();
}
/*ground1.display();
ground2.display();
ground3.display();
ground4.display();
ground5.display();
ground6.display();
ground7.display();
ground8.display();
ground9.display();*/
}
 function mouseDragged(){
  for(var i = 0;i<1;i++){
  redi = new Red(mouseX,mouseY);
  Matter.Body.setPosition(redi.body, {x: mouseX , y: mouseY});
//console.log(redi.position.x);  
}
}

 function mouseDragged(){
  for(var i = 1;i<2;i++){
  redi = new Red(mouseX,mouseY);
  Matter.Body.setPosition(redi.body, {x: mouseX , y: mouseY});
//console.log(redi.position.x);  
}
}
 function mouseDragged(){
  for(var i = 2;i<3;i++){
  redi = new Red(mouseX,mouseY);
  Matter.Body.setPosition(redi.body, {x: mouseX , y: mouseY});
//console.log(redi.position.x);  
}
}







