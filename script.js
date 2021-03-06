/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var hp = 20;
var punten = 0;
var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var vijandX = 500; // x positie vijand
var vijandY = 0; // y positie vijand
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  if (keyIsDown(39)) { // arrow right

    spelerX = spelerX + 5;
  }
  if (keyIsDown(37)) { // arrow left

    spelerX = spelerX - 5;
  }

  if (keyIsDown(40)) { // 40= arrow down

    spelerY = spelerY + 5;
  }

  if (keyIsDown(38)) { // 38= arrow up

    spelerY = spelerY - 5;
  }
  // vijand
vijandY = vijandY+10;
  // kogel

  // speler

};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten vijanden
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
if 
(vijandX - spelerX > -50
&&
vijandX - spelerX < 50
&&
vijandY - spelerY > -50
&&
vijandY - spelerY < 50
)
{console.log ("botsing")
hp = hp - 1;
}


  // botsing muur
if (spelerX >= 1260) {
spelerX = spelerX - 5;
}
if (spelerX <= 15){
  spelerX = spelerX +5;
}
if (spelerY >= 680){
  spelerY = spelerY -5;
}

if (spelerY <= 15){
  spelerY = spelerY +5;
}
if (vijandY >=720){
  vijandY = 0;
}



  // botsing kogel tegen vijand

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("pink");
  rect(0, 0, 1280, 720);
  // vijand
fill("green");
rect (vijandX-20, vijandY, 50, 50);

fill("red");
rect (vijandX-400, vijandY, 50, 50);


fill ("yellow");
rect (vijandX+400, vijandY, 50,50);


  // kogel

  // speler
  fill("white");
  rect(spelerX - 12, spelerY - 5, 25, 50);


  fill("white");
  rect(spelerX - 25, spelerY - 20, 50, 50);
  ellipse(spelerX, spelerY, 10, 10, 10);

  // punten en health
textSize (90);
text(hp,50,100);
punten = punten + 1/50;
text ('punten: \n' + floor(punten), 900, 80);
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  if (hp <= 0){
    return true;
  }
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt ????n keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('pink');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    text("game over", 700,700);

  }
}
