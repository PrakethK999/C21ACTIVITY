const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;

var ball;

var groundObj, leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	var ball_options={
		restitution: 0.3,
		friction: 0,
		density: 0.0015
	}
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	//Create the Bodies.
	groundObj = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(1000, 600, 20, 120);
	rightSide = new Ground(750, 600, 20, 120);
	ellipseMode(RADIUS);
	rectMode(CENTER);
	Engine.run(engine);

  
}


function draw() {
  
  background(0);

  fill("white");
  ellipse(ball.position.x,ball.position.y,20);
  
  groundObj.display();
  leftSide.display();
  rightSide.display();
  Engine.update(engine);
  drawSprites();
}


function keyPressed(){ 
	
	if(keyCode === UP_ARROW){
		Body.applyForce(ball,{x:0,y:0},{x:0.06,y:-0.05}); 
	} 
}

