const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,stand1,stand2;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,
block12,block13,block14,block15,block16;

var slingShot;

function setup() {
  createCanvas(1300,600);


  ground = new Ground(635,580,width,20);
  stand1 = new Ground(535,430,250,15);
  stand2 = new Ground(932,275,190,15);

  block1 = new Block(442,410,30,40,0);
  block2 = new Block(473,410,30,40,0);
  block3 = new Block(504,410,30,40,0);
  block4 = new Block(535,410,30,40,0);
  block5 = new Block(566,410,30,40,0);
  block6 = new Block(597,410,30,40,0);
  block7 = new Block(628,410,30,40,0);

  block8 = new Block(472,380,30,40,0);
  block9 = new Block(503,380,30,40,0);
  block10 = new Block(534,380,30,40,0);
  block11 = new Block(565,380,30,40,0);
  block12 = new Block(596,380,30,40,0);

  block13 = new Block(502,350,30,40,0);
  block14 = new Block(533,350,30,40,0);
  block15 = new Block(564,350,30,40,0);

  block16 = new Block(532,320,30,40,0);

  polygon = new Polygon(150,300,40,50,0);

  slingShot  = new SlingShot(polygon.body,{x:150,y:300});


}

function draw() {
  
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

  polygon.display();

  slingShot.display();
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(polygon.body, {x:150, y:300})
		slingShot.attach(polygon.body);
	}
}