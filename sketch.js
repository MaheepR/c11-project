var track,trackImg;
var runner,runner_img;
var invisibleBoundary1,invisibleBoundary2;
function preload(){
  //pre-load image
  trackImg.loadImage("path.png");
  runner_img.loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
   track=createSprite(200,200);
  track.addImage("track",trackImg);
  track.scale=1.2;
  track.velocityY=4;

  runner=createSprite(250,390,20,20);
  runner.addAnimation("running",runner_img);

  invisibleBoundary1=createSprite(205,200);
  invisibleBoundary2=createSprite(405,200);
}

function draw() {
  background(0);

if(track>400){
  track.y=track.height/2;
}

  invisibleBoundary1.visible=false;
  invisibleBoundary2.visible=false;

  runner.collide(invisibleBoundary1);
  runner.collide(invisibleBoundary2);

}
