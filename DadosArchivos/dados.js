const jugar = function () {
  let valor = lanzarDado();
  cambiarTexto("lblNumero", valor);

  if (valor >= 3) {
    let mensaje = "Es mayor a 3 ganaste";
    cambiarTexto("lblMensaje", mensaje);
  } else {
    let mensaje = "Es menor a 3 perdiste";
    cambiarTexto("lblMensaje", mensaje);
  }
}

// Crear una funcion llamada lanzarDado
// No recibe parametros
// Retorna un numero aleatorio entre 1 y 6

const lanzarDado = function () {
  let aleatorio = Math.random(); //Entre 0 y 1 asi que tengo que multiplicarlo por 6
  let valorDado = parseInt(aleatorio * 6 + 1); //solo que me muestre en entre 1 y 6
  return valorDado;
};
