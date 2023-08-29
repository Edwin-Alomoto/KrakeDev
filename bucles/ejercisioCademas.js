const ejecutarPrueba1 = function () {
  let mensaje = recuperarTexto("txtCadena");
  recorrerCadena(mensaje);
}

const ejecutarPrueba2 = function () {
  let mensaje = recuperarTexto("txtCadena");
  invertirCadena(mensaje);
}

const recorrerCadena = function (cadena) {
  for (let posicion = 0; posicion < cadena.length; posicion++) {
    caracter = cadena.charAt(posicion);
    console.log("Caracter " + caracter + " " + "posicion " + posicion);
  }
}

const invertirCadena = function (cadena) {
  let resultado = "";
  for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {
    caracter = cadena.charAt(posicion);
    resultado = resultado + caracter;
  }
  mostrarTexto("lblResultado", resultado);
}
