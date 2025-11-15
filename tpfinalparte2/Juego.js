class Juego {
  constructor() {
    this.propIniciales();
  }

  propIniciales() {
    this.estado = "instrucciones";
    this.cantPlat = 16;
    this.plataformas = [];
    this.cantEsc = 5;
    this.escombros = [];
    this.fondo = new Fondo();
    this.personaje = new Personaje();
    this.botX = 555;
    this.botY = 40;
    this.tamBotX = 25;
    this.tamBotY = 25;
    for (let i=0; i<this.cantPlat; i++) {
      this.plataformas[i] = new Plataforma (random(75, 405), 350 + i * -140, 175, 40);
    }
    for (let i=0; i<this.cantEsc; i++) {
      this.escombros[i]= new Escombro (40 + i * 100 + random(-30, 30), -200 * i + random(-100, 0), 45, 38);
    }
    this.yaSono=false;
  }

  iniciar() {
    if (this.estado=== "instrucciones") {
      this.estado = "iniciar";
    } else if (this.estado=== "iniciar") {
      this.estado = "jugando";
    } else if (this.estado=== "perdio") {
      this.propIniciales();
    } else if (this.estado === "gano") {
      this.propIniciales();
    }
  }

  dibujar() {
    if (this.estado=== "instrucciones") {
      this.instrucciones();
    }
    if (this.estado ==="iniciar") {
      this.pantallaInicio();
    }
    if (this.estado === "jugando") {
      if (!musica.isPlaying()) {
        musica.setVolume(0.5);
        musica.loop();
      }
      this.fondo.dibujarFondo();

      for (let i=0; i<this.cantPlat; i++) {
        this.plataformas[i].dibujar();
      }

      this.actualizar();
      this.subirPlataforma();
      this.personaje.dibujar();
      this.personaje.dibujarVidas();

      for (let i=0; i<this.cantEsc; i++) {
        this.escombros[i].dibujar();
      }
      this.chocar();

      if (this.personaje.piso === true && this.personaje.yaSalto === true) {
        this.estado = "perdio";
      }
    }
    if (this.estado === "perdio") {
      this.pantallaPerdio();
    }
    if (this.estado === "gano") {
      this.pantallaGano();
    }
  }

  actualizar() {
    this.personaje.mover();
    for (let i = 0; i < this.escombros.length; i++) {
      this.escombros[i].mover();
    }

    if (this.personaje.subiendo() && this.personaje.posY < 150) {
      this.personaje.posY = 150;
      this.fondo.posY += 7;
      for (let i = 0; i < this.cantPlat; i++) {
        this.plataformas[i].posY += 7;
      }
      for (let i = 0; i < this.cantEsc; i++) {
        this.escombros[i].posY += 7;
      }
    }
  }

  chocar () {
    for (let i = 0; i < this.cantEsc; i++) {
      if (this.personaje.chocarEscombro(this.escombros[i]) && this.escombros[i].activa === true) {
        this.escombros[i].posY = random(-800, -200);
        this.escombros[i].posX = random(0, 430);
        this.personaje.vidas--;
        this.escombros[i].desactivarEscombro();
        this.escombros[i].activa = true;
        choca.play();
      }
    }
    if (this.personaje.vidas <= 0) {
      this.estado = "perdio";
    }
  }

  subirPlataforma() {
    this.personaje.plataforma = false;
    for (let i = 0; i < this.cantPlat; i++) {
      if (this.personaje.arribaPlataforma(this.plataformas[i])) {
        if (i === this.cantPlat -1) {
          this.estado = "gano";
        }
      }
    }
  }

  teclaPresionada(tecla) {
    this.personaje.moverTeclas(tecla, true);
  }

  teclaSoltada(tecla) {
    this.personaje.moverTeclas(tecla, false);
  }

  instrucciones() {
    derrota.stop();
    victoria.stop();
    image(instrucciones, 0, 0, width, height);
    this.dibujarBoton(cerrar, this.botX, this.botY, this.tamBotX, this.tamBotY);
  }

  pantallaInicio() {
    this.botX = 245;
    this.botY = 350;
    this.tamBotX = 150;
    this.tamBotY = 50;
    image(fondoIn, 0, 0, width, height);
    image(titulo, width/2 - 175, 80, 350, 80);
    this.dibujarBoton(jugar, this.botX, this.botY, this.tamBotX, this.tamBotY);
  }

  pantallaPerdio() {
    musica.stop();
    if (!derrota.isPlaying() && !this.yaSono) {
      derrota.play();
      this.yaSono = true;
    }
    image(Perdio, 0, 0, width, height);
    fill(255);
    textAlign(CENTER);
    textSize(15);
    text("CREDITOS \n Belen Erdmann \n Ramiro Lescano", width/2, height/2 );
    this.botX= width/2 - this.tamBotX/2
      this.botY= 400;
    this.tamBotY=40;
    this.tamBotX=150;
    this.dibujarBoton(reiniciar, this.botX, this.botY, this.tamBotX, this.tamBotY);
  }

  pantallaGano() {
    musica.stop();
    if (!victoria.isPlaying() && !this.yaSono) {
      victoria.play();
      this.yaSono = true;
    }
    image(gano, 0, 0, width, height);
    fill(255);
    textAlign(CENTER);
    textSize(15);
    text("CREDITOS \n Belen Erdmann \n Ramiro Lescano", width/2, height/2 );
    this.botX= width/2 - this.tamBotX/2
      this.botY= 400;
    this.tamBotY=40;
    this.tamBotX=150;
    this.dibujarBoton(reiniciar, this.botX, this.botY, this.tamBotX, this.tamBotY);
  }

  dibujarBoton(bot1, posX, posY, tamX, tamY) {
    if (this.overMouse(posX, posY, tamX, tamY)) {
      posX= posX-6;
      posY= posY-5;
      tamX= tamX + 12;
      tamY=tamY + 10;
      image(bot1, posX, posY, tamX, tamY);
    } else {
      image(bot1, posX, posY, tamX, tamY);
    }
  }

  botonApretado(X, Y) {
    if (X>this.botX && X<this.botX+this.tamBotX && Y>this.botY && Y<this.botY+this.tamBotY) {
      return true;
    }
    return false;
  }
  overMouse(posX, posY, tamX, tamY) {
    return mouseX>posX && mouseX<posX+tamX && mouseY>posY && mouseY<posY+tamY;
    return true;
  }
}

class Fondo {
  constructor() {
    this.posX = 0;
    this.posY = -3020;
  }

  dibujarFondo() {
    fondo.resize(640, 3520);
    image(fondo, this.posX, this.posY);
  }
}
