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
rect (vijandX-25, vijandY, 50, 50);

  // kogel

  // speler
  fill("white");
  rect(spelerX - 12, spelerY - 5, 25, 50);


  fill("white");
  rect(spelerX - 25, spelerY - 20, 50, 50);
  ellipse(spelerX, spelerY, 10, 10, 10);

  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
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

  }
}
