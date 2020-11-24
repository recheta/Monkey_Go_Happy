
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score,bg;
PLAY=1;
END=0;
var gamestate=1;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() 
{
  createCanvas(600,600)
  monkey = createSprite(100,200,30,30);
  monkey.addAnimation("move",monkey_running)
  monkey.scale=0.2;
  
  bg = createSprite(300,550,1200,10);
  
  
  obstacleGroup = new Group();
  FoodGroup = new Group();
  score=0;
 
}


function draw() 
{
  if(gamestate===1)
  {
  background("white");
  bg.velocityX=-2;
  
  if (bg.x < 0)
  {
    bg.x=bg.width/2;  
    
  } 
  
  if (keyDown("space")) 
  {
      monkey.velocityY=-5;
    
  }
  monkey.velocityY=monkey.velocityY+0.2;
  monkey.collide(bg);
  
  spawnobstacle();
  spawnbanana();
  
   text("score:"+score,450,150);
  if (FoodGroup.isTouching(monkey))
    {
        FoodGroup.destroyEach();
        score=score+100;
        
      
    }
  if (obstacleGroup.isTouching(monkey))
  {
    obstacleGroup.destroyEach();
    FoodGroup.destroyEach();
    monkey.destroy();
    gamestate=0;
    
  }
  }
    
  drawSprites();
  
}
function spawnobstacle() 
{
    if (frameCount%480===0)
    {
      obstacle = createSprite(300,520,50,50);
      obstacle.addImage("iiijj",obstacleImage)
      obstacle.scale=0.2;
      obstacle.velocityX=-2;
      obstacle.Lifetime=300;
      obstacleGroup.add(obstacle); 
    }
  
  
  
}

function spawnbanana() 
{
    if (frameCount%180===0)
    {
      banana = createSprite(300,350,50,50);
      banana.addImage("iiijj",bananaImage)
      banana.scale=0.1;
      banana.velocityX=-2;
      banana.Lifetime=300;
      FoodGroup.add(banana); 
      banana.y=Math.round(random(150,400))
    }
  
}





