var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1img, car2img, car3img, car4img ,trackImg;

function preload(){
car1img=loadImage("sprites/car1.png")
car2img = loadImage("sprites/car2.png")
car3img = loadImage("sprites/car3.png")
car4img = loadImage("sprites/car4.png")
trackImg = loadImage("sprites/track.jpg")

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
   }

  }
