var chao,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
chao =createSprite(200,200);
chao.addImage("path.png", pathImg);


//Criando menino que corre 
boy=createSprite(200,350);
boy.addAnimation("garoto correndo",boyImg);
boy.scale=0.05;
// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(25,200,50,400);
leftBoundary.visible = false;

//Crie Boundary direito 
rightBoundary=createSprite(375,200,50,400)
rightBoundary.visible= false;

}

function draw() {
background(0);
chao.velocityY = 4;
if(chao.y>400){
chao.y=height/2

}
// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
boy.bounceOff(leftBoundary);
boy.collide(rightBoundary);
boy.x=mouseX


 drawSprites();

 }




