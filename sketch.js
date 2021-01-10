
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roofObject
var rope1,rope2,rope3,rope4,rope5
var world



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(width/2,height/4,width/7,20)
bobD=40
startposx=width/2
startposy=height/4+500
bob1=new Bob(startposx-bobD*2,startposy,bobD)
bob2=new Bob(startposx-bobD,startposy,bobD)
bob3=new Bob(startposx,startposy,bobD)
bob4=new Bob(startposx+bobD*2,startposy,bobD)
bob5=new Bob(startposx+bobD,startposy,bobD)
rope1=new rope(bob1.body,roof.body,-bobD*2,0)
rope2=new rope(bob2.body,roof.body,-bobD*1,0)
rope3=new rope(bob3.body,roof.body,0,0)
rope4=new rope(bob4.body,roof.body,bobD*2,0)
rope5=new rope(bob5.body,roof.body,bobD*2,0)
	Engine.run(engine);
  


//Create a Ground

var render=Render.create({
	element:document.body,
	engine:engine,
	options: {
	width:1200,
	height:700,
wireframes:false
	}
});

/*constraint1={
	bodyA:bobObject1.body,
	bodyB:roofObject.body,
	pointB: {x:-bobDiameter*2, y:0}
}  

constraint2={
bodyA:bobObject2.body,
bodyB:roofObject.body,
pointB:{x:-bobDiameter, y:0}	
}

constraint3={
bodyA:bobObject3.body,
bodyB:roofObject.body,
pointB: {x:0,y:0}	
}

constraint4={
bodyA:bobObject4.body,
bodyB:roofObject.body,
pointB: {x:bobDiameter,y:0}	
}

constraint5={
bodyA:bobObject5.body,
bodyB:roofObject.body,
pointB: {x:bobDiameter*2,y:0}	
}

var pendulum1=Constraint.create(constraint1)
var pendulum2=Constraint.create(constraint2)
var pendulum3=Constraint.create(constraint3)
var pendulum4=Constraint.create(constraint4)
var pendulum5=Constraint.create(constraint5)

World.add(world,pendulum1);
World.add(world,pendulum2);
World.add(world,pendulum3);
World.add(world,pendulum4);
World.add(world,pendulum5);
*/
Engine.run(engine)
//Render.run(render);





function draw() {
  rectMode(CENTER);
  background(230);
  
  roofObject.display()
  bobObject1.display()
bobObject2.display() 
bobObject3.display() 
bobObject4.display() 
bobObject5.display() 

rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()




}
function keyPressed(){
if(keyCode==UP_ARROW)	{
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})	
}
}

function drawLine(constraint){
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

   roofBodyOffset=constraint.pointB;

   roofBodyX=roofBodyPosition.x+roofBodyOffset.x
   roofBodyY=roofBodyPosition.y+roofBodyOffset.y
    line(bobObjectPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY);

}


}