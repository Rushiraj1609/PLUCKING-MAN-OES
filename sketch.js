
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var basketImg,basket;

//Declare launcherObject and launchForce variable here
var launcher;


function preload(){
	boy=loadImage("images/boy.png");
  b=loadImage("images/bg23.png");
  basketImg=loadImage("images/basket.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 



	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);

	treeObj=new tree(1050,580);
	groundObject=new ground(1050,600,50,10);
  //create launcherObject here
  sling = new SlingShot(stoneObj.body,{ x: 225, y: 450 });




  boxPosition=950;
 	boxY=540;

   boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+10, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+20, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+80, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxrightSprite=createSprite(boxPosition+180 , boxY, 20,100);
 	boxrightSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+180-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

  basket=createSprite(1050,520,20,20);
  basket.addImage(basketImg);
  basket.scale=0.41;



	Engine.run(engine);


}




function draw() {

  background(b);

  fill("red");
  stroke("white");
  strokeWeight(5);
  textSize(20);
  text(". Press Space to get a second Chance to Play!!",50 ,50);

  
  

  image(boy ,180,380,200,300);

  fill("red");
  stroke("white");
  strokeWeight(5);
  textSize(20);
  text("  . You have to fall any 3 or 4 mangoes in basket ",50 ,100);

  

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();


  stoneObj.display();
  groundObject.display();
  // display launcher object here
  sling.display();
    


  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){

 sling.fly();
}


//create keyPressed function here

function keyPressed(){
  if(keyCode === 32){
  Matter.Body.setPosition(stoneObj.body,{ x: 230, y: 430 });
  sling.attach(stoneObj.body)
}
}
  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }