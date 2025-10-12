// TP FINAL PARTE 1
// COMISIÓN 1
// Erdmann Belén y Ramiro Lescano

let imagenes=[];
let botonD1;
let botonD2;
let botonCont;
let imagenTitulo;
let botonIn
let estado=0;
let inicio=false;
let posXtitu=200;
let posYtitu=100;
let tamXtitu=240;
let tamYtitu=100;
let posXbot=250;
let posYbot=200;
let tamXbot=150;
let tamYbot=50;
let posXcont=420;
let posYcont=370;
let tamXcont=120;
let tamYcont=30;
let tiempo=0;
let fondo
  let click
  let texto = [
  "", "La humanidad colonizó Marte, llevando consigo ciudades, leyes… y censura. En la Tierra, hacía años que habían prohibido la literatura de terror y fantasía, quemando los libros de Poe, Lovecraft y todos los cuentos de hadas. Ahora, en esta colina marciana, alguien desafió esas reglas: frente a vos se levanta una mansión gótica, lúgubre y desolada.",
  "El aire huele a químicos. Máquinas ocultas mantienen un crepúsculo eterno. No queda vida: ni insectos, ni animales. Todo está preparado para recrear un ambiente siniestro y prohibido. La Casa parece respirar como una criatura viva.",
  "La superficie refleja la mansión deformada. Los juncos cenicientos crujen como si se quejaran. Bajo el muelle, un rumor metálico sube desde el fondo de la laguna.",
  "Descubrís una trampilla oxidada que conduce a un túnel subterráneo. A un costado, un puente arqueado lleva hasta el pórtico principal. La casa late como si tuviera corazón.",
  "El túnel te lleva a unas catacumbas húmedas. En la pared, un muro a medio construir y una paleta con cemento fresco. Todo parece preparado para encerrar a alguien.",
  "Un hombre elegante, con una placa en el pecho, se interpone. Es el inspector Garrett, de la Oficina de Climas Morales. Su misión: destruir la casa, porque cualquier recuerdo de fantasía o terror está prohibido.",
  "Las gárgolas del arco lloran gotas oscuras. Adentro, siete puertas de colores rodean un salón iluminado por un reloj de ébano que marca los segundos con un golpe seco.",
  "Entre las sombras aparecen figuras mecánicas: brujas, gorilas y espectros de metal. La casa es un teatro de horrores montado con robots.",
  "El salón rebosa música y máscaras. Cada persona parece tener un doble exacto, como un espejo vivo. Entre ellos observas al inspector Garrett, contemplando con frialdad.",
  "Un actor llamado Pikes se te acerca: “Esto es una venganza contra quienes quemaron los libros y prohibieron la imaginación. Podés detenerla… o dejar que la obra llegue hasta el final.”",
  "Tras los estantes hallás planos y cartas. La mansión fue pensada como un santuario: cada sala reproduce escenas de los cuentos prohibidos, esperando la oportunidad de vengarlos.",
  "Llegás a una sala de control. Palancas con etiquetas como “DERRUMBE” y “SALVACIÓN” laten al ritmo de un corazón mecánico. Podés decidir el destino de todo lo construido.",
  "Decidís mantener el plan en marcha. Garrett es sellado tras un muro, los invitados caen en trampas mortales. A medianoche, la mansión se resquebraja y la laguna la traga. Desde un helicóptero, contemplás la caída de la Casa Usher.",
  "Accionás las palancas para abrir las salidas. Los invitados escapan confundidos pero vivos. En la biblioteca quedan planos, cartas y restos de los libros prohibidos. No hay derrumbe, pero se salva la memoria de la imaginación.",
  "Te enfrentás a Climas Morales con las pruebas de lo ocurrido. Ellos sonríen y te convierten en pieza de museo: un ejemplo vivo de “peligro imaginario”. Seguirás respirando, pero tras un vidrio, como advertencia eterna."
  ]

  function preload() {
  for (let i=0; i<17; i++) {
    imagenes[i]= loadImage('data/'+i+'.jpg');
  }

  botonD1= loadImage('data/botonD1.png');
  botonD2= loadImage('data/botonD2.png');
  botonIn= loadImage('data/iniciar.PNG');
  botonCont= loadImage('data/continuar.PNG');
  imagenTitulo= loadImage('data/titulo.PNG');
  click = loadSound('data/click.mp3');
  fondo = loadSound('data/sonidoFondo.mp3');
}


