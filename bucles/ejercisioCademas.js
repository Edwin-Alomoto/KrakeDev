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

const buscarLetra = function(cadena,letra){
    let letraIterada;
    let existeLetra=false;
    for(let i=0;i<cadena.length;i++){
        letraIterada=cadena.charAt(i);
        if(letraIterada==letra){
            existeLetra=true;
        }
    }
    if(existeLetra==true){
        return true;
    }else{
        return false;
    }
}

const contarMayuscula = function(cadena){
    let letra;
    let contadorMayuscula=0;
    for(let i=0;i<cadena.length;i++){
        letra = cadena.charAt(i);
        if(esMayuscula(letra)){
            contadorMayuscula=contadorMayuscula+1;
        }
    }

    console.log(contadorMayuscula);

}

