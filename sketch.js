
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var plinkos = [];
var particles = [];
var divisions = [];
var divisionHeight = 300;


function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(240,800,480,20);

    for(var k = 0;k<=width;k= k+80){

      divisions.push(new Division(k,height-divisionHeight/2,divisionHeight,10))

    }

    for(var j = 75; j <=width; j=j+50){

      plinkos.push(new Plinko(j,75));

    }

    for(var j = 50; j <=width-10; j=j+50){

      plinkos.push(new Plinko(j,175));

    }

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  for(var j= 0;j<plinkos.length;j++){

   plinkos[j].display();
  }

  for (var k = 0;k<divisions.length;k++){

    divisions[k].display();
  }

  if(frameCount%60===0){


    particles.push(new Particle(random(width/2-10,width/2+10),10,10));



  }
  for(var j= 0;j<particles.length;j++){

    particles[j].display();
   }

  ground.display();
  drawSprites();
 
}



