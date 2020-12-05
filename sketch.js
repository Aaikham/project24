const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload(){
    
}
function setup(){
    canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,width,20);
    
    

    ball = new Ball(200,200,20,20);
   
    

    box1 = new Box(700+250,height-50,20,100);
    box2 = new Box(920+250,height-50,20,100);
    box3 = new Box(920+250,height-150,20,100);

    wall1 = new Box(width+10,height/2,20,height);
    wall2 = new Box(-10,height/2,20,height);
    box5 = new Box(810+250,height-20,200,20);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    

    box1.display();
    box2.display();
    ball.display()

    

    

    ground.display();

    box5.display();

   
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(bird.body,bird.body.position,{x:45-25,y:-45+25})
    }
}