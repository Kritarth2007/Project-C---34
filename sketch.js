
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =  Matter.Constraint;
var ground,sling,ball,box1


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	 ground = new GroundClass(600,600,1200,20)
	 ball = new Ball(200,200,80)
	 sling = new SlingShot(ball.body,{x:400,y:50})
	 box1 = new BoxClass(500,550,100,100)
	 box2 = new BoxClass(600,550,100,100)
	 box3 = new BoxClass(700,550,100,100)
	 box4 = new BoxClass(500,450,100,100)
	 box5 = new BoxClass(600,450,100,100)
	 box6 = new BoxClass(700,450,100,100)
	 box7 = new BoxClass(500,350,100,100)
	 box8 = new BoxClass(600,350,100,100)
	 box9 = new BoxClass(700,350,100,100)
	 box10 = new BoxClass(500,250,100,100)
	 box11 = new BoxClass(600,250,100,100)
	 box12 = new BoxClass(700,250,100,100)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  ground.display()
  ball.display()
  sling.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  drawSprites();
 
}

function mouseDragged () {
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}


