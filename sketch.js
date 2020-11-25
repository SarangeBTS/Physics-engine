const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myworld, myengine,ground,ball;


function setup() {
  createCanvas(400,400);

  myengine = Engine.create();  //.world
  myworld = myengine.world;


  var ground_options = {
    isStatic: true
  }

  var ball_options={
    restitution:1
  }

  ground = Bodies.rectangle(200,380,400,40,ground_options);
  World.add(myworld,ground);

  
 
  ball=Bodies.circle(200,100,30,ball_options);
  World.add(myworld,ball);
  

}

function draw() {
  background("black"); 

  Engine.update(myengine);
  console.log(ground.position.y);

  fill("purple");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,40);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
  
}