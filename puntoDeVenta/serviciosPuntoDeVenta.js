const calcularValorDescuento = function (monto, porcentajeDescuento) {
  let valorDescuento = (monto * porcentajeDescuento) / 100;
  return valorDescuento;
}

const calcularIVA = function (monto) {
  let iva = (monto) * 0.12;
  return iva;
}

const calcularSubtotal = function(precio, cantidad){
    let valorSubtotal = precio * cantidad;
    return valorSubtotal;
}

const calcularTotal = function(subtotal, descuento,iva){
    let valorTotal = (subtotal-descuento)+ iva;
    return valorTotal;
}