
mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src =  rutaImagen;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
   let valorCaja= recuperarTexto(idComponente);
   let valorEntero = parseInt(valorCaja);
   return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
 }

 const esMayuscula = function (caracter) {
    let mayuscula = caracter.charCodeAt(0);
    if (mayuscula >= 65 && mayuscula <= 90) {
      return true;
    } else {
      return false;
    }
  }
  
  const esDigito = function (caracter) {
    let numero = caracter.charCodeAt(0);
    if (numero >= 48 && numero <= 57) {
      return true;
    } else {
      return false;
    }
  }
  
  const esGuion = function(caracter){
      let guion = caracter.charCodeAt(0);
      if (guion == 45){
          return true;
      }else{
          return false;
      }
  }

