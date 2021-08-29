const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerbase,computerplayer,playerbase,player;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
computerbase = new ComputerBase(200,600,200,200);
playerbase = new PlayerBase(500,200,200,200);
player = new Player(500,200,200,400);
computerplayer = new ComputerPlayer(500,200,200,400);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
computerbase.display();
playerbase.display();
player.display();
computerplayer.display();
   //display Player and computerplayer


}
