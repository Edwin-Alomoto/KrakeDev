const calcularTasaInteres = function (ingresoAnual) {
  let ValorTasa;
  if (ingresoAnual < 300000) {
    ValorTasa = 0.16;
  } else if (ingresoAnual >= 300000 && ingresoAnual < 500000) {
    ValorTasa = 0.15;
  } else if (ingresoAnual >= 500000 && ingresoAnual < 1000000) {
    ValorTasa = 0.14;
  } else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000) {
    ValorTasa = 0.13;
  } else if (ingresoAnual >= 2000000) {
    ValorTasa = 0.12;
  }
  return ValorTasa;
}

const calcularCapacidadPago = function (edad, ingresos, egresos) {
  let valorCuota;
  if (edad > 50) {
    valorCuota = (egresos - ingresos) * 0.3;
  } else if (edad <= 50 && edad >= 18) {
    valorCuota = (egresos - ingresos) * 0.4;
  }
  return valorCuota;
};

const calcularDescuento = function (precio, cantidad) {
  let valorPagar;
  let subtotal;
  let valorDescuento;
  if (cantidad < 3) {
    subtotal = precio * cantidad;
    valorPagar = subtotal;
  } else if (cantidad >= 3 && cantidad >= 5) {
    subtotal = precio - cantidad;
    valorDescuento = subtotal * 0.02;
    valorPagar = subtotal - valorDescuento;
  } else if (cantidad >= 6 && cantidad >= 11) {
    subtotal = precio - cantidad;
    valorDescuento = subtotal * 0.03;
    valorPagar = subtotal - valorDescuento;
  } else if (cantidad >= 12) {
    subtotal = precio - cantidad;
    valorDescuento = subtotal * 0.04;
    valorPagar = subtotal - valorDescuento;
  }
  return valorPagar;
}

const determinarColesterolLDL = function (nivelColesterol) {
  let colesterol;
  if (nivelColesterol < 100) {
    colesterol = console.log(
      `Su nivel den colesterol LDL es de ${nivelColesterol}. Optimo (lo mejor para sus salud)`);
  } else if (nivelColesterol >= 100 && nivelColesterol <= 129) {
    colesterol = console.log(`Su nivel den colesterol LDL es de ${nivelColesterol}. Casi optimo (mas o menos)`);
  } else if (nivelColesterol >= 130 && nivelColesterol <= 159) {
    colesterol = console.log(`Su nivel den colesterol LDL es de ${nivelColesterol}. Limite superior del rango normal`);
  } else if (nivelColesterol >= 160 && nivelColesterol <= 189) {
    colesterol = console.log(`Su nivel den colesterol LDL es de ${nivelColesterol}. NIVEL ALTO`);
  } else if (nivelColesterol >= 190) {
    colesterol = console.log(`Su nivel den colesterol LDL es de ${nivelColesterol}. NIVEL MUY ALTO`);
  }
  return colesterol;
}

const validarClave = function (clave) {
  let validaClave;
  if (clave.length < 8 && clave.length >= 16) {
    validaClave = true;
  } else {
    validaClave = false;
  }
  return validaClave;
}

const esMayuscula = function (caracter) {
  let mayuscula;
  let letra = caracter.charCodeAt(0);
  if (letra >= 65 && letra <= 90) {
    mayuscula = true;
  } else {
    mayuscula = false;
  }
  return mayuscula;
}

const esMinuscula = function (caracter) {
  let miniscula;
  let letra = caracter.charCodeAt(0);
  if (letra >= 97 && letra <= 122) {
    miniscula = true;
  } else {
    miniscula = false;
  }
  return miniscula;
};

const esDigito = function (caracter) {
  let digito;
  let valorDigital = caracter.charCodeAt(0);
  if (valorDigital >= 48 && valorDigital <= 57) {
    digito = true;
  } else {
    digito = false;
  }
  return digito;
};

const darPermiso = function (notaMatematica, notaFisica, notaGeometria) {
  let permiso;
  if (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) {
    permiso = true;
  } else {
    permiso = false;
  }
  return permiso;
}

const otorgarPermiso = function (notaMatematica, notaFisica, notaGeometria) {
  let permiso;
  if ((notaMatematica > 90 || notaFisica > 90) && notaGeometria > 80) {
    permiso = true;
  } else {
    permiso = false;
  }
  return permiso;
}

const dejarSalir = function (notaMatematica, notaFisica, notaGeometria) {
  let permiso;
  if ((notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) && (notaFisica > notaMatematica)) {
    permiso = true;
  } else {
    permiso = false;
  }
  return permiso;
}
