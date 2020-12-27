var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var score
var survivalTime = 0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;

  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  

}


function draw() {
  background(300);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("SurvivalTime: " + survivalTime, 100, 50);
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y >= height-100){
    monkey.velocityY = -20;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  spawnFood();
  
  spawnObstacles();
  
  drawSprites();
}

function spawnFood() {
  if (frameCount % 80 === 0){
    banana = createSprite(400, 200, 20, 20);
    banana.y = Math.round(random(height-100, height-300));
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.lifetime = 100;
    banana.scale = 0.1;
    
    FoodGroup.add(banana);
    
  }
}
  
  function spawnObstacles() {
    if (frameCount % 300 === 0){
    obstacle = createSprite(400, 330, 20, 20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.lifetime = 100;
    obstacle.scale = 0.1;
    
    obstacleGroup.add(obstacle);
    }
}