var maskman, maskman_Image;
var road, road_Image;
var basket1, basket1_Image;
var basket2, basket2_Image;
var basket3, basket3_Image;
var junk, junk_Image;
var unmasked1, unmasked1_Image;
var unmasked2, unmasked2_Image;
var scene1, scene1_Image;
var scene2, scene2_Image;
var warning;
var immunity=100;
var riskfactor=0;

function preload(){
  road_Image = loadImage("Road.jpg");
  maskman_Image = loadImage("Person_Masked1.png");
  basket1_Image = loadImage("Veg_Cart.png");
  basket2_Image = loadImage("Healthy_Food.png");
  basket3_Image = loadImage("Fruit_Veg.png");
  junk_Image = loadImage("Junk Food.png");
  unmasked1_Image =loadImage("Person_NonMasked.png");
  unmasked2_Image = loadImage("Person_Unmasked.png");
  //scene1_Image = loadImage("Masked man_home_without shower.png");
}
  
function setup() {
  createCanvas(displayWidth-20, displayHeight-20);
  
  road = createSprite(300,100,400,100);
  //road = createSprite()
  road.addImage(road_Image);
  road.width = 8000;
  road.y = road.height/2;
  road.velocityY = -4;
  road.scale = 5.0;
  
  maskman = createSprite(300,100,40,40);
  maskman.addImage(maskman_Image);
  maskman.width = 40;
  maskman.height = 40;
  maskman.visibility = true;
  
  basket1 = createSprite(100,175,40,40);
  basket1.addImage(basket1_Image);
  
  basket2 = createSprite(400,175,40,40);
  basket2.addImage(basket2_Image);
  basket2.scale = 0.7;
  
  junk = createSprite(100,350,40,40);
  junk.addImage(junk_Image);
  
  unmasked1 = createSprite(230,350,40,40);
  unmasked1.addImage(unmasked1_Image);
  unmasked1.scale = 0.5;
  
  unmasked2 = createSprite(180,375,40,40);
  unmasked2.addImage(unmasked2_Image);
  
  //scene1 = createSprite(300,100,400,100);
  //scene1.addImage(scene1_Image);
  //scene1.y = scene1.height/2;
  //scene1.scale = 1.5;
}

function draw() {
  background(147, 139, 128);
   
  if (road.y < 0){
     road.y = road.height/2;
  }
  
  if(keyDown("space")){
    road.velocityY = 0;
    maskman.velocityY = 2;
  }
  else if(keyDown("a")){
    maskman.velocityY = 0;
  }
  
  if(keyDown("b")){
    road.velocityY = 0;
    maskman.velocityX = 2;
  }
  else if(keyDown("c")){
    maskman.velocityX = 0;
  }
  
  if(keyDown("y")){
    road.velocityY = 0;
    maskman.velocityX = -2;
  }
  else if(keyDown("z")){
    maskman.velocityX = 0;
  }
  
  if(keyDown("g")){
    road.velocityY = 0;
    maskman.velocityY = -2;
  }
  else if(keyDown("h")){
    maskman.velocityY = 0;
  }
  
  //stroke(28, 28, 28);
  //fill(234, 224, 23);
  //text("Immunity: %" + immunity, 100, 200);
   
  drawSprites();
  
  //console.log(immunity);
  
  if(unmasked1.y - maskman.y === 150){
    
    riskfactor = riskfactor + 30;
  }
  
  if(riskfactor === 30){
    stroke(255, 0, 0);
    fill(204, 101, 192, 127); 
    circle(325, 380, 200);
    text("CAUTION!!!",260,380);
    text("Social Distancing not maintained",240,390);
  }
  
  if(maskman.x - junk.x === 94){
    immunity = immunity - 10;
    riskfactor = riskfactor + 5;
  }
  
  if(riskfactor === 35){
    stroke(255, 0, 0);
    fill(204, 101, 192, 127); 
    circle(325, 380, 200);
    text("CAUTION!!!",260,380);
    text("Healthy food not being eaten to increase immunity.",240,390,210, 300);
  }
  
  
  if(maskman.y <= 146){
    immunity = 100;
    if(riskfactor > 0){
      riskfactor = riskfactor - 1;
    }
    else{
      riskfactor = 0;
    }
  }
  
  //if(immunity<20 && riskfactor>80){
    //text("Game Over.",) 
  //}
  
  //if(immunity === 100){
    //immunity = 100;
  //}

  //console.log(maskman.x)
  //console.log(maskman.y);
  
  //if((basket1.y - maskman.y === 75)){
    //immunity = immunity + 10;
  //}
  
  //console.log(maskman.y);
  
  fill("black");
  text("Immunity: "+ immunity + "%", 50,50);
  text("Risk Factor: "+ riskfactor + "%", 350,50);
}