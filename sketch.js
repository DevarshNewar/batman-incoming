const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine, world;
var drops = [];




function preload() {



}

function setup() {
     createCanvas(600, 600);

     engine = Engine.create();
     world = engine.world;

     //Engine.run(engine);


     batman = new Bruce(200, 390);
     ground = new Ground(300, 450, 600, 20);



}

function draw() {
     background(0)

     Engine.update(engine);
     ground.display();
     batman.display();
     //rain.display();



     drops.push(new Raindrop(random(20, 500), random(20, 20)))




     for (var k = 0; k < drops.length; k++) {

          drops[k].display();
          //drops[k].updateY();


     }

}