/*
Add all the three js files(i.e. Ground.js, Hero.js, Fly.js) in the index.html file.
In draw( ) :
Create an object for the Ground class and set it’s x,y, width and height.
Create an object for the Hero class and set it’s x,y and radius.
Create an object for the Fly class and pass bodyA and pointB parameters to it



Inside Ground.js file
Create a Ground class.
Set it’s property true as isStatic.
Create a rectangle body and display it using display( ).
Add white color to the ground.
Inside Hero.js file :
Create a Hero class which will take X and Y coordinates for the position.
Add an image for the hero
Create a circle body and add it to the World.
Write a display( ) to show the hero.

M Inside Fly.js file :
Copy the Rope.js code from your class project wrecking ball.
Update the class name to Fly

Add the mouse function to drag the hero with mouse

Make sure the project works before you submit it.


*/

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint =Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8;
var box10,box9,box11,box12,box13, box14,box15,box16,box17, box18,box19,box20
var backImage,superMan,monster,rope;

function preload() {
backImage=loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(1500, 400);
  // create sprites here
engine=Engine.create();
world=engine.world;

// create the bodies here

ground = new Ground(750,400,1500,20);


box1=new Box(900,100,70,70);
box2=new Box(950,200,70,70);
box3=new Box(1000,100,70,70);
box4=new Box(1050,200,70,70);
box5=new Box(850,200,70,70);
box6=new Box(900,300,70,70);
box7=new Box(1000,300,70,70);
box8=new Box(800,300,70,70);
box9=new Box(1100,300,70,70);
box10=new Box(800,100,70,70);
box11=new Box(800,100,70,70);
box12=new Box(800,100,70,70);
box13=new Box(700,100,70,70);

box14=new Box(700,100,70,70);
box15=new Box(700,100,70,70);
box16=new Box(700,100,70,70);
box17=new Box(700,100,70,70);
box18=new Box(700,100,70,70);
box19=new Box(700,100,70,70);
box20=new Box(700,100,70,70);

superMan=new Superhero(200,200,300,40);
monster=new Monster(1000,50,150,200)
rope =new Fly(superMan.body,{x:600,y:50});

Engine.run(engine);
}

function draw() {
  background(backImage);
Engine.update(engine);

  ground.display();


   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
  box7.display();
   box8.display();
   box9.display();
  //  box10.display();
  // box11.display();
  // box13.display();
  // box12.display();.....
  // box14.display();
  // box15.display();
  // box16.display();
  //  box17.display();............
  // box18.display();
 // box19.display();
  // box20.display();
  superMan.display();
monster.display();
  rope.display() ;
}


function mouseDragged()   {
  Matter.Body.setPosition(superMan.body,{x:mouseX,y:mouseY});

}