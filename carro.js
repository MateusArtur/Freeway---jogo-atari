//Variaveis dos carros
let xCarros = [420, 420, 420]
let xCarrosInverso = [10, 10, 10]
let yCarros = [40, 95, 152]
let yCarrosInverso = [210, 262, 312]
let velocidadeCarros = [2, 3, 4]
let velocidadeCarrosInverso = [3.5, 2.8, 4.5]
let comprimentoCarro = 60
let larguraCarro = 40

//Imprime carro na tela
function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i = i+1)
    image(imagemCarros[i],xCarros[i], yCarros[i], comprimentoCarro, larguraCarro)
  for(let i = 0; i < imagemCarros.length; i = i+1)
    image(imagemCarrosInverso[i],xCarrosInverso[i], yCarrosInverso[i], comprimentoCarro, larguraCarro)
}

//Movimenta carros na tela
function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i = i+1)
    xCarros[i] -= velocidadeCarros[i]
  for(let i = 0; i < imagemCarrosInverso.length; i = i+1)
    xCarrosInverso[i] += velocidadeCarrosInverso[i]
}

//Sempre ter carro na pista
function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < imagemCarros.length; i = i+1)
    if(passouTodaATela(xCarros[i])){
        xCarros[i] = 520
      }
  for(let i = 0; i < imagemCarrosInverso.length; i = i+1)
    if(passouTodaATelaInverso(xCarrosInverso[i])){
        xCarrosInverso[i] = -50
      }
}

//Limitações de tela para os carros
function passouTodaATela(xCarro){
  return xCarro+comprimentoCarro < 0
}

function passouTodaATelaInverso(xCarroInverso){
  return xCarroInverso+comprimentoCarro > 580
}