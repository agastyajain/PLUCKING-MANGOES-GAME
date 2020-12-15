
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var tree,img1;
var boy;
var ground;
var stone;

function preload() {
	bg = loadImage("forest.jpg");
	img1=loadImage("tree.png");
}

function setup() {
	createCanvas(1250, 550);


	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(900, 200, 50, 50);
	mango2 = new Mango(810, 160, 50, 50);
	mango3 = new Mango(950, 130, 50, 50);
	mango4 = new Mango(1150, 200, 50, 50);
	mango5 = new Mango(1000, 230, 50, 50);
	mango6 = new Mango(730, 160, 50, 50);
	mango7 = new Mango(900, 100, 50, 50);
	mango8 = new Mango(1040, 140, 50, 50);
	mango9 = new Mango(810, 240, 50, 50);
	mango10 = new Mango(850, 90, 50, 50);
	ground = new Ground(600, 540, 1300, 20);
	//tree = new Tree(900, 278, 550, 550);
	tree=createSprite(900,300,20,20);
	tree.addImage(img1);
	tree.scale=0.4;
	boy = new Boy(200,430,250,500);
	stone= new Stone(220,240,50,50);
	chain = new Chain(stone.body,{x:230,y:240});


	Engine.run(engine);

}


function draw() {

	background(bg);
	rectMode(CENTER);

	stone.display();
	chain.display();
    drawSprites();
	
	tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	boy.display();
	ground.display();


	if(isTouching(stone,mango1)){
		mango1.isStatic=true;
	}

	if(isTouching(stone,mango2)){
		mango2.isStatic=true;
	}
	if(isTouching(stone,mango3)){
		mango3.isStatic=true;
	}
	if(isTouching(stone,mango4)){
		mango4.isStatic=true;
	}
	if(isTouching(stone,mango5)){
		mango5.isStatic=true;
	}
	if(isTouching(stone,mango6)){
		mango6.isStatic=true;
	}
	if(isTouching(stone,mango7)){
		mango7.isStatic=true;
	}
	if(isTouching(stone,mango8)){
		mango8.isStatic=true;
	}
	if(isTouching(stone,mango9)){
		mango9.isStatic=true;
	}
	if(isTouching(stone,mango10)){
		mango10.isStatic=true;
	}
	
	
	
	

}

function mouseDragged(){
	Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
	chain.fly()
  
	
  }

  function isTouching(  object1, object2) {
    if (
        (object1.x - object2.x < object1.width / 2 + object2.width / 2) &&
        (object2.x - object1.x < object1.width / 2 + object2.width / 2) &&
        (object1.y - object2.y < object1.height / 2 + object2.height / 2) &&
        (object2.y - object1.y < object1.height / 2 + object2.height / 2)
    ) {
        return true;
    }
    else {
        return false;

    }
}



