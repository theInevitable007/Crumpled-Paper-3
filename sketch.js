const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var paper;
var bin1,bin2,bin3,bin4;
var ground;
var gameState = "onSling";
var launcher;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;

	ground = new Gnd(600,700,1200,20);
			
	bin1 = new Bin(990,590,200,200);
	paper = new Paper (200,670,70);
	bin2 = new invBin(1090,590,20,200);
	bin3 = new invBin(890,590,20,200);
	//bin4 = new invBin(990,700,200,20); 
    launcher = new Launcher(paper.body,{x : 200, y : 350})


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");

Engine.update(engine);     	 
	 
	 
	 
	 paper.display();
	 ground.display();
	 bin1.display();
	 
	 bin2.display();
	 bin3.display();

	 launcher.display();
	      	 	 
  drawSprites();
 
 }

 function mouseDragged(){
    gameState 
    if (gameState ==="onSling"){
        Matter.Body.setPosition(paper.body,{x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    launcher.fly();
    gameState = "launched";
}


function keyPressed(){
	console.log("keyPressed")
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:925,y:-925});
       
	}
}