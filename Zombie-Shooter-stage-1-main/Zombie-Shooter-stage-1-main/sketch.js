var jeff,todd,richard;
var knife,gun,images,poison,bg,bgImg;
var edges,jeffImage,toddImage,richardImage,police,knifeImg;
var tile1,tile2,tile3,tile4,tile5,tile6,tile7,tile8,tile9,tile10,tile11,tile12,tile13,tile14,tile15,tile16,tilesGroup;
var tile;
var policeImg;
var scoreT = 0;
var scoreS = 0;
function preload(){
  jeffImage = loadImage("jeff.png");
  toddImage = loadImage("todd.png");
  policeImg = loadImage("police.png");
  knifeImg = loadImage("knife.png");
  richardImage = loadImage("richard.png");
  gunImage = loadImage("gun.png");
  bgImg = loadImage("BG.png");
  tile1 = loadImage("Tile1.png");
tile2 = loadImage("Tile2.png");
tile3 = loadImage("Tile3.png");
tile4 = loadImage("Tile4.png");
tile5 = loadImage("Tile5.png");
tile6 = loadImage("Tile6.png");
tile7 = loadImage("Tile7.png");
tile8 = loadImage("Tile8.png")
tile9 = loadImage("Tile9.png")
tile10 = loadImage("Tile10.png")
tile11 = loadImage("Tile11.png")
tile12 = loadImage("Tile12.png")
tile13 = loadImage("Tile13.png")
tile14 = loadImage("Tile14.png");
tile15 = loadImage("Tile15.png");
tile16 = loadImage("Tile16.png");
 
  }

function setup(){
    createCanvas(1350,600);

    richard = createSprite(20,20);
   richard.addImage(richardImage);
   richard.scale = 0.3;

    todd = createSprite(random(0,1000),300,20,20);
    todd.addImage(toddImage);
    todd.velocityY = +3;
    todd.velocityX = -3;
    todd.scale = 0.2;
    
    
    jeff = createSprite(random(0,1300),300,20,20);
    jeff.addImage(jeffImage);
    jeff.scale = 0.2;
  
    knife =  createSprite(random(0,800),300,20,20);;
      knife.addImage(knifeImg);
      knife.scale = 0.2;

      gun = createSprite(random(0,500),300,20,20);;
      gun.addImage(gunImage);
      gun.scale = 0.2;
    
    tilesGroup = new Group();  


  
    }

    function draw(){
        background(bgImg);
        edges = createEdgeSprites();
      todd.bounceOff(edges);
      todd.collide(tilesGroup);
      jeff.bounceOff(edges);
      jeff.collide(tilesGroup);
      text("Score: " + scoreS,25,30);
     text("Score:" + scoreT,1000,30);

    if(keyDown("UP_ARROW")){
        jeff.y = jeff.y - 5;
    }

    if(keyDown("RIGHT_ARROW")){
      jeff.x = jeff.x + 5
    }
    if(keyDown("LEFT_ARROW")){
        jeff.x = jeff.x - 5
      }

      if(keyDown("DOWN_ARROW")){
        jeff.y = jeff.y + 5
    }

    if(todd.isTouching(jeff)){
        reset();
      }
    
      if(keyDown("r")){
        restart();
      }


    if(jeff.isTouching(knife)){
      scoreT = scoreT + 1;
      knife.destroy();
      gun.destroy();
     
    }
    if(jeff.isTouching(gun)){
      scoreT = scoreT + 1;
      gun.destroy();
    }
      
      if(scoreS>5){
        police();
        jeff.destroy();
      }
      
      richard.x = todd.x+70;
      richard.y = todd.y+2;
      
    
  tiles();
        drawSprites();
    }

    function reset(){
     
        jeff.x = (random(0,1350));
        jeff.y = (random(0,600));
        todd.x = 1200;
        todd.y = 500;
        scoreS = scoreS + 1;
   
   
      
    }
  
    function restart(){
      todd.velocityY = +7;
    todd.velocityX = +5;
    }
    
    function police(){
      var police = createSprite(600,300);
      police.addImage(policeImg);
      police.scale = 0.3;
    }

    function tiles() {
       if (frameCount % 60 === 0) {
         tile = createSprite(windowWidth,300,20,20);
         tile.y = Math.round(random(50,windowHeight));
        tile.velocityX = -(6 + scoreT / 100);
    
        //generate random obstacles
        var rand = Math.round(random(1, 6));
        switch (rand) {
          case 1:
            tile.addImage(tile1);
            break;
          case 2:
            tile.addImage(tile2);
            break;
          case 3:
            tile.addImage(tile3);
            break;
          case 4:
            tile.addImage(tile4);
            break;
          case 5:
            tile.addImage(tile5);
            break;
          case 6:
            tile.addImage(tile6);
            break;
          default:
            break;
        }
    
        //assign scale and lifetime to the tile           
        tile.scale = Math.round(random(0.2,2));
        tile.lifetime = 300;
    
        //add each tile to the group
        tilesGroup.add(tile);
        
      
    }
  }