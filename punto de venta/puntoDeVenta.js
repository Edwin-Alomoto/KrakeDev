calcularValorTotal = function(){
    let nombreProducto = recuperarTexto("txtProducto");
    let precioProducto = recuperarFloat("txtPrecio");
    let cantidad = recuperarInt("txtCantidad");
    let porcentajeDescuento = recuperarFloat("txtPorcentajeDescuento");

    let valorSubtotal = calcularSubtotal(precioProducto,cantidad);
    mostrarTexto("lblSubtotal",valorSubtotal);

    let valorDescuento = calcularValorDescuento(valorSubtotal,porcentajeDescuento);
    mostrarTexto("lblDescuento",valorDescuento);

    valorParaCalcularIva=valorSubtotal-valorDescuento;
    let valorIVA = calcularIVA(valorParaCalcularIva);
    mostrarTexto("lblValorIVA",valorIVA);

    let valorTotal = calcularTotal(valorSubtotal,valorDescuento,valorIVA);
    mostrarTexto("lblTotal",valorTotal);

    let mensaje = (`Valor a pagar por ${cantidad} ${nombreProducto} con ${porcentajeDescuento}% de descuento es de: $${valorTotal}`);
    mostrarTexto("lblResumen",mensaje);
}   

limpiar=function(){

        valorCero = 0;
        mostrarTextoEnCaja("txtProducto", valorCero.toFixed(1) );
        mostrarTextoEnCaja("txtCantidad", valorCero.toFixed(1));
        mostrarTextoEnCaja("txtPrecio", valorCero.toFixed(1));
        mostrarTextoEnCaja("txtPorcentajeDescuento", valorCero.toFixed(1));
        mostrarTexto("lblSubtotal", "0.0");
        mostrarTexto("lblDescuento", "0.0");
        mostrarTexto("lblValorIVA","0.0");
        mostrarTexto("lblTotal", "0.0");
        mostrarTexto("lblResumen", " ");
}
