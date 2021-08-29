var bg,bgimg,mole,moleimg,hammer,hammerimg
var mole1,mole2,mole3,mole4,mole5 ,mole6,mole7,moleGroup
var score=0
var limit=0

function preload(){
 hammerimg=loadImage("hammer.png")
  bgimg=loadImage("bg.png")
  moleimg=loadImage("mole.png")
  
}

function setup() {
  createCanvas(725, 590);
  bg=createSprite(325,280,400,400)
  bg.addImage(bgimg)

  bg.scale=2
  hammer=createSprite(40,200)
    hammer.addImage (hammerimg)  
  hammer.scale=0.3
  moleGroup=new Group()
}


function draw() {
  background(220);
  hammer.x=mouseX
  hammer.y=mouseY
  if (mouseIsPressed&&limit===0){
    mole=createSprite(355,300,400,400)
    mole.addImage(moleimg)
    mole.scale=0.7
    limit=1
    mole.depth=hammer.depth;
    hammer.depth+=1
    score+=5
    moleGroup.add(mole)
  }
  if (mousePressedOver(mole)&&limit===1){
    moleGroup.destroyEach()
    mole1=createSprite(65,48,400,400)
    mole1.addImage(moleimg)
    mole1.scale=0.7
    limit=2
    mole1.depth=hammer.depth;
    hammer.depth+=1
    score+=5
    moleGroup.add(mole1)
  }
  
  if (mousePressedOver(mole1)&&limit===2){
    moleGroup.destroyEach()
    mole2=createSprite(625,400,400,400)
    mole2.addImage(moleimg)
    mole2.scale=0.7
    limit=3
    mole2.depth=hammer.depth;
    hammer.depth+=1
    score+=5
    moleGroup.add(mole2)
  }
  
  if (mousePressedOver(mole2)&&limit===3){
    moleGroup.destroyEach()
    mole3=createSprite(50,250,400,400)
    mole3.addImage(moleimg)
    mole3.scale=0.7
    limit=4
    mole3.depth=hammer.depth;
    hammer.depth+=1
    score+=5
    moleGroup.add(mole3)
  }
  
  
  if (mousePressedOver(mole3)&&limit===4){
    moleGroup.destroyEach()
    mole4=createSprite(590,100,400,400)
    mole4.addImage(moleimg)
    mole4.scale=0.7
    limit=5
    mole4.depth=hammer.depth;
    hammer.depth+=1
    score+=5
    moleGroup.add(mole4)
  }
  
  
  
  
  
  
  if (mousePressedOver(mole4)&&limit===5){
    moleGroup.destroyEach()
    mole5=createSprite(190,455,400,400)
    mole5.addImage(moleimg)
    mole5.scale=0.7
    limit=6
    mole5.depth=hammer.depth;
    hammer.depth+=1
    score+=5
    moleGroup.add(mole5)
  }
  
  
  
  if (mousePressedOver(mole5)&&limit===6){
    moleGroup.destroyEach()
    mole6=createSprite(660,220,400,400)
    mole6.addImage(moleimg)
    mole6.scale=0.7
    limit=7
    mole6.depth=hammer.depth;
    hammer.depth+=1
    score+=5
    moleGroup.add(mole6)
  }
  
  
  
  
  
  
  
  
  
  
  
  if (mousePressedOver(mole6)&&limit===7){
    moleGroup.destroyEach()
    mole7=createSprite(310,132.5,400,400)
    mole7.addImage(moleimg)
    mole7.scale=0.7
    limit=8
    mole7.depth=hammer.depth;
    hammer.depth+=1
    score+=5
    moleGroup.add(mole7)
  }
  
  
  
  
  
  
drawSprites()  
  
  if (mousePressedOver(mole7)&&limit===8){
    limit=9
    moleGroup.destroyEach()
textSize(35)
  fill("lime") 
    text("YOU WON!",200,400)
    
  }
  
  
  
  
  
  
  
  textSize(20)
  fill("white")
  text("SCORE= "+score,530,400)
  //text(mouseX+","+mouseY,mouseX,mouseY)
  
}
  
  
  
  
  
  
  