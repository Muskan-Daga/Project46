const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
 var bg2;
var bg;
var engine,world;
var girl,home,hospital,virus,germ,aeroplane,bus,cigarette,mask,sanitizer,vaccine,gathering,veggie,fruits,pizza,bfc_junk,mask2,sanitizer2;
var girl1,home1,hospital1,virus1,germ1,aeroplane1,bus1,cigarette1,mask1,sanitizer1,vaccine1,gathering1,veggie1,fruits1,pizza1,bfc_junk1;

function preload(){
bg=loadImage("bg.jpg");
bg2=loadImage("bg2.jpg");
girl1=loadImage("girlfinal.png");
home1=loadImage("home.png");
hospital1=loadImage("hospital.png");
virus1=loadImage("virus.png");
germ1=loadImage("germ.png");
aeroplane1=loadImage("aeroplaneimg.jpg");
bus1=loadImage("busimg.jpg");
cigarette1=loadImage("Cigaretteimg.jpg");
mask1=loadImage("maskimg.jpg");
sanitizer1=loadImage("sanitizerimg.jpg");
vaccine1=loadImage("vaccineimg.jpg");
gathering1=loadImage("gathering.png");
veggie1=loadImage("veggie.jpg");
fruits1=loadImage("fruits.jpg");
pizza1=loadImage("pizza.png");
bfc_junk1=loadImage("bfc_junk.png");
}

function setup() {

  engine=Engine.create();
  world=engine.world;

  createCanvas(displayWidth,displayHeight);
  
  girl=createSprite(50,displayHeight-200,50,50);
  girl.addImage(girl1);
  girl.scale=0.25;

  home=createSprite(displayWidth-150,displayHeight-750,50,50);
  home.addImage(home1);
  home.scale=0.85;

  hospital=createSprite(displayWidth-150,displayHeight-235,50,50);
  hospital.addImage(hospital1);
  hospital.scale=0.8;

  aeroplane=createSprite(50,displayHeight-695,10,10);
  aeroplane.addImage(aeroplane1);
  aeroplane.scale=0.12;

  bus =createSprite(50,displayHeight-650,10,10);
  bus.addImage(bus1);
  bus.scale=0.12;

  mask=createSprite(50,displayHeight-520,10,10);
  mask.addImage(mask1);
  mask.scale=0.3;

  pizza=createSprite(50,displayHeight-380,10,10);
  pizza.addImage(pizza1);
  pizza.scale=0.35;
  
  sanitizer=createSprite(400,displayHeight-680,10,10);
  sanitizer.addImage(sanitizer1);
  sanitizer.scale=0.2;

  vaccine=createSprite(395,displayHeight-520,10,10);
  vaccine.addImage(vaccine1);
  vaccine.scale=0.1;

  gathering=createSprite(400,displayHeight-370,10,10);
  gathering.addImage(gathering1);
  gathering.scale=0.25;

  veggie=createSprite(400,displayHeight-180,50,50);
  veggie.addImage(veggie1);
  veggie.scale=0.1;

  fruits=createSprite(400,displayHeight-236,50,50);
  fruits.addImage(fruits1);
  fruits.scale=0.1;

  bfc_junk=createSprite(700,displayHeight-680,10,10);
  bfc_junk.addImage(bfc_junk1);
  bfc_junk.scale=0.34;
}

function draw() {
  background(bg);

  fill("red");
  textSize(60);
  text("TRAP OF 2021",570,displayHeight-790);

  fill(255);
  textSize(20);
  strokeWeight(1);
  stroke(255);
  text("TRAVEL",20,displayHeight-730);

  fill("yellow");
  textSize(20);
  strokeWeight(4);
  stroke(0);
  text("MASK",20,displayHeight-570);

  fill("blue");
  textSize(20);
  strokeWeight(4);
  stroke(0);
  text("PIZZA",20,displayHeight-420);

  fill("white");
  textSize(20);
  strokeWeight(1);
  stroke(255);
  text("SANITIZER",350,displayHeight-730);

  fill("yellow");
  textSize(20);
  strokeWeight(4);
  stroke(0);
  text("VACCINE",350,displayHeight-570);

  fill("blue");
  textSize(20);
  strokeWeight(4);
  stroke(0);
  text("GATHERINGS",335,displayHeight-420);

  fill("green");
  textSize(20);
  strokeWeight(4);
  stroke(0);
  text("FRUITS/VEGGIES",320,displayHeight-270);

  fill("white");
  textSize(20);
  strokeWeight(1);
  stroke(255);
  text("JUNK FOOD",650,displayHeight-730);

  Engine.update(engine);

  spawnvirus();
  spawngerm();
  spawncig();
  
  drawSprites();
}

function spawnvirus(){
  if(frameCount % 70 === 0){
    virus=createSprite(displayWidth,displayHeight/2,10,10);
    virus.addImage(virus1);
    virus.scale=0.1;
    virus.velocityX=-2;
    virus.x=Math.round(random(displayWidth,displayWidth+500));    
    virus.y=Math.round(random(10,displayHeight));
  }
}
  function spawngerm(){
    if(frameCount % 70 === 0){
      germ=createSprite(displayWidth/2,displayHeight,10,10);
      germ.addImage(germ1);
      germ.scale=0.1;
      germ.velocityY=-2;
      germ.x=Math.round(random(displayWidth-1200,displayWidth));    
      germ.y=Math.round(random(displayWidth,10)); 
  
  }
}
  function spawncig(){
  if(frameCount % 150 === 0){
    cigarette=createSprite(0,displayHeight/2-100,10,10);
    cigarette.addImage(cigarette1);
    cigarette.scale=0.1;
    cigarette.velocityX=2;
    cigarette.velocityY=-2;
    cigarette.x=Math.round(random(0,displayWidth));   
    cigarette.y=Math.round(random(displayHeight/2,0));

    mask2=createSprite(0,displayHeight/2-500,10,10);
    mask2.addImage(mask1);
    mask2.scale=0.2;
    mask2.velocityX=2;
    mask2.x=Math.round(random(0,displayWidth));   
    mask2.y=Math.round(random(displayHeight/2,0));

    sanitizer2=createSprite(displayWidth,displayHeight/2,10,10);
    sanitizer2.addImage(sanitizer1);
    sanitizer2.scale=0.15;
    sanitizer2.velocityX=2;
    sanitizer2.velocityY=-2;
    sanitizer2.x=Math.round(random(displayWidth,0));   
    sanitizer2.y=Math.round(random(0,displayHeight/2));
  }
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    girl.y += -60;
  }
  if(keyCode === DOWN_ARROW){
    girl.y +=  60;
  }
  if(keyCode === RIGHT_ARROW){
    girl.x +=  60;
  }
  if(keyCode === LEFT_ARROW){
    girl.x += -60;
  }
}