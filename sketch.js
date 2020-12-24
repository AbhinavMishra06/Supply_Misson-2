 // adding variables
var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var rect1, rect2, rect3;
var packageBody, ground;

 // adding constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup(){

	createCanvas(1516, 720);

	rectMode(CENTER);
	
     // creatting package sprite
	packageSprite=createSprite(width/2, 150, 10, 10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	 // creatting helicopter sprite
	helicopterSprite=createSprite(width/2, 150, 10, 10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	 // creatting ground sprite
	groundSprite=createSprite(width/2, height-40, width, 10);
	groundSprite.shapeColor=color(117, 245, 32);

	 // creatting a box sprite
	rect1 = createSprite(width/2, height-55, 200, 20);
	rect1.shapeColor = color("red");
	rect2 = createSprite(width/2-110, height- 95, 20, 100);
	rect2.shapeColor = ("red");
	rect3 = createSprite(width/2+110, height-95, 20, 100);
	rect3.shapeColor = ("red");

	engine = Engine.create();
	world = engine.world;

	 // creatting package body
	packageBody = Bodies.circle(width/2, 150, 5, {restitution:0.5});
	Matter.Body.setStatic(packageBody, true);
	World.add(world, packageBody);

	 //Creating a Ground body
	ground = Bodies.rectangle(width/2, 659, width, 10 , {isStatic:true} );
	World.add(world, ground);

	 // creatting a box bodies
	rect1 = Bodies.rectangle(width/2, height-55, 200, 20, {isStatic:true});
	rect2 = Bodies.rectangle(width/2-110, height- 95, 20, 100, {isStatic:false});
	rect3 = Bodies.rectangle(width/2+110, height-95, 20, 100, {isStatic:false});
	World.add(world, rect1);
	World.add(world, rect2);
	World.add(world, rect3);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);

	background(0, 191, 255);

	packageSprite.x= packageBody.position.x; 
	packageSprite.y= packageBody.position.y;

	fill(255, 0, 225);
	strokeWeight(10)
	stroke("yellow");
	
	textSize(50);
	textFont("Kristen ITC");
	text("Supply Misson - 2", width/2 - 205 , 75);
	
	drawSprites();

	keyPressed(); 
 
}

function keyPressed() {
	if (keyCode == DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
	}
}




