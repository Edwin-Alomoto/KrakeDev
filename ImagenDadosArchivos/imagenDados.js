let puntos = 0;
let lanzamientos = 5;

jugar = function () {
  let resultado;
  resultado = lanzarDado();
  mostrarCara(resultado);
  modificarPuntos(resultado);
  modificarLanzamientos();
  console.log(resultado);
}

mostrarCara = function (numero) {
  if (numero == 1) {
    cambiarImagen("imgDados", "dados1.png");
  } else if (numero == 2) {
    cambiarImagen("imgDados", "dados2.png");
  } else if (numero == 3) {
    cambiarImagen("imgDados", "dados3.png");
  } else if (numero == 4) {
    cambiarImagen("imgDados", "dados4.png");
  } else if (numero == 5) {
    cambiarImagen("imgDados", "dados5.png");
  } else if (numero == 6) {
    cambiarImagen("imgDados", "dados6.png");
  }
}

modificarPuntos = function (numero) {
  puntos = puntos + numero;
  cambiarTexto("lblPuntos", puntos);
  if (puntos > 20) {
    cambiarTexto("lblMensaje", "GANASTE");
    limpiar();
  }
}

modificarLanzamientos = function () {
  lanzamientos = lanzamientos - 1;
  cambiarTexto("lblLanzamientos", lanzamientos);
  if (lanzamientos == 0) {
    cambiarTexto("lblMensaje", "GAMER OVER");
    limpiar();
  }
}

limpiar = function () {
  puntos = 0;
  lanzamientos = 5;
  if (lanzamientos == 5) {
    lanzamientos = 6;
  }
  cambiarTexto("lblPuntos", "0");
  cambiarTexto("lblLanzamientos", "5");
  cambiarImagen("imgDados", " ");
}

lanzarDado = function () {
  let aleatorio;
  let aleatorioMultiplicado;
  let aleatorioEntero;
  let valorDado;
  aleatorio = Math.random();
  aleatorioMultiplicado = aleatorio * 6;
  aleatorioEntero = parseInt(aleatorioMultiplicado);
  valorDado = aleatorioEntero + 1;
  return valorDado;
}
