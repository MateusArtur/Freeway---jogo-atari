
//Variaveis ator 
let xAtor = 85
let yAtor = 366
let colisao = false

//Pontuação
let meusPontos = 0

//Função que imprime a vaca na tela
function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30)
}

//Função que movimenta a vaca
function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -=3
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMoverAbaixo()){      
      yAtor +=3
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
    if(podeSeMoverDireita()){
      xAtor +=3
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    if(podeSeMoverEsquerda()){
      xAtor -=3
    }
  }
}

//Verifica o limite de tela para baixo
function podeSeMoverAbaixo(){
  return yAtor < 366
}

//Verifica o limite de tela para a direita
function podeSeMoverDireita(){
  return xAtor < 470
}

//Verifica o limite de tela para a esquerda
function podeSeMoverEsquerda(){
  return xAtor > 0
}


//Colisão com os carros
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  //Colisão faixa de cima
  for (let i = 0; i < imagemCarros.length; i+=1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, larguraCarro, xAtor, yAtor, 15)
    //Se colidir a vaca volta para a posição inicial
    if (colisao){
      posicaoInicialAtor();
      //Som da colisão
      somDaColisao.play()
      //Decrementa pontos, verifica se está zerado
      if(pontosMaiorQueZero()){
        meusPontos -=1
      }
    }
    
  }
  //Colisão faixa de baixo
  for (let i = 0; i < imagemCarrosInverso.length; i+=1){
    colisao = collideRectCircle(xCarrosInverso[i], yCarrosInverso[i], comprimentoCarro, larguraCarro, xAtor, yAtor, 15)
    //Se colidir a vaca volta para a posição inicial
    if (colisao){
      posicaoInicialAtor();
      //Som da colisão
      somDaColisao.play()
      //Decrementa pontos, verifica se está zerado
      if(pontosMaiorQueZero()){
        meusPontos -=1
      }
    }
   
  }
}


//Função para verificar se os pontos estão maior que 0
function pontosMaiorQueZero(){
  return meusPontos > 0
      
}


//Função que retorna o ator a posição inicial
function posicaoInicialAtor(){
  yAtor = 366;
}

//Placar de pontos
function incluiPontos() {
  textAlign(CENTER)
  textSize(25)
  fill(255,245,0)
  text(meusPontos, width/5, 25)
}

//Marcador de pontos
function marcaPonto(){
  if(yAtor <= 6){
    meusPontos +=1
    somDoPonto.play()
    posicaoInicialAtor()
  }
}