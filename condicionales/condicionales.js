/*
tranformar los datos a Enteros Flotantes  String
ejemplo
edad=parseInt(edad);
*/


const calcularTasaInteres = function (ingresoAnual) {
  let ingresoAnualFloat = parseFloat(ingresoAnual);
  let ValorTasa;
  if (ingresoAnualFloat < 300000) {
    ValorTasa = 0.16;
  } else if (ingresoAnualFloat >= 300000 && ingresoAnualFloat < 500000) {
    ValorTasa = 0.15;
  } else if (ingresoAnualFloat >= 500000 && ingresoAnualFloat < 1000000) {
    ValorTasa = 0.14;
  } else if (ingresoAnualFloat >= 1000000 && ingresoAnualFloat < 2000000) {
    ValorTasa = 0.13;
  } else if (ingresoAnualFloat >= 2000000) {
    ValorTasa = 0.12;
  }
  return ValorTasa;
}

const calcularCapacidadPago = function (edad, ingresos, egresos) {
  let edadInt = parseInt(edad);
  let ingresoFloat = parseFloat(ingresos);
  let egresoFloat = parseFloat(egresos);
  let valorCuota;
  if (edadInt > 50) {
    valorCuota = (egresoFloat - ingresoFloat) * 0.3;
  } else if (edadInt <= 50 && edadInt >= 18) {
    valorCuota = (egresoFloat - ingresoFloat) * 0.4;
  }
  return valorCuota;
}

const calcularDescuento = function (precio, cantidad) {
  let precioFloat = parseFloat(precio);
  let cantidadInt = parseInt(cantidad);
  let valorPagar;
  let subtotal;
  let valorDescuento;
  if (cantidadInt < 3) {
    subtotal = precioFloat * cantidadInt;
    valorPagar = subtotal;
  } else if (cantidadInt >= 3 && cantidadInt >= 5) {
    subtotal = precioFloat - cantidadInt;
    valorDescuento = subtotal * 0.02;
    valorPagar = subtotal - valorDescuento;
  } else if (cantidadInt >= 6 && cantidadInt >= 11) {
    subtotal = precioFloat - cantidadInt;
    valorDescuento = subtotal * 0.03;
    valorPagar = subtotal - valorDescuento;
  } else if (cantidadInt >= 12) {
    subtotal = precioFloat - cantidadInt;
    valorDescuento = subtotal * 0.04;
    valorPagar = subtotal - valorDescuento;
  }
  return valorPagar;
}

const determinarColesterolLDL = function (nivelColesterol) {
  let nivelColesterolFloat = parseFloat(nivelColesterol);
  let colesterolLDL;
  if (nivelColesterolFloat < 100) {
    colesterolLDL = console.log(
      `Su nivel den colesterol LDL es de ${nivelColesterolFloat}. Optimo (lo mejor para sus salud)`
    );
  } else if (nivelColesterolFloat >= 100 && nivelColesterolFloat <= 129) {
    colesterolLDL = console.log(
      `Su nivel den colesterol LDL es de ${nivelColesterolFloat}. Casi optimo (mas o menos)`
    );
  } else if (nivelColesterolFloat >= 130 && nivelColesterolFloat <= 159) {
    colesterolLDL = console.log(
      `Su nivel den colesterol LDL es de ${nivelColesterolFloat}. Limite superior del rango normal`
    );
  } else if (nivelColesterolFloat >= 160 && nivelColesterolFloat <= 189) {
    colesterolLDL = console.log(
      `Su nivel den colesterol LDL es de ${nivelColesterolFloat}. NIVEL ALTO`
    );
  } else if (nivelColesterolFloat >= 190) {
    colesterolLDL = console.log(
      `Su nivel den colesterol LDL es de ${nivelColesterolFloat}. NIVEL MUY ALTO`
    );
  }
  return colesterolLDL;
}

const validarClave = function (clave) {
  if (clave.length < 8 && clave.length >= 16) {
    return true;
  } else {
    return false;
  }
}

const esMayuscula = function (caracter) {
  let letra = caracter.charCodeAt(0);
  if (letra >= 65 && letra <= 90) {
    return true;
  } else {
    return false;
  }
}

const esMinuscula = function (caracter) {
  let letra = caracter.charCodeAt(0);
  if (letra >= 97 && letra <= 122) {
    return true;
  } else {
    return false;
  }
}
const esDigito = function (caracter) {
  let valorDigital = caracter.charCodeAt(0);
  if (valorDigital >= 48 && valorDigital <= 57) {
    return true;
  } else {
    return false;
  }
}

const darPermiso = function (notaMatematica, notaFisica, notaGeometria) {
  let matematica = parseFloat(notaMatematica);
  let fisica = parseFloat(notaFisica);
  let geometria = parseFloat(notaGeometria);
  if (matematica > 90 || fisica > 90 || geometria > 90) {
    return true;
  } else {
    return false;
  }
}

const otorgarPermiso = function (notaMatematica, notaFisica, notaGeometria) {
  let matematica = parseFloat(notaMatematica);
  let fisica = parseFloat(notaFisica);
  let geometria = parseFloat(notaGeometria);
  if ((matematica > 90 || fisica > 90) && geometria > 80) {
    return true;
  } else {
    return false;
  }
}

const dejarSalir = function (notaMatematica, notaFisica, notaGeometria) {
  let matematica = parseFloat(notaMatematica);
  let fisica = parseFloat(notaFisica);
  let geometria = parseFloat(notaGeometria);
  if (
    (matematica > 90 || fisica > 90 || geometria > 90) &&
    fisica > matematica
  ) {
    return true;
  } else {
    return false;
  }
}
