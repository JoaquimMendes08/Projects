var caixas;



function setup() {
  createCanvas(400,400);
  caixas= createSprite(200,200,20,20)
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    caixas.position.x+=3
  }
  if(keyIsDown(LEFT_ARROW)){
    caixas.position.x+=-3
  }
  if(keyIsDown(UP_ARROW)){
    caixas.position.y-=3
  }
  if(keyIsDown(DOWN_ARROW)){
    caixas.position.y-=-3
  }
drawSprites()
}




