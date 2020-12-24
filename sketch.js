var blocka,blockb
function setup() {
  createCanvas(800,800);
  blocka=createSprite(400, 200, 50, 50);
  blockb=createSprite(200,200,50,50);
  blockb.shapeColor="red";
  blocka.shapeColor="red";

}

function draw() {
  background(255,255,255);  
  blocka.x=mouseX;
  blocka.y=mouseY;
  if(blocka.x-blockb.x<blocka.width/2+blockb.width/2&&blockb.x-blocka.x<blocka.width/2+blockb.width/2
     && blocka.y-blockb.y<blocka.height/2+blockb.height/2 &&blockb.y-blocka.y<blocka.height/2+blockb.height/2 ){
       
  blocka.shapeColor="lime";
  blockb.shapeColor="lime";
  }
  else{
    blocka.shapeColor="red";
    blockb.shapeColor="red";
    }
   console.log(blockb.y-blocka.y);
  
  drawSprites();

  
}