function setup() {
  createCanvas(640, 480);
  fondo.loop();
  textSize(18);
}


function draw() {
  if (inicio===false) {
    pantallaInicio(posXtitu, posYtitu, tamXtitu, tamYtitu, imagenes[estado], imagenTitulo, 60, posXbot, posYbot, tamXbot, tamYbot, botonIn);
  }
  if (inicio===true) {
    if (estado===1) {
      fill(255);
      image(imagenes[estado], 0, 0);
      push();
      textAlign(CENTER);
      text(texto[estado], 120, 120, 400);
      pop();
      botonContinuar(posXcont, posYcont, tamXcont, tamYcont, 3, botonCont);
    }
    if (estado===2) {
      fill(255);
      image(imagenes[estado], 0, 0);
      push();
      textAlign(CENTER);
      text(texto[estado], 120, 140, 400);
      pop();
      boton(360, 370, 180, 70, "boton", botonD1, botonD2);
      boton(100, 370, 180, 70, "boton", botonD1, botonD2);
    }
    if (estado===3) {
      fill(255);
      image(imagenes[estado], 0, 0);
      push();
      textAlign(CENTER);
      text(texto[estado], 120, 170, 400);
      pop();
      botonContinuar(posXcont, posYcont, tamXcont, tamYcont, 3, botonCont);
    }
    if (estado===4) {
      fill(255);
      image(imagenes[estado], 0, 0);
      push();
      textAlign(CENTER);
      text(texto[estado], 120, 160, 400);
      pop();
      boton(360, 370, 180, 70, "boton", botonD1, botonD2);
      boton(100, 370, 180, 70, "boton", botonD1, botonD2);
    }
    if (estado===5) {
      fill(255);
      image(imagenes[estado], 0, 0);
      push();
      textAlign(CENTER);
      text(texto[estado], 120, 160, 400);
      pop();
      botonContinuar(posXcont, posYcont, tamXcont, tamYcont, 3, botonCont);
    }
    if (estado===6) {
      fill(255);
      image(imagenes[estado], 0, 0);
      push();
      textAlign(CENTER);
      text(texto[estado], 120, 170, 400);
      pop();
      boton(360, 370, 180, 70, "boton", botonD1, botonD2);
      boton(100, 370, 180, 70, "boton", botonD1, botonD2);
    }
    if (estado===7) {
      fill(255);
      image(imagenes[estado], 0, 0);
      push();
      textAlign(CENTER);
      text(texto[estado], 120, 130, 400);
      pop();
      botonContinuar(posXcont, posYcont, tamXcont, tamYcont, 3, botonCont);
    }
    if (estado===8) {
      fill(255);
      image(imagenes[estado], 0, 0);
      push();
      textAlign(CENTER);
      text(texto[estado], 120, 110, 400);
      pop();
      boton(360, 370, 180, 70, "boton", botonD1, botonD2);
      boton(100, 370, 180, 70, "boton", botonD1, botonD2);
    }
    if (estado===9) {
      fill(255);
      image(imagenes[estado], 0, 0);
      push();
      textAlign(CENTER);
      text(texto[estado], 120, 90, 400);
      pop();
      botonContinuar(posXcont, posYcont, tamXcont, tamYcont, 3, botonCont);
    }
    if (estado===10) {
      fill(255);
      image(imagenes[estado], 0, 0);
      push();
      textAlign(CENTER);
      text(texto[estado], 120, 75, 400);
      pop();
      boton(360, 370, 180, 70, "boton", botonD1, botonD2);
      boton(100, 370, 180, 70, "boton", botonD1, botonD2);
    }
    if (estado===11) {
      fill(255);
      image(imagenes[estado], 0, 0);
      push();
      textAlign(CENTER);
      text(texto[estado], 120, 110, 400);
      pop();
      botonContinuar(posXcont, posYcont, tamXcont, tamYcont, 3, botonCont);
    }
    if (estado===12) {
      fill(255);
      image(imagenes[estado], 0, 0);
      push();
      textAlign(CENTER);
      text(texto[estado], 120, 100, 400);
      pop();
      boton(360, 370, 180, 70, "boton", botonD1, botonD2);
      boton(100, 370, 180, 70, "boton", botonD1, botonD2);
    }
    if (estado===13) {
      fill(255);
      image(imagenes[estado], 0, 0);
      push();
      textAlign(CENTER);
      text(texto[estado], 120, 140, 400);
      pop();
      botonContinuar(posXcont, posYcont, tamXcont, tamYcont, 3, botonCont);
    }
    if (estado===14) {
      fill(255);
      image(imagenes[estado], 0, 0);
      push();
      textAlign(CENTER);
      text(texto[estado], 120, 110, 400);
      pop();
      botonContinuar(posXcont, posYcont, tamXcont, tamYcont, 3, botonCont);
    }
    if (estado===15) {
      fill(255);
      image(imagenes[estado], 0, 0);
      push();
      textAlign(CENTER);
      text(texto[estado], 120, 170, 400);
      pop();
      botonContinuar(posXcont, posYcont, tamXcont, tamYcont, 3, botonCont);
    }
    if (estado===16) {
      fill(255);
      image(imagenes[estado], 0, 0);
      push();
      textAlign(CENTER);
      textSize(27);
      text("CREDITOS\n\nBelén Erdmann\nRamiro Lescano", 120, 170, 400);
      pop();
    }
  }
}

