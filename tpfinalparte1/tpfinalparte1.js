let imagenes=[];
let botonD1;
let botonD2;
let botoncont;
let imagenTitulo;
let estado=0;
let inicio=false;
let PosXtitu=200;
let PosYtitu=-140;
let TamXtitu=240;
let TamYtitu=100;
let PosXbot=250;
let PosYbot=200;
let TamXbot=150;
let TamYbot=50;
let posXcont=420;
let posYcont=370;
let tamXcont=120;
let tamYcont=30;
let tiempo=0;

function preload() {
  for (let i=0; i<16; i++) {
    imagenes[i]= loadImage('data/'+i+'.jpg');
  }
  botonD1= loadImage('data/botonD1.png');
  botonD2= loadImage('data/botonD2.png');
  botoncont= loadImage('data/continuar.PNG');
  imagenTitulo= loadImage('data/titulo.PNG');
}


function setup() {
  createCanvas(640, 480);
}


function draw() {
  imagenes[estado].resize(640, 480);
  imagenTitulo.resize(640, 480);
  if (inicio===false) {

    pantallaInicio(PosXtitu, PosYtitu, TamXtitu, TamYtitu, imagenes[estado], imagenTitulo, 60, PosXbot, PosYbot, TamXbot, TamYbot, botoncont);
  }
  if (inicio===true) {
    if (estado%2===1) {
      fill(0, 255, 90);
      image(imagenes[estado], 0, 0);
      botonContinuar(posXcont, posYcont, tamXcont, tamYcont, 3, botoncont);
    }
    if (estado%2===0) {
      image(imagenes[estado], 0, 0);
      fill(0, 255, 90);
      boton(360, 370, 180, 70, "boton", botonD1, botonD2);
      boton(100, 370, 180, 70, "boton", botonD1, botonD2);
    }
  }
}

function mousePressed() {

  if (clickBoton(250, 200, 140, 50) && estado===0) {
    estado=1;
    inicio=true;
  }
  if (inicio===true) {
    if (estado===1) {
      if (clickBoton(posXcont, posYcont, tamXcont, tamYcont)) {
        estado=2;
      }
    } else if (estado===2) {
      if (clickBoton(100, 370, 180, 70)) {
        estado=3;
      } else if (clickBoton(360, 370, 180, 70)) {
        estado=7;
      }
    } else if (estado===3) {
      if (clickBoton(posXcont, posYcont, tamXcont, tamYcont)) {
        estado=4;
      }
    } else if (estado===4) {
      if (clickBoton(100, 370, 180, 70)) {
        estado=5;
      } else if (clickBoton(360, 370, 180, 70)) {
        estado=7;
      }
    } else if (estado===5) {
      if (clickBoton(posXcont, posYcont, tamXcont, tamYcont)) {
        estado=6;
      }
    } else if (estado===6) {
      if (clickBoton(100, 370, 180, 70)) {
        estado=13;
      } else if (clickBoton(360, 370, 180, 70)) {
        estado=9;
      }
    } else if (estado===7) {
      if (clickBoton(posXcont, posYcont, tamXcont, tamYcont)) {
        estado=8;
      }
    } else if (estado===8) {
      if (clickBoton(100, 370, 180, 70)) {
        estado=9;
      } else if (clickBoton(360, 370, 180, 70)) {
        estado=11;
      }
    }else if (estado===9) {
        if (clickBoton(posXcont, posYcont, tamXcont, tamYcont)) {
          estado=10;
        }
      } else if (estado===10) {
        if (clickBoton(100, 370, 180, 70)) {
          estado=13;
        } else if (clickBoton(360, 370, 180, 70)) {
          estado=14;
        }
      } else if (estado===11) {
        if (clickBoton(posXcont, posYcont, tamXcont, tamYcont)) {
          estado=12;
        }
      } else if (estado===12) {
        if (clickBoton(100, 370, 180, 70)) {
          estado=14;
        } else if (clickBoton(360, 370, 180, 70)) {
          estado=15;
        }
      }
  }
}
  
      function clickBoton(posX, posY, tamX, tamY) {
        return mouseX > posX && mouseX < posX + tamX && mouseY > posY && mouseY < posY + tamY;
      }

      function boton(posx, posy, tamx, tamy, texto, bot1, bot2) {
        if (overMouse(posx, posy, tamx, tamy)) {
          image(bot2, posx, posy, tamx, tamy);
          //textAlign(CENTER)
          //text(boton,posx/2,posy/2)
        } else {
          image(bot1, posx, posy, tamx, tamy);
          //textAlign(CENTER)
          //text(boton,posx/2,posy/2)
        }
      }

      function botonContinuar(posx, posy, tamx, tamy, dif, bot) {
        if (overMouse(posx, posy, tamx, tamy, bot)) {
          tamx=tamx+dif*6
            tamy=tamy+dif*2
            posx=posx-dif*3
            posy=posy-dif
        } else {
        }
        image(bot, posx, posy, tamx, tamy)
      }

      function overMouse(posX, posY, tamX, tamY) {
        return mouseX>posX && mouseX<posX+tamX && mouseY>posY && mouseY<posY+tamY;
      }

      function pantallaInicio(posX, posY, TamTexX, TamTexY, imagen1, imagen2, posFinal, posXbot, posYbot, TamXbot, TamYbot, imagenBot) {
        if (overMouse(posXbot, posYbot, TamXbot, TamYbot)) {
          TamXbot=TamXbot+18
            TamYbot=TamYbot+6
            posXbot=posXbot-9
            posYbot=posYbot-3
        } else {
        }
        image(imagen1, 0, 0);
        image(imagen2, posX, posY, TamTexX, TamTexY);
        image(imagenBot, posXbot, posYbot, TamXbot, TamYbot);
      }
