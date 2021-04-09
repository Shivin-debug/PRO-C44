var database, form, player, game, bgImage, allPlayers;
var w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16, w17, w18, w19, w20, w21, w22, w23, w24, w25, w26;
var gameState = 0;
var playerCount = 0;

function preload(){
  bgImage = loadImage("fig_01.png");
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth, displayHeight);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("black");

  if(playerCount === 3){
    game.update(1);
  }

  if(gameState === 1){
    game.play();
  }

    drawSprites();
}
