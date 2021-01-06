const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var a;
var circles=[];

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  stroke(255)
  Polygon = new polygon(50,50,20,20,5);

  slingshot = new SlingShot(this.polygon,{x:100,y:200});

  ground = new Ground(400,790,800,20);
  stand1 = new Ground(390,400,200,10);
  stand2 = new Ground(620,300,200,10);

  block1 = new Box(550,230,30,40);
  block2 = new Box(580,230,30,40);
  block3 = new Box(610,230,30,40);
  block4 = new Box(640,230,30,40);
  block5 = new Box(670,230,30,40);
  block6 = new Box(580,190,30,40);
  block7 = new Box(610,190,30,40);

  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  block16 = new Box(390,155,30,40);
  
  block17 = new Box(640,190,30,40);
  block18 = new Box(610,150,30,40);
 
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  Engine.update(engine);

  Polygon.display();

  ground.display();
  stand1.display();
  stand2.display();

  block1.display();
  block2.display(); 
  block3.display();
  block4.display(); 
  block5.display(); 
  block6.display(); 
  block7.display(); 
  block8.display(); 
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
 
  
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 