function mousePressed() {

  click.play();

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
    } else if (estado===9) {
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
        estado=13;
      } else if (clickBoton(360, 370, 180, 70)) {
        estado=15;
      }
    } else if (estado===13) {
      if (clickBoton(posXcont, posYcont, tamXcont, tamYcont)) {
        estado=16;
      }
    } else if (estado===14) {
      if (clickBoton(posXcont, posYcont, tamXcont, tamYcont)) {
        estado=16;
      }
    } else if (estado===15) {
      if (clickBoton(posXcont, posYcont, tamXcont, tamYcont)) {
        estado=16;
      }
    }
  }
}


function clickBoton(posX, posY, tamX, tamY) {
  return mouseX > posX && mouseX < posX + tamX && mouseY > posY && mouseY < posY + tamY;
}

function boton(posx, posy, tamx, tamy, texto, bot1, bot2) {
  if (overMouse(posx, posy, tamx, tamy)) {
    image(bot1, posx, posy, tamx, tamy);
    //push();
    //textAlign(CENTER)
    //text(boton,posx/2,posy/2)
    //pop();
  } else {
    image(bot2, posx, posy, tamx, tamy);
    //push();
    //textAlign(CENTER)
    //text(boton,posx/2,posy/2)
    //pop();
  }
}

function botonContinuar(posx, posy, tamx, tamy, dif, bot) {
  if (overMouse(posx, posy, tamx, tamy, bot)) {
      tamx=tamx+dif*6
      tamy=tamy+dif*2
      posx=posx-dif*3
      posy=posy-dif
  }
  image(bot, posx, posy, tamx, tamy)
}

function overMouse(posX, posY, tamX, tamY) {
  return mouseX>posX && mouseX<posX+tamX && mouseY>posY && mouseY<posY+tamY;
}

function pantallaInicio(posX, posY, TamTexX, TamTexY, imagen1, imagen2, posFinal, posXbot, posYbot, tamXbot, tamYbot, imagenBot) {
  if (overMouse(posXbot, posYbot, tamXbot, tamYbot)) {
      tamXbot=tamXbot+18
      tamYbot=tamYbot+6
      posXbot=posXbot-9
      posYbot=posYbot-3
  }
  image(imagen1, 0, 0);
  image(imagen2, posX, posY, TamTexX, TamTexY);
  image(imagenBot, posXbot, posYbot, tamXbot, tamYbot);
}
function pantalla_desicion(imagenF, posX, posY, tamX, tamY, posX2, imagenB1, imagenB2) {
  fill(255);
  image(imagenF, 0, 0)
  boton(posX, posY, tamX, tamY, imagenB1, imagenB2);
  boton(posX2, posY, tamX, tamY, imagenB1, imagenB2);
}
//image(imagenes[estado], 0, 0);
//fill(0, 255, 90);
//boton(360, 370, 180, 70, "boton", botonD1, botonD2);
//boton(100, 370, 180, 70, "boton", botonD1, botonD2);
