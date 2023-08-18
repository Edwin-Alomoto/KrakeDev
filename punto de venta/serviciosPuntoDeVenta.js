const calcularValorDescuento = function (monto, porcentajeDescuento) {
  valorDescuento = (monto * porcentajeDescuento) / 100;
  return valorDescuento;
}

const calcularIVA = function (monto) {
  iva = monto * 1.12;
  return iva;
}

const calcularSubtotal = function(precio, cantidad){
    valorSubtotal = precio * cantidad;
    return valorSubtotal;
}

const calcularTotal = function(subtotal, descuento,iva){
    valorTotal = (subtotal-descuento)+ iva;
    return valorTotal;
}