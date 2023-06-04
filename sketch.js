var playerTotal = 0
var dealerTotal = 0
var cardsimage = [];
var cards = [];

let types = ["C", "D", "H", "S"];
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "K", "Q"];

var spimage;

function preload() {
  for (let i = 0; i < types.length; i++) {
    for (let j = 0; j < values.length; j++) {
      cardsimage.push("./cards/" + values[j] + "-" + types[i] + ".png");
    }
  }
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < types.length; i++) {
    for (let j = 0; j < values.length; j++) {
      cards.push(values[j] + "-" + types[i]);
    }
  }
  console.log(cards)

}

function draw() {
  background(0);
  
  c = createSprite(200, 200, 50, 300);
  c.addImage(loadImage(cardsimage[0]));
  c.scale = 0.5;
  
  
  drawSprites();
}


function getTotal(imageName) {
  try {
    if (imageName.charAt(1) == 0) {
      total = 10
    }
    else {
      total = parseInt(imageName.charAt(0))
    }
  }
  catch (NaN) {
    if (imageName.charAt(0) == "a") {
      total = 11
    }
    else {
      total = 10
    }

  }


}

