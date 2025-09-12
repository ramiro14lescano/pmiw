//Ramiro Lescano comision 1
//https://youtu.be/0bPWjIQqZIc

let col1,col2,col3,colF,Gr1,Gr2,px1,px2,py1,py2,cambiar,colof,coloC,img                                   

function preload(){
img=loadImage("/assets/04.png");
}

function setup() {
createCanvas(800,400);
variablesIniciales();
instrucciones(col1,col2,col3);
}

function draw() {
colores(col1,col2,col3,colF,colof,coloC,cambiar);
GrillaDeCirculos(15,0,16,15,30,Tceldas(14,width/2),px1,py1,Gr1);
GrillaDeCirculos(15,0,16,15,30,Tceldas(14,width/2),px2,py2,Gr2);
image(img,0,0,400,400);

}
function GrillaDeCirculos( x, y, cant, tamCi, tamCf, tamCel, xAncl, yAncl, Rotar){
  noStroke();
  push();
  translate(xAncl,yAncl);
  rotate(radians(Rotar));
  for( let i=0; i<cant/2-1; i++){
    for( let j=0; j<cant; j++){
      ellipse(x+i*tamCel,y+j*tamCel,tamCi,tamCi);
    }
    tamCi=map(i,0,cant/2,tamCi,tamCf);
  }
  pop();
}
function colores( col1_, col2_, col3_, colF_, colC_,  colFondo, apretado){
  if (apretado === true){
  colC_=color(col1_,col2_,col3_);
  colFondo=color(colF_,colF_,colF_);
  } 
  if(apretado === false){
  colC_=color(colF_,colF_,colF_);
  colFondo=color(col1_,col2_,col3_);
  }
  background(colFondo);
  fill(colC_);
}
function Rv ( px1_){
  px1_=px1_+px1_/2;
  return px1_;
}
function Tceldas( cantC, TGrilla){
  cantC= TGrilla/cantC;
  return cantC;
}

function mousePressed(){
  if(mouseX>width/2 ){
    if (px1 === 400){
    px1=Rv(px1) ;
    px2=px1;
    }
    else{
      px1=400; 
      px2=800;
    }
  }
  if(mouseX<width/2){
    cambiar=!cambiar;
  }
}

function keyPressed(){
 if (keyIsPressed){ 
   if (key=== 'R' && col1<=256){   
    col1=col1+10;
    }
     if (key=== 'G' && col2<=256){   
    col2=col2+10;
    }
    if (key=== 'B' && col3<=256){   
    col3=col3+10;
    }
    if (key=== 'r' && col1>=0){   
    col1=col1-10;
    }
     if (key=== 'g' && col2>=0){   
    col2=col2-10;
    }
    if (key=== 'b' && col3>=0){
    col3=col3-10;
    }
   if (key=== '+' && colF<=256){   
    colF=colF+10;
   }
   if (key=== '-' && colF>=0){   
    colF=colF-10;
   }
   if(key === 'i' || key == 'I')
   variablesIniciales();
 }
}

function variablesIniciales(){
 col1=255;
 col2=255;
 col3=255;
 colF=0;
 Gr1=0;
 Gr2=180;
 px1=400;
 px2=800;
 py1=0;
 py2=400;
 cambiar=true;
 colof= color(0);
 coloC= color(255,255,255);
}

function instrucciones( col1__, col2__, col3__){
  //println("--------------------------------------------------------------------------------------------------------------------------------------------------------------------");
  print('~INSTRUCCIONES DE USO~');

  print('click del lado izquierdo de la pantalla invierte los colores');
  print('click del lado derecho de la pantalla invierte la grilla');
  print('R :Subir valor de Rojo');  
  print('G :Subir valor de Verde');  
  print('B :subir valor de Azul');  
  print('r :Bajar valor de Rojo');  
  print('g :Bajar valor de Verde');  
  print('b :Bajar valor de Azul');
  print('i o I : Reinicia el programa');

  //println("--------------------------------------------------------------------------------------------------------------------------------------------------------------------");
}
