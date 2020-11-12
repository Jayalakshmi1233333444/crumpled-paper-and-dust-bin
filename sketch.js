
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,db1,db2,db3;
// function preload()
// {
	
// }

function setup() {
	createCanvas(1200,600);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper=new Paper(200,450,40);
	ground=new Ground(600,height,1200,10);
	db1=new Dustbin(width-90,height,130,11);
db2=new Dustbin(width-30,550,11,90);
db3=new Dustbin(width-160,550 ,11,90);
	
	Engine.run(engine);
  
}


function draw() {
	background("yellow");
	Engine.update(engine);
	
	paper.display();
	ground.display();
	db1.display();
	db2.display();
	db3.display();
	//keyPressed()
	//drawSprites();
 //console.log(paper.body.position)
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:78,y:-85})
	}
}



