function setup(){
 createCanvas(400,400)

montarJogo()
  
  pontuacaoBrasil=1
  pontuacaoAlemanha=7

}
function draw(){
background('green')
  
  if(bola.y< 10){
pontuacaoBrasil+=1
  
}
  
fill('rgb(4,170,4)')
  
  text("*alemanha ta colada com super mega bonde",70, 150)
  

if (keyDown('right')){
brasil.x = brasil.x + 6
}
if (keyDown('left')){
brasil.x = brasil.x - 6
}
  bola.bounceOff(bordas)
  bola.bounceOff(brasil)
  brasil.collide(bordas)
  
text('pontuacaoBrasil:' + pontuacaoBrasil, 260, 300)

text('pontuacaoAlemanha:' + pontuacaoAlemanha, 260, 100)  
  
  

  
  
  drawSprites()
  
  

}
function montarJogo(){
gol = createSprite(20,30,900,12)
gol.shapeColor = 'white'
bola = createSprite(170,230,20,20)
bola.shapeColor = 'cyan'
  
brasil = createSprite(170,280,140,12)
brasil.shapeColor = 'rgb(0,246,0)'
alemanhaLixo = createSprite(170,100,140,12)
alemanhaLixo.shapeColor = '#F44336'
coisa = createSprite(200,200, 400, 12)
coisa.shapeColor = 'white'
bola.velocityY = -5;
bola.velocityX = -6;
bordas=createEdgeSprites()

}




var gol, brasil, alemanhaLixo, coisa, bola, bordas, pontuacaoAlemanha, pontuacaoBrasil;









