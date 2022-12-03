
function setup() {
  
    //area de jogo
    createCanvas(500, 400);
    
    //Som da trilha sonora do jogo
    somDaTrilha.loop()
  }
  
  function draw() {
    background(imagemDaEstrada);
    //Imprime ator na tela
    mostraAtor()
    
    //Imprime carro na tela
    mostraCarro()
    
    //Movimenta carros na tela
    movimentaCarro()
    
    //Movimenta o ator
    movimentaAtor()
    
    //Volta o ator para posição inicial
    voltaPosicaoInicialDoCarro()
    
    //Verifica se o ator colidiu com o carro
    verificaColisao()
    
    //Inclui placar de pontos na tela
    incluiPontos()
    
    //Marcador de pontos no placar
    marcaPonto()
  }
  
  