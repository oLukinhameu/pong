
let xPosicao = 300;
let yPosicao = 200;
let tamanho1 = 15;
let mudaPosicao = 5;
let velocidadeX = 5;
let velocidadeY = 5;
let raio = tamanho1 / 2;

// variaveis da raquete 1
let xRaquete1 = 10;
let yRaquete1 = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;
let yvelocidadeRaquete1 = 10;

//variáveis raquete 2
let xRaquete2 = 580;
let yRaquete2 = 150; 
let yvelocidadeRaquete2 = 10;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function setup() {
  createCanvas(600, 400);
   trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  velocidadedaBolinha();
  verificaColisaobolinha();
// os valores de cada raquete será passada por parâmetro
// assim não precisamos escrever duas vezes cada código
  mostraRaquete(xRaquete1,yRaquete1);
  mostraRaquete(xRaquete2,yRaquete2);
  moverRaquete1();
  moverRaquete2();
  verificaColisaoRaquete1();
  verificaColisaoRaquete2();
  mostraPlacar();
  atualizaPlacar();
}

function mostraBolinha(){
  fill('Lime');
  circle(xPosicao,yPosicao,tamanho1);
}

function velocidadedaBolinha(){
  xPosicao += velocidadeX;
  yPosicao -= velocidadeY;
}

function verificaColisaobolinha(){
  if (xPosicao + raio > width || xPosicao - raio < 0){
    velocidadeX *= -1;
  }
  if (yPosicao + raio > height || yPosicao - raio < 0){
    velocidadeY *= -1;
  }
}

function mostraRaquete(x,y){
  rect(x,y,comprimentoRaquete,alturaRaquete);
}

// utiliza código 87 para letra "w" e código 83 para "s"
function moverRaquete1(){
  if (keyIsDown(87)){
    yRaquete1 -= yvelocidadeRaquete1;
  }
  if (keyIsDown(83)){
    yRaquete1 += yvelocidadeRaquete1;
  }
}

// utiliza código 80 para letra "p" e código 76 para "l"
function moverRaquete2(){
  if (keyIsDown(80)){
    yRaquete2 -= yvelocidadeRaquete2;
  }
  if (keyIsDown(76)){
    yRaquete2 += yvelocidadeRaquete2;
  }
}

function verificaColisaoRaquete1(){
  if ((xPosicao - raio < xRaquete1 + comprimentoRaquete) && (yPosicao + raio > yRaquete1) && (yPosicao - raio < yRaquete1 + alturaRaquete)){
    velocidadeX *= -1;
    raquetada.play();
  }
}

function verificaColisaoRaquete2(){
  if ((xPosicao + raio > xRaquete2) && (yPosicao + raio > yRaquete2) && (yPosicao - raio < yRaquete2 + alturaRaquete)){
    velocidadeX *= -1;
    raquetada.play();
  }
}

function mostraPlacar(){
fill('purple');
  textSize(30);
  text(meusPontos,40,40);
  text(pontosDoOponente,550,40);
}

function atualizaPlacar(){
  if (xPosicao > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xPosicao < 10){
    pontosDoOponente += 1;
    ponto.play();
  }
}

function preload() {
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}
