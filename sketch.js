//Create variables here
var dogimg, happydogimg, database, foodS, foodStock;
var dog;
var happyDog

function preload()
{

  dogimg = loadImage("images/dogImg.png");
  happydogimg = loadImage("images/dogImg1.png");
  
}

function setup() {
	createCanvas(500, 500);
  
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  dog = createSprite(200,200);
  dog.addImage(dogimg);
  dog.scale = 0.5;

}


function draw() {  
  background(46,139,87);
  
  drawSprites();
  //add styles here

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydogimg);
  }

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}
