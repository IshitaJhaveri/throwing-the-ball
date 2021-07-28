const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var up;
var right;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  ball = Bodies.circle(100,250,10,{restitution:0.3,density:0.099});
  World.add(world , ball);
  up = createImg("push.png");
  up.position(50,50);
  up.size(30,40)
  up.mouseClicked(moveUp)

  
  ground =new Ground(600,590,1200,20);
  right = new Ground(1000,550,20,100);
  left = new Ground(800,550,20,100);
  
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
   left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
}
function moveUp()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:-0.01})

}
