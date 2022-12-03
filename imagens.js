
// Estrada de fundo
let imagemDaEstrada
let imagemDoAtor
let imagemCarro1

//Som
let somDaTrilha
let somDaColisao
let somDoPonto

//Função de carregamento de imagens
function preload(){
  imagemDaEstrada = loadImage("img/estrada.png")
  imagemDoAtor = loadImage("img/ator-1.png")
  imagemCarro1= loadImage("img/carro-1.png")
  imagemCarro2= loadImage("img/carro-2.png")
  imagemCarro3= loadImage("img/carro-3.png")
  imagemCarro1Invertido= loadImage("img/carro-1-invertido.png")
  imagemCarro2Invertido= loadImage("img/carro-2-invertido.png")
  imagemCarro3Invertido= loadImage("img/carro-3-invertido.png")
  imagemCarros = [imagemCarro1,imagemCarro2,imagemCarro3]
  imagemCarrosInverso = [imagemCarro1Invertido,imagemCarro2Invertido,imagemCarro3Invertido]
  
  somDaTrilha = loadSound("sons/trilha.mp3")
  somDaColisao = loadSound("sons/colidiu.mp3")
  somDoPonto = loadSound("sons/pontos.wav")
}