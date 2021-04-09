class Game {
    constructor(){
    }
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
 
      w1 = createSprite(10, 0, 20, 300);
      w1.shapeColor = "darkgreen";
      w2 = createSprite(displayWidth/2, 0, displayWidth, 30);
      w2.shapeColor = "darkgreen";
      w3 = createSprite(displayWidth-15, displayHeight/2-150, 20, displayHeight);
      w3.shapeColor = "darkgreen";
      w4 = createSprite(displayWidth/2+100, displayHeight/2-600, 20, displayHeight);
      w4.shapeColor = "darkgreen";
      w5 = createSprite(displayWidth/2, 300, 200, 20);
      w5.shapeColor = "darkgreen";
      w6 = createSprite(displayWidth/2-100, displayHeight/2-225, 20, 150);
      w6.shapeColor = "darkgreen";
      w7 = createSprite(10, displayHeight/2+300, 20, displayHeight);
      w7.shapeColor = "darkgreen";
      w8 = createSprite(displayWidth/2, displayHeight, displayWidth, 30);
      w8.shapeColor = "darkgreen";
      w9 = createSprite(223, displayHeight/2-150, 400, 20);
      w9.shapeColor = "darkgreen";
      w10 = createSprite(displayWidth/2-300, displayHeight/2-225, 20, 150);
      w10.shapeColor = "darkgreen";
      w11 = createSprite(displayWidth/2-400, displayHeight/3.5-100, 200, 20);
      w11.shapeColor = "darkgreen";
      w12 = createSprite(displayWidth-125, displayHeight/2-300, 200, 20);
      w12.shapeColor = "darkgreen";
      w13 = createSprite(displayWidth-125, displayHeight/2, 200, 20);
      w13.shapeColor = "darkgreen";
      w14 = createSprite(displayWidth/2+300, displayHeight/2, 20, 600);
      w14.shapeColor = "darkgreen";
      w15 = createSprite(displayWidth-310, displayHeight/2.5-50, 210, 20);
      w15.shapeColor = "darkgreen";
      w16 = createSprite(displayWidth-310, displayHeight/2.5+230, 210, 20);
      w16.shapeColor = "darkgreen";
      w17 = createSprite(displayWidth-220, displayHeight/2.5+410, 20, 380);
      w17.shapeColor = "darkgreen";
      w18 = createSprite(displayWidth/2+100, displayHeight/2.5+320, 20, 450);
      w18.shapeColor = "darkgreen";
      w19 = createSprite(displayWidth/2-10, displayHeight/2.5+90, 210, 20);
      w19.shapeColor = "darkgreen";
      w20 = createSprite(displayWidth/2-10, displayHeight/2.5+380, 210, 20);
      w20.shapeColor = "darkgreen";
      w21 = createSprite(displayWidth/2-100, displayHeight/2.5+310, 20, 140);
      w21.shapeColor = "darkgreen";
      w22 = createSprite(displayWidth/2-200, displayHeight/2.5+230, 210, 20);
      w22.shapeColor = "darkgreen";
      w23 = createSprite(displayWidth/2-300, displayHeight/2.5+160, 20, 140);
      w23.shapeColor = "darkgreen";
      w24 = createSprite(displayWidth/2-300, displayHeight/2.5+450, 20, 140);
      w24.shapeColor = "darkgreen";
      w25 = createSprite(displayWidth/2-400, displayHeight/2.5+380, 210, 20);
      w25.shapeColor = "darkgreen";
      w26 = createSprite(displayWidth/2-500, displayHeight/2.5+240, 20, 300);
      w26.shapeColor = "darkgreen";

    }
    play(){
      form.hide();
      Player.getPlayerInfo();
      if(allPlayers !== undefined){
        background(bgImage);
      }
    }
}