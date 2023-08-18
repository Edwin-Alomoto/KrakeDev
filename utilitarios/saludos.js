saludar= function(){
    // recuperar el valor de la caja de texto
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido"); 
    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura");
    let mensajeBienvenido = ("Bienvenido "+nombre+" "+apellido);
    mostrarTexto("lblResultado",mensajeBienvenido);
}

mostrarTexto = function(idComponente, mensaje){
    let componente = document.getElementById(idComponente);
    componente.innerText=mensaje;
}

recuperarTexto = function(idComponente){
    let componente = document.getElementById(idComponente);
    let valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt= function(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat= function(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    valorDecimal = parseFloat(valorCaja);
    return valorDecimal;
}