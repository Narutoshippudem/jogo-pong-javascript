//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let raio= diametro / 2 ;

//velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
 circle (xBolinha, yBolinha, diametro);
 xBolinha += velocidadexBolinha;
 yBolinha += velocidadeyBolinha

 if (xBolinha > width ||
    xBolinha < 0){
  velocidadexBolinha *= -1;
 }
  if (yBolinha > height||
      yBolinha < 0){
    velocidadeyBolinha *= -1;
}
}

